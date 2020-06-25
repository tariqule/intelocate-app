import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon149(props: CategoryInput) {
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
                d="m25,35c-5.523,0 -10,-4.477 -10,-10s4.477,-10 10,-10s10,4.477 10,10s-4.477,10 -10,10zm4.653,-6.083a5.2,5.2 0 0 0 -9.36,0.112a0.52,0.52 0 1 0 0.94,0.442a4.16,4.16 0 0 1 7.49,-0.09a0.52,0.52 0 1 0 0.93,-0.464zm-1.273,-5.477a1.3,1.3 0 1 0 0,-2.6a1.3,1.3 0 0 0 0,2.6zm-6.76,0a1.3,1.3 0 1 0 0,-2.6a1.3,1.3 0 0 0 0,2.6z"/>
        </Svg>
    );
}
