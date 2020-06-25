import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon156(props: CategoryInput) {
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
                d="m11.772,18.333l-0.105,0l2.666,-5.833l21.334,0l2.666,5.833l-0.105,0a3.333,3.333 0 1 1 -6.457,0l-0.21,0a3.333,3.333 0 1 1 -6.457,0l-0.209,0a3.333,3.333 0 1 1 -6.457,0l-0.21,0a3.333,3.333 0 1 1 -6.457,0l0.001,0zm26.561,3.334l0,15.833l-15.833,0l0,-10.833l-7.5,0l0,10.833l-3.333,0l0,-15.833a4.16,4.16 0 0 0 3.333,1.666a4.16,4.16 0 0 0 3.333,-1.666a4.16,4.16 0 0 0 3.334,1.666a4.16,4.16 0 0 0 3.333,-1.666a4.16,4.16 0 0 0 3.333,1.666a4.16,4.16 0 0 0 3.334,-1.666a4.16,4.16 0 0 0 3.333,1.666a4.16,4.16 0 0 0 3.333,-1.666zm-12.5,12.427l9.167,0l0,-7.427l-9.167,0l0,7.427z"/>
        </Svg>
    );
}
