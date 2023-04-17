import { JSX } from "preact";
import { ISelect } from "./Select.typing.ts";
import { useEffect } from "preact/hooks";


export const Select: ISelect.Instance = ({
  value, onChange, children,
}: ISelect.Props) => {
  return <select value={value} onChange={onChange}>
    {children}
  </select>;
}

Select.Option = ({ value }: { value: string | number | boolean }): JSX.Element => {
  useEffect(() => {
    console.log('options: ', value, Select);
  }, [value])

  return <option key={Math.random()} value={value}>{value}</option>;
}
