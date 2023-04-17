// deno-lint-ignore-file no-explicit-any

import { JSX } from "preact";

export declare namespace ISelect {
  interface Instance<T = any> {
    Option?: OptionInstance;
    (props: Props<T>): JSX.Element;
  }

  interface OptionInstance {
    (props: OptionProps): JSX.Element;
    (value: string | number | boolean): JSX.Element;
  }
  interface Props<T = any> {
    children?: JSX.Element | JSX.Element[];
    value?: string | number | boolean;
    options?: Option[];
    onChange?: OnChangeEvt<T>;
  }

  interface OptionProps {
    value: string | number | boolean;
  }

  interface Option {
    label?: string;
    value: string | number | boolean | undefined;
  }

  interface OnChangeEvt<T = any> {
    (value?: string | number | boolean, item?: T): void;
  }
}