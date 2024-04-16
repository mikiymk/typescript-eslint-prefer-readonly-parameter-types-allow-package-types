import type { JSXElement } from "solid-js";

type FooProperties = {
  children: JSXElement;
};

const Foo = (properties: FooProperties /* これは報告されるはず */) => {
  return <>{properties.children}</>;
};

type BarProperties = {
  readonly children: JSXElement;
};

const Bar = (properties: BarProperties /* これは報告されないはず */) => {
  return <>{properties.children}</>;
};

export { Foo, Bar };
