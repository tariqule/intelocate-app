import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon152(props: CategoryInput) {
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
                d="m32.536,32.888a3.074,3.074 0 0 1 -3.062,2.85l-11.404,0a3.074,3.074 0 0 1 -3.07,-3.072l0,-16.227c0,-0.243 0.196,-0.439 0.439,-0.439l16.666,0c0.243,0 0.44,0.196 0.44,0.439l0,1.224c0.778,-0.461 1.694,-0.786 2.728,-0.786c2.034,0 3.671,1.145 4.381,3.063c0.416,1.125 0.458,2.43 0.12,3.676a6.882,6.882 0 0 1 -2.186,3.418c-2.23,1.911 -4.378,3.93 -4.99,5.735a0.44,0.44 0 0 1 -0.062,0.119zm0.008,-5.36c0.97,-1.013 2.054,-1.975 3.046,-2.825c1.331,-1.141 1.547,-2.717 1.185,-3.698c-0.179,-0.482 -0.584,-1.058 -1.502,-1.058c-1.117,0 -2.163,1.066 -2.729,1.819l0,5.762z"/>
        </Svg>
    );
}
