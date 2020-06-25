import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon20(props: CategoryInput) {
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
                d="m36.4,27.2l0,-3l-2.7,0c-0.1,-1.8 -0.7,-3.5 -1.7,-4.9l2.2,-2.2l-2.2,-2.2l-2.2,2.2c-1.1,-0.8 -2.3,-1.3 -3.5,-1.5l0,0l0,-3.6l-3,0l0,3.5c-1.5,0.2 -2.8,0.7 -4,1.6l-2.2,-2.2l-2.2,2.2l2.2,2.2c-1,1.4 -1.6,3.2 -1.7,4.9l-3.4,0l0,3l3.8,0c0.3,0.9 0.7,1.8 1.3,2.6l-2.2,2.2l2.2,2.2l2.2,-2.2c1.2,0.9 2.6,1.4 4,1.6l0,2.8l3,0l0,-2.9c1.3,-0.3 2.5,-0.8 3.5,-1.5l2.2,2.2l2.2,-2.2l-2.2,-2.2c0.6,-0.8 1,-1.7 1.3,-2.6l3.1,0zm-11.8,3.5c-3.4,0 -6.1,-2.7 -6.1,-6.1c0,-3.4 2.7,-6.1 6.1,-6.1s6.1,2.7 6.1,6.1c0,3.3 -2.7,6.1 -6.1,6.1z"/>
        </Svg>
    );
}
