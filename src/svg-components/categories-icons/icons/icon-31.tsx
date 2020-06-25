import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon31(props: CategoryInput) {
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
                d="M25 32.5l-8.817 4.635 1.684-9.817-7.133-6.953 9.858-1.433L25 10l4.408 8.932 9.858 1.433-7.133 6.953 1.684 9.817z"/>
        </Svg>
    );
}
