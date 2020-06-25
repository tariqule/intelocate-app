import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon17(props: CategoryInput) {
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
                d="m39.81134,27.64473l0,-5l-3.9,0c-0.3,-1.3 -0.9,-2.4 -1.6,-3.5l2.9,-2.9l-3.5,-3.5l-3,3c-1,-0.6 -2.2,-1.1 -3.3,-1.3l0,-4.3l-5,0l0,4.3c-1.2,0.3 -2.3,0.7 -3.3,1.3l-3,-3l-3.5,3.5l2.9,2.9c-0.7,1 -1.2,2.2 -1.6,3.5l-3.9,0l0,5l3.7,0c0.2,1.4 0.7,2.7 1.4,3.8l-2.5,2.5l3.5,3.5l2.4,-2.4c1.2,0.8 2.5,1.4 4,1.7l0,3.3l5,0l0,-3.3c1.4,-0.3 2.8,-0.9 4,-1.7l2.4,2.4l3.5,-3.5l-2.5,-2.5c0.7,-1.2 1.2,-2.5 1.4,-3.8l3.5,0zm-15,4.5c-3.6,0 -6.5,-2.9 -6.5,-6.5s2.9,-6.5 6.5,-6.5s6.5,2.9 6.5,6.5s-2.9,6.5 -6.5,6.5z"/>
        </Svg>
    );
}
