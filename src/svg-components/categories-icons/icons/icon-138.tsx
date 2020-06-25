import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon138(props: CategoryInput) {
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
                d="M18 16h14v18H18V16zm2 2v14h10V18H20zm-9.145 8.637H4.273V24.09h6.582l-2.927-2.927 1.8-1.8 6 6-6 6-1.8-1.8 2.927-2.927zm28.288 0l2.927 2.927-1.8 1.8-6-6 6-6 1.8 1.8-2.927 2.927h6.582v2.546h-6.582z"/>
        </Svg>
    );
}
