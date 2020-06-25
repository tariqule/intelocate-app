import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon103(props: CategoryInput) {
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
                d="M31.693 21.292l-4.45-8.905a.5.5 0 0 1 .224-.67l1.328-.664a.5.5 0 0 1 .67.224l5.005 10.015h4.03a.5.5 0 0 1 .5.5v2.763a.5.5 0 0 1-.5.5h-1.306L34.08 38.506a1 1 0 0 1-.974.775H16.984a1 1 0 0 1-.974-.774l-3.128-13.452H11.5a.5.5 0 0 1-.5-.5v-2.763a.5.5 0 0 1 .5-.5h4.03l5.005-10.015a.5.5 0 0 1 .67-.224l1.328.663a.5.5 0 0 1 .224.67l-4.45 8.906h13.386zM17.88 25.356v9.86h1.5v-9.86h-1.5zm4.27 0v9.86h1.5v-9.86h-1.5zm4.27 0v9.86h1.5v-9.86h-1.5zm4.27 0v9.86h1.5v-9.86h-1.5z"/>
        </Svg>
    );
}
