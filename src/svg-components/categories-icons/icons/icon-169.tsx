import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon169(props: CategoryInput) {
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
                d="m25.5,39c-7.456,0 -13.5,-6.044 -13.5,-13.5s6.044,-13.5 13.5,-13.5s13.5,6.044 13.5,13.5s-6.044,13.5 -13.5,13.5zm4.364,-17.586l-6.01,5.938l-2.193,-2.167a1.465,1.465 0 0 0 -2.041,0a1.418,1.418 0 0 0 0,2.014l3.101,3.061c0.328,0.325 0.782,0.453 1.214,0.399c0.383,0.012 0.774,-0.123 1.065,-0.412l6.906,-6.82c0.56,-0.553 0.56,-1.458 0,-2.013a1.466,1.466 0 0 0 -2.042,0z"/>
        </Svg>
    );
}
