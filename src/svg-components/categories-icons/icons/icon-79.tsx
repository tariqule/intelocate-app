import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon79(props: CategoryInput) {
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
                d="M35.427 15.355C29.256 15.355 25 12 25 12s-4.256 3.355-10.427 3.355c0 0-4.256 15.097 10.427 22.645 14.683-7.548 10.427-22.645 10.427-22.645z"/>
        </Svg>
    );
}
