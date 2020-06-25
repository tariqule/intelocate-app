import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon48(props: CategoryInput) {
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
                d="M18 13h15a1 1 0 0 1 1 1v23a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1zm1 2v6h13v-6H19zm0 8v3h3v-3h-3zm5 0v3h3v-3h-3zm5 0v3h3v-3h-3zm-10 5v3h3v-3h-3zm5 0v3h3v-3h-3zm5 0v3h3v-3h-3zm-10 5v3h3v-3h-3zm5 0v3h3v-3h-3zm5 0v3h3v-3h-3z"/>
        </Svg>
    );
}
