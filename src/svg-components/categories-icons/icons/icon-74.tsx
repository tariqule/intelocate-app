import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon74(props: CategoryInput) {
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
                d="M23.59 32.686c.551-.416 1.438-.686 2.439-.686 1 0 1.887.27 2.438.686.371-.28.59-.625.59-1 0-.931-1.356-1.686-3.028-1.686-1.673 0-3.029.755-3.029 1.686 0 .375.22.72.59 1zM26 38c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm-4-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
        </Svg>
    );
}
