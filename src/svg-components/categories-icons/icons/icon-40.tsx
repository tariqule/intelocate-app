import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon40(props: CategoryInput) {
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
                d="m36.7,28c-1.3,0 -2.5,0.5 -3.4,1.4l-6.4,-9.7c1.9,-0.7 3.2,-2.5 3.2,-4.7c0,-2.8 -2.2,-5 -5,-5s-5,2.2 -5,5c0,2.1 1.4,4 3.2,4.7l-6.4,9.7c-0.9,-0.8 -2.1,-1.4 -3.4,-1.4c-2.8,0 -5,2.2 -5,5s2.2,5 5,5s5,-2.2 5,-5l13,0c0,2.8 2.2,5 5,5s5,-2.2 5,-5s-2,-5 -4.8,-5zm-14.5,-13c0,-1.7 1.3,-3 3,-3s3,1.3 3,3c0,1.4 -1,2.7 -2.4,2.9l0,0l0,0c-0.2,0 -0.4,0.1 -0.6,0.1c-1.7,0 -3,-1.4 -3,-3zm-8.5,21c-1.7,0 -3,-1.3 -3,-3s1.3,-3 3,-3s3,1.3 3,3s-1.3,3 -3,3zm4.7,-5l6.8,-10.4l6.8,10.4l-13.6,0zm18.3,5c-1.7,0 -3,-1.3 -3,-3l0,0l0,0c0,-0.6 0.2,-1.2 0.5,-1.7l0,0c0.5,-0.8 1.4,-1.3 2.5,-1.3c1.7,0 3,1.3 3,3s-1.3,3 -3,3z"/>
        </Svg>
    );
}
