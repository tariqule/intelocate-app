import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon26(props: CategoryInput) {
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
                d="M25 16.758a6.571 6.571 0 0 1 6.571 6.572H18.43A6.571 6.571 0 0 1 25 16.758zm-8.339 17.98H33.34v3.127H16.66v-3.127zm14.91-1.248H18.43V23.33H31.57v10.16zM24.18 15.116V11.83h1.445v3.286H24.18zM13.5 23.134v-1.447h3.286v1.447H13.5zm2.975-8.077l1.023-1.023 2.323 2.323-1.023 1.024-2.323-2.324zm14.627 2.324l-1.023-1.024 2.323-2.323 1.024 1.023-2.324 2.324zm2.112 5.942v-1.447H36.5v1.447h-3.286z"/>
        </Svg>
    );
}
