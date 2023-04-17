import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { IButton } from "./Button.typing.ts";

export function Button(
  {
    type = 'default',
    ...props
  }: IButton.Props,
) {

  const getClassByType: () => string = () => {
    let style = '';
    switch (type) {
      case 'primary': {
        style = 'bg-blue-200 text-blue-800 hover:bg-blue-300 active:bg-blue-400'
        break;
      }
      case 'link': {
        style = 'inline-block bg-white hover:bg-gray-100';
        break;
      }
      default: {
        style = 'bg-white border(gray-500 2) hover:bg-gray-200 active:bg-gray-300'
        break;
      }
    }
    return style;
  }

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-3 py-2 rounded cursor-pointer disabled:(opacity-50 cursor-not-allowed) ${getClassByType()} ${props.class ?? ''}`}
    />
  );
}
