import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon148(props: CategoryInput) {
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
                d="m13,13l9.614,0l2.128,5.676l-1.733,4.877l6.578,6.614l-3.84,-6.614l2.073,-4.877l-0.966,-5.676l10.146,0l0,24l-24,0l0,-24z"/>
        </Svg>
    );
}
