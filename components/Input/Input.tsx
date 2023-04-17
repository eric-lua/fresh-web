import { IS_BROWSER } from "$fresh/runtime.ts";
import { IInput } from "./Input.typing.ts";

export default function Input(props: IInput.Props) {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
        props.class ?? ""
      }`}
    />
  );
}

{/* <div class="inline-block rounded relative">
<div class="absolute left-0 pl-2 flex items-center pointer-events-none h-full">
  <Icon123 class="w-5 h-5" />
</div>
<input class="border border-gray-300 rounded w-full pl-8 py-2" type="text" />
</div> */}