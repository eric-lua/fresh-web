// deno-lint-ignore-file no-namespace
import { JSX } from "preact";

export namespace IButton {
  export interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
    type?: Type; // default
  }

  export type Type = 'default' | 'primary' | 'link'

}
