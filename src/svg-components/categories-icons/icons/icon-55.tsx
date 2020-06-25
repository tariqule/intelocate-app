import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon55(props: CategoryInput) {
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
                d="M13 16h24a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1zm0 4.433v3h24v-3H13zM31 27v4h4v-4h-4z"/>
        </Svg>
    );
}
