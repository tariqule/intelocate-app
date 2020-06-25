import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon43(props: CategoryInput) {
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
                d="M11.297 26.475l13.687-13.687a2 2 0 0 1 1.721-.562L36.8 13.794l1.482 10.008a2 2 0 0 1-.564 1.708L24.025 39.203a2 2 0 0 1-2.828 0l-9.9-9.9a2 2 0 0 1 0-2.828zm21.92-4.95a3 3 0 1 0-4.242-4.243 3 3 0 0 0 4.243 4.243z"/>
        </Svg>
    );
}
