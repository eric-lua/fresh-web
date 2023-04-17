// deno-lint-ignore-file no-namespace
import { JSX } from "preact";

export namespace IInput {
  export interface Props extends JSX.HTMLAttributes<HTMLInputElement> {
    // type?: Type; // text
    textd?: string;
  }

  export type Type = 'text' | 'primary' | 'link';

}
