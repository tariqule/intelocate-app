import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon10(props: CategoryInput) {
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
                d="M19.6951429,34.5524545 L30.3022857,34.5524545 L30.3022857,31.257 L19.6951429,31.257 L19.6951429,34.5524545 Z M19.6951429,39 L30.3048571,39 L30.3048571,35.7045455 L19.6951429,35.7045455 L19.6951429,39 Z M25,10 C20.0294286,10 16,14.1311818 16,19.2272727 C16,22.3724545 19.6951429,30.1022727 19.6951429,30.1022727 L30.3022857,30.1022727 C30.3022857,30.1022727 34,22.3724545 34,19.2272727 C34,14.1311818 29.9705714,10 25,10 Z M23.8762857,27.6847273 L26.1262857,27.6847273 L26.1262857,19.4460909 L23.8762857,19.4460909 L23.8762857,27.6847273 Z"/>
        </Svg>
    );
}
