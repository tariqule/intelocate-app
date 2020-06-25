import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon150(props: CategoryInput) {
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
                d="m25,41c-2.206,0 -4,-1.847 -4,-4.117c0,-0.927 0.265,-1.781 0.768,-2.47l3.232,-4.413l3.232,4.413c0.503,0.688 0.768,1.543 0.768,2.47c0,2.27 -1.794,4.117 -4,4.117zm-17,-24l15.015,0l1.954,2.007l-2.958,1.993l2.958,2l-2.958,2l1.978,1.913l-15.989,0l0,-9.913zm33.989,0l0,9.913l-14.029,0l-1.971,-1.913l2.954,-2l-2.954,-2l2.954,-1.99l-2.028,-2.01l15.075,0l-0.001,0z"/>
        </Svg>
    );
}
