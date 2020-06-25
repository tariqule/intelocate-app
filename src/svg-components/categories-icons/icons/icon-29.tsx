import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon29(props: CategoryInput) {
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
                d="M22.17 12a3.001 3.001 0 0 1 5.66 0H30v4H20v-4h2.17zM18 15v3h14v-3h1.01c1.099 0 1.99.89 1.99 2.004v20.992A2.002 2.002 0 0 1 33.01 40H16.99c-1.099 0-1.99-.89-1.99-2.004V17.004c0-1.107.898-2.004 1.99-2.004H18zm7-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3.124 10.315l-4.579 4.524-1.67-1.65a1.116 1.116 0 0 0-1.555 0 1.08 1.08 0 0 0 0 1.534l2.363 2.332c.25.247.595.345.924.304a1.1 1.1 0 0 0 .812-.314l5.261-5.196a1.079 1.079 0 0 0 0-1.534 1.117 1.117 0 0 0-1.556 0z"/>
        </Svg>
    );
}
