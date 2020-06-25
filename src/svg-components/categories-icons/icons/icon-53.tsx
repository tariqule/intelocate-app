import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon53(props: CategoryInput) {
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
                d="M36.636 21.875c0-3.797-3.052-6.875-6.818-6.875-1.732 0-3.297.671-4.499 1.747C24.115 15.67 22.553 15 20.82 15 17.051 15 14 18.078 14 21.875c0 2.066.923 3.896 2.354 5.157l8.965 8.732 8.965-8.732c1.432-1.26 2.352-3.091 2.352-5.157z"/>
        </Svg>
    );
}
