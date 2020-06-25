import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon78(props: CategoryInput) {
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
                d="M25.5 32.388L16.539 37l1.711-9.769L11 20.313l10.02-1.425L25.5 10l4.48 8.888L40 20.313l-7.25 6.918L34.461 37z"/>
        </Svg>
    );
}
