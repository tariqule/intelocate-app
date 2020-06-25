import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon49(props: CategoryInput) {
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
                d="M36 28v-5H15v5h-3a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2zm-19-3h17v10H17V25zm18.5-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </Svg>
    );
}
