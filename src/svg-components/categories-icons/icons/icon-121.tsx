import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon121(props: CategoryInput) {
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
                d="M17.53 13.095c3.728.207 6.054-.505 7.97 2.24 1.916-2.745 4.242-2.033 7.97-2.24C36.394 12.932 39 12 39 12v26.209a.791.791 0 0 1-1.582 0V21.834a5.05 5.05 0 0 1-3.485 1.39h-3.926a5.292 5.292 0 0 1-4.507-2.519 5.292 5.292 0 0 1-4.507 2.518h-3.926A5.067 5.067 0 0 1 12 18.156V12s2.607.932 5.53 1.095zm14.052 6.025c1.387 0 2.512-1.288 2.512-1.288s-1.125-1.289-2.512-1.289-2.51 1.289-2.51 1.289 1.123 1.288 2.51 1.288zm-12.164 0c1.387 0 2.51-1.288 2.51-1.288s-1.123-1.289-2.51-1.289c-1.387 0-2.512 1.289-2.512 1.289s1.125 1.288 2.512 1.288z"/>
        </Svg>
    );
}
