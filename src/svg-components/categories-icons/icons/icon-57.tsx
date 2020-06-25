import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon57(props: CategoryInput) {
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
                d="M12 38V26h12v12H12zm4.5-8.5h3v-3h-3v3zM19 24V12h12v12H19zm4.5-8.5h3v-3h-3v3zM26 38V26h12v12H26zm4.5-8.5h3v-3h-3v3z"/>
        </Svg>
    );
}
