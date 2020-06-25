import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon25(props: CategoryInput) {
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
                d="m12,12l0,24l24,0l0,-24l-24,0zm16.9,15.5l1.5,1.5l-1.4,1.4l-1.5,-1.5c-2.1,1.5 -4.9,1.5 -7,0l-1.5,1.5l-1.4,-1.4l1.5,-1.5c-1.5,-2.1 -1.5,-4.9 0,-7l-1.5,-1.5l1.4,-1.4l1.5,1.5c2.1,-1.5 4.9,-1.5 7,0l1.5,-1.5l1.4,1.4l-1.5,1.5c1.5,2.2 1.5,4.9 0,7z"/>
        </Svg>
    );
}
