import * as React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon2(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Polygon
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                points="30.16088 17.8660568 30.16088 22.1789272 24.6005009 18.9685951 10.10155 27.3406376 12.2398639 31.0431062 24.6005009 23.9071274 36.9630454 31.0431062 39.0994517 27.3406376 34.4375078 24.6472396 34.4375078 17.8660568"/>
        </Svg>
    );
}
