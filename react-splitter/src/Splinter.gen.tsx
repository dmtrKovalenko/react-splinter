/* TypeScript file generated from Splinter.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const SplinterBS = require('./Splinter.bs');

import {splitVariant as Resizer_splitVariant} from './Resizer.gen';

// tslint:disable-next-line:interface-over-type-literal
export type Props = { readonly children: JSX.Element[]; readonly split: Resizer_splitVariant };

export const Splinter: React.ComponentType<{ readonly children: JSX.Element[]; readonly split: Resizer_splitVariant }> = SplinterBS.make;
