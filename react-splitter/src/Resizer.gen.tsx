/* TypeScript file generated from Resizer.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

const $$toRE996312600: { [key: string]: any } = {"Horizontal": 0, "Vertical": 1};

// tslint:disable-next-line:no-var-requires
const ResizerBS = require('./Resizer.bs');

// tslint:disable-next-line:interface-over-type-literal
export type splitVariant = "Horizontal" | "Vertical";

// tslint:disable-next-line:interface-over-type-literal
export type Props<T1> = { readonly onResize: (_1:T1) => void; readonly split: splitVariant };

export const Resizer: React.ComponentType<{ readonly onResize: (_1:any) => void; readonly split: splitVariant }> = function Resizer_Resizer<T1>(Arg1: any) {
  const $props = {onResize:Arg1.onResize, split:$$toRE996312600[Arg1.split]};
  const result = React.createElement(ResizerBS.make, $props);
  return result
};
