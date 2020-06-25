import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon63(props: CategoryInput) {
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
                d="M37.526 22.316h-1.473a3 3 0 0 0-3 3v7.42a3 3 0 0 0 3 3h1.473A4.474 4.474 0 0 0 42 31.264V26.79a4.474 4.474 0 0 0-4.474-4.473zm-25.052 0A4.474 4.474 0 0 0 8 26.789v4.474a4.474 4.474 0 0 0 4.474 4.474h1.473a3 3 0 0 0 3-3v-7.421a3 3 0 0 0-3-3h-1.473z"/>
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                d="M37.526 20.526v-.54C37.526 13.366 31.918 8 25 8s-12.526 5.366-12.526 11.986v.54h2.48v-.54c0-5.31 4.497-9.613 10.046-9.613 5.549 0 10.047 4.304 10.047 9.613v.54h2.48z"/>
        </Svg>
    );
}
