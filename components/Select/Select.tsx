import { JSX } from "preact";
import { useState } from "preact/hooks";
import { ISelect } from "./Select.typing.ts";
import { useEffect } from "preact/hooks";

const isCustom = true;

// deno-lint-ignore no-explicit-any
const SelectCustom: <T = any>(props: ISelect.Props<T>) => JSX.Element = ({ value, onChange, options }) => {
  const [isFouces, setIsFouces] = useState(false);

  // deno-lint-ignore no-explicit-any
  const handleOptionItemClick: <T = any>(item: T) => void = (item) => {
    console.log('被点击的item: ', item);
  }

  const renderSelectInput = () => {
    return <input type="text" readonly
      // onFocus={(evt) => {
      //   console.log('onfocusin: ', evt);
      //   setIsFouces(true);
      // }}
      onFocusCapture={(evt) => {
        console.log('onfocusin: ', evt);
        setIsFouces(true);
      }}
      // onBlur={(evt) => {
      //   console.log('onBlurCapture: ', evt)
      //   setIsFouces(false);
      // }}
      onBlurCapture={(evt) => {
        console.log('onBlurCapture: ', evt)
        setIsFouces(false);
      }}
    />
  }

  const renderSelectOptions = () => {
    return isFouces && <ul>
      {options?.map((opt) => <li onClick={(evt) => {
        evt.stopPropagation();
        handleOptionItemClick(opt)
      }}>{opt?.label ?? opt?.value}</li>)}
    </ul>;
  }

  return <div>
    <div>
      {renderSelectInput()}
    </div>
    <div>
      {renderSelectOptions()}
    </div>
    <br />
    <br />
    <select value={value} onChange={onChange}>
      {options?.map((opt) => <option value={opt.value}>{opt?.label ?? opt?.value}</option>)}
    </select>;
  </div>
}

const SelectHeml: ISelect.Instance = ({
  value, onChange, options,
}: ISelect.Props) => {
  return <select value={value} onChange={onChange}>
    {options?.map((opt) => <option value={opt.value}>{opt?.label ?? opt?.value}</option>)}
  </select>;
}

const Select = isCustom ? SelectCustom : SelectHeml;

export { Select }
