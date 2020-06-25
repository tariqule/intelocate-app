import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon52(props: CategoryInput) {
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
                d="M26 10.027c6.74.393 12.338 5.043 14.142 11.302-2.839.039-5.4 1.227-7.24 3.12a15.608 15.608 0 0 0-7.828-2.091c-2.976 0-5.758.828-8.128 2.268A10.27 10.27 0 0 0 10 21.346c1.786-6.222 7.32-10.858 14-11.31V8.5a1 1 0 0 1 2 0v1.527zm-6.858 23.05v1.575a2.5 2.5 0 1 0 5 0v-11h2v11a4.5 4.5 0 1 1-9 0v-1.575h2z"/>
        </Svg>
    );
}
