import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon90(props: CategoryInput) {
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
                d="M31 31h-3v3h6v-6h-3v3zm-14 0h3v3h-6v-6h3v3zm17-15.5V14h-6v3h3v3h3v-4.5zM15.5 14H20v3h-3v3h-3v-6h1.5zM22 31h4v3h-4v-3zm0-17h4v3h-4v-3zm-8 8h3v4h-3v-4zm17 0h3v4h-3v-4z"/>
        </Svg>
    );
}
