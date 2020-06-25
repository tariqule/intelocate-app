import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon37(props: CategoryInput) {
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
                d="M21.5 11.75h8l-1.778 5.334h-4.444L21.5 11.751zm1.778 7.334h4.456L29.5 38.64l-3.946 3.124L21.5 38.64l1.778-19.556z"/>
        </Svg>
    );
}
