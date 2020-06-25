import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon56(props: CategoryInput) {
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
                d="M15 16c3.398 2.034 6.763 2.034 10.095 0 3.24 2.034 6.542 2.034 9.905 0-.035 8-.035 12 0 12 0 4.787-3.333 8.12-10 10-6.561-1.844-9.895-5.177-10-10V16z"/>
        </Svg>
    );
}
