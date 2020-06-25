import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon44(props: CategoryInput) {
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
                d="M13 37V13h24v24H13zm2-3h9v-1h-9v1zm7-14h6v-6h-6v6zm-5 8l-2 3h4l-2-3zm5 0l-2 3h4l-2-3z"/>
        </Svg>
    );
}
