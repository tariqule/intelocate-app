import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon151(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                d="m8,26l15.015,0l1.954,2.007l-2.958,1.993l2.958,2l-2.958,2l1.978,1.913l-15.989,0l0,-9.913zm33.989,0l0,9.913l-14.029,0l-1.971,-1.913l2.954,-2l-2.954,-2l2.954,-1.99l-2.028,-2.01l15.075,0l-0.001,0zm-19.166,-13c-0.676,5.564 2.177,3.847 2.177,7.153c0,2.257 -1.853,3.847 -1.853,3.847s0.412,-0.477 0.412,-2.035c0,-2.098 -2.559,-2.352 -2.559,-4.991c0,-3.116 1.823,-3.974 1.823,-3.974zm3.912,-5c-1.014,7.587 3.265,5.246 3.265,9.754c0,3.078 -2.78,5.246 -2.78,5.246s0.618,-0.65 0.618,-2.775c0,-2.86 -3.838,-3.208 -3.838,-6.806c0,-4.248 2.735,-5.419 2.735,-5.419z"/>
        </Svg>
    );
}
