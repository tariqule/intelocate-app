import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon46(props: CategoryInput) {
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
                d="M12 14h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 8h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 8h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm24-12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </Svg>
    );
}
