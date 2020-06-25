import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon89(props: CategoryInput) {
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
                d="M9 13h6a2 2 0 0 1 2 2v22H7V15a2 2 0 0 1 2-2zm3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6-1h26v6H18v-6zm0 0l4 6h2l-4-6h-2zm5 0l4 6h2l-4-6h-2zm5 0l4 6h2l-4-6h-2zm5 0l4 6h2l-4-6h-2zm5 0l4 6h2l-4-6h-2z"/>
        </Svg>
    );
}
