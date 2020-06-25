import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon50(props: CategoryInput) {
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
                d="M36.53 31.983a9.017 9.017 0 0 0-3.461-4.777 5.23 5.23 0 0 1 2.18-.473h3.501c2.9 0 5.25 2.35 5.25 5.25h-7.47zm-23.236 0H6c0-2.9 2.35-5.25 5.25-5.25h3.5c.737 0 1.438.152 2.074.426a9.018 9.018 0 0 0-3.53 4.824zM9.312 21.688a3.687 3.687 0 1 1 7.375 0 3.687 3.687 0 0 1-7.375 0zm24 0a3.687 3.687 0 1 1 7.375 0 3.687 3.687 0 0 1-7.375 0zM34.824 34.8H15a7.434 7.434 0 0 1 7.434-7.434h4.957a7.434 7.434 0 0 1 7.433 7.434zM19.69 20.222a5.222 5.222 0 1 1 10.444 0 5.222 5.222 0 0 1-10.444 0"/>
        </Svg>
    );
}
