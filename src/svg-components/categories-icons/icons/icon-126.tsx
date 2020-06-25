import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon126(props: CategoryInput) {
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
                d="M20.905 29.747a7.963 7.963 0 0 0 4.3 1.253c1.567 0 3.028-.45 4.262-1.228C33.587 30.139 36 33.682 36 38H14c0-4.446 2.558-8.07 6.905-8.253zM19.205 23a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm15.857-5.337h-2.604v-1.62h2.604V13.39h1.57v2.642h2.604v1.62h-2.604v2.653h-1.57v-2.641z"/>
        </Svg>
    );
}
