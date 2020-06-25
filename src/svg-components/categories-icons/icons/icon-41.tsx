import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon41(props: CategoryInput) {
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
                d="m37.5,38l-24,0l0,-26l24,0l0,26zm-22,-2l20,0l0,-22l-20,0l0,22z"/>
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                d="m17.5,15.9l7,0l0,10l-7,0l0,-10zm9,0l7,0l0,2l-7,0l0,-2zm0,4l7,0l0,2l-7,0l0,-2zm0,4l7,0l0,2l-7,0l0,-2zm-9,4l16,0l0,2l-16,0l0,-2zm0,4l16,0l0,2l-16,0l0,-2z"/>
        </Svg>
    );
}
