import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon167(props: CategoryInput) {
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
                d="m31,26l-12,0l0,-1l-1,0l0,2l14,0l0,-2l-1,0l0,1zm-15,-14l18,0l0,26l-18,0l0,-26zm5,3l0,8l8,0l0,-8l-8,0zm3.666,1c1.302,1.302 2.308,2.081 2.333,3.8c0.02,1.26 -0.358,1.734 -1.33,2.2c0.95,-1.3 0.822,-2.608 -0.384,-3.926c0.093,0.617 -0.065,1.328 -0.477,2.131c-0.066,-0.438 -0.216,-0.771 -0.45,-1c-0.066,0.396 -0.177,0.73 -0.332,1c-0.319,0.558 -0.242,1.156 0.233,1.795c-0.463,-0.246 -1.192,-0.606 -1.256,-1.942c-0.053,-1.08 0.694,-1.824 1.223,-2.877c0.237,-0.472 0.384,-0.866 0.44,-1.181z"/>
        </Svg>
    );
}
