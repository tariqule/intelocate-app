import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon168(props: CategoryInput) {
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
                d="m27,11.29l0,4.21a0.5,0.5 0 1 0 1,0l0,-3.826a7,7 0 0 1 4,6.326l1,0l0,2l-16,0l0,-2l1,0a7,7 0 0 1 4,-6.326l0,3.826a0.5,0.5 0 1 0 1,0l0,-4.21a6.96,6.96 0 0 1 1,-0.22l0,-1.07l2,0l0,1.07a6.96,6.96 0 0 1 1,0.22zm-7.453,9.71l11.317,0a6,6 0 1 1 -11.317,0zm1.358,8.747a7.963,7.963 0 0 0 4.3,1.253c1.567,0 3.028,-0.45 4.262,-1.228c4.12,0.367 6.533,3.91 6.533,8.228l-22,0c0,-4.446 2.558,-8.07 6.905,-8.253z"/>
        </Svg>
    );
}
