import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon1(props: CategoryInput) {
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
                d="M23.4523636,12.0007912 L19.501035,15.9924396 L18.4926434,14.9737582 L15.2168392,18.284967 L16.2232727,19.3016703 L12.2719441,23.2952967 L18.0148811,29.0928791 L29.1933427,17.7983736 L23.4523636,12.0007912 Z M26.4503217,23.0122418 L23.1745175,26.3214725 L33.5384336,36.7911429 C34.443049,37.704989 35.9096224,37.704989 36.8142378,36.7911429 C37.7188531,35.8772967 37.7188531,34.3957582 36.8142378,33.4819121 L26.4503217,23.0122418 Z"/>
        </Svg>
    );
}
