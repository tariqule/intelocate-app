import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon129(props: CategoryInput) {
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
                d="M13.294 31.983H6c0-2.9 2.35-5.25 5.25-5.25h3.5c.737 0 1.438.152 2.074.426a9.018 9.018 0 0 0-3.53 4.824zM43.429 11c.315 0 .571.256.571.571v6.286a.571.571 0 1 1-1.143 0V18l-2.262-.49-.181.731a.998.998 0 0 1-1.212.73l-2.773-.69a1.001 1.001 0 0 1-.729-1.212l.146-.585-2.795-.604A.57.57 0 0 1 32 15.57v-1.714a.571.571 0 0 1 1.051-.308l9.806-2.12v.142c0-.315.256-.571.572-.571zm-3.847 7.034l.175-.704-3.073-.665-.152.61a.143.143 0 0 0 .104.174l2.773.69a.14.14 0 0 0 .173-.105zm-30.27 3.654a3.687 3.687 0 1 1 7.375 0 3.687 3.687 0 0 1-7.375 0zM34.824 34.8H15a7.434 7.434 0 0 1 7.434-7.434h4.957a7.434 7.434 0 0 1 7.433 7.434zM19.69 20.222a5.222 5.222 0 1 1 10.444 0 5.222 5.222 0 0 1-10.444 0z"/>
        </Svg>
    );
}
