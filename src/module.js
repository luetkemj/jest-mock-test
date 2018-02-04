export function foo() {
  return lib.baz();
}

export function baz() {
  return 'buzz';
}

export const lib = {
  baz,
};
