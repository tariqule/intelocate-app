import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon170(props: CategoryInput) {
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
                d="m25.5,39c-7.456,0 -13.5,-6.044 -13.5,-13.5s6.044,-13.5 13.5,-13.5s13.5,6.044 13.5,13.5s-6.044,13.5 -13.5,13.5zm-7.2,-14.4l0,2.7l14.4,0l0,-2.7l-14.4,0z"/>
        </Svg>
    );
}
