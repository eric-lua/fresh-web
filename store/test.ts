import { signal } from "@preact/signals";

export const counter = signal<number>(10);
export const setCounter = (n: number) => counter.value += n;
export const testSignals = {
  counter,
}
