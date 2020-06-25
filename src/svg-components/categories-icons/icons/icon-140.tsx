import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon140(props: CategoryInput) {
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
                d="M30.929 16.276v8.195H20.07v-8.195c0-2.928 2.43-5.3 5.429-5.3 2.998 0 5.429 2.372 5.429 5.3zm-.742 16.197c.64-.63 1.69-.63 2.333 0 .64.635.64 1.669 0 2.3l-7.891 7.794c-.334.33-.78.485-1.218.471a1.667 1.667 0 0 1-1.387-.456l-3.544-3.497a1.62 1.62 0 0 1 0-2.303 1.675 1.675 0 0 1 2.332 0l2.506 2.476 6.869-6.785zM18.61 25.478H32.39V28H18.61v-2.522zm6.21-15.828V7h1.195v2.65H24.82zM16 16.118v-1.167h2.714v1.167H16zm2.466-6.537l.825-.826 1.92 1.92-.826.825-1.92-1.92zM30.532 11.5l-.825-.826 1.92-1.919.825.826-1.92 1.919zm1.754 4.77v-1.167H35v1.168h-2.714z"/>
        </Svg>
    );
}
