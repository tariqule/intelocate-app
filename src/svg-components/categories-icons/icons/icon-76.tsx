import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon76(props: CategoryInput) {
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
                d="M14 12v21.774L25.9 39v-5.226H31V12H14zm11.9 5.226l-5.95-2.612h8.501V31.16H25.9V17.226zM39.582 26.503l.02-6.948h-2.757v4.335h-4.52v2.613z"/>
        </Svg>
    );
}
