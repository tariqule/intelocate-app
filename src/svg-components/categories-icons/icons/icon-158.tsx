import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon158(props: CategoryInput) {
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
                d="m28.793,17.948l7.897,0l0,7.107l-9.476,0l0,-1.58l-4.738,0l0,1.58l-9.476,0l0,-7.107l7.897,0l0,-1.948a2,2 0 0 1 2,-2l3.896,0a2,2 0 0 1 2,2l0,1.948zm-1.58,8.686l9.477,0l0,10.266l-23.69,0l0,-10.266l9.476,0l0,1.58l4.738,0l0,-1.58l-0.001,0zm-3.736,-11.054a1,1 0 0 0 -1,1l0,1.37l4.738,0l0,-1.37a1,1 0 0 0 -1,-1l-2.738,0z"/>
        </Svg>
    );
}
