import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon54(props: CategoryInput) {
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
                d="M30.5 31.412V40.5l-4.975-2-5.025 2v-9.088a11.956 11.956 0 0 0 5 1.088c1.784 0 3.478-.39 5-1.088zm-5-.412C19.701 31 15 26.299 15 20.5S19.701 10 25.5 10 36 14.701 36 20.5 31.299 31 25.5 31zm0-7.35l3.703 1.947-.707-4.124 2.996-2.92-4.14-.601L25.5 14.2l-1.852 3.752-4.14.601 2.996 2.92-.707 4.124L25.5 23.65z"/>
        </Svg>
    );
}
