import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon135(props: CategoryInput) {
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
                d="M20.332 15c6.508 5.644 11.536 9.019 11.665 16.465.094 5.464-1.79 7.517-6.656 9.535 4.755-5.631 4.115-11.303-1.918-17.015.468 2.677-.325 5.756-2.382 9.238-.333-1.899-1.082-3.344-2.247-4.335-.334 1.718-.888 3.163-1.662 4.335-1.596 2.417-1.21 5.01 1.16 7.777-2.313-1.065-5.957-2.628-6.279-8.414-.26-4.68 3.47-7.907 6.116-12.47 1.186-2.045 1.92-3.75 2.203-5.116zm14.51 2.18H31v-2.342h3.842V11h2.316v3.82H41v2.342h-3.842V21h-2.316v-3.82z"/>
        </Svg>
    );
}
