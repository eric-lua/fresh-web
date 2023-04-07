// deno-lint-ignore-file no-explicit-any
import { JSX } from "preact";

/** render 函数 */
export interface RenderJSXNodeFn {
  (): JSX.Element;
  (...props: any[]): JSX.Element;
}