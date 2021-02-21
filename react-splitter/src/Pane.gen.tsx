/* TypeScript file generated from Pane.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const PaneBS = require('./Pane.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props<initialSize> = {
  readonly _renderResizer?: () => JSX.Element; 
  readonly children: React.ReactNode; 
  readonly initialSize?: initialSize; 
  readonly size?: string
};

export const Pane: React.ComponentType<{
  readonly _renderResizer?: () => JSX.Element; 
  readonly children: React.ReactNode; 
  readonly initialSize?: any; 
  readonly size?: string
}> = PaneBS.make;
