// deno-lint-ignore-file no-explicit-any

/** Object.prototype.hasOwnProperty.call */
export const hasPrototype = (obj: Record<string, any>, attr: string) => Object.prototype.hasOwnProperty.call(obj, attr);

/** 16 位 random string */
export const genRandom: () => string = () => {
  const tmp = `${(Math.random() * 10000000).toFixed(0)}-${(new Date).getTime().toString().substring(5)}`;
  return tmp.substring(0, 16);
}
