import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon15(props: CategoryInput) {
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
                d="M30.4880222,25.65338 L22.3298,30.3651578 C21.5844667,30.7927133 20.6571333,30.2582689 20.6571333,29.39738 L20.6571333,19.9767133 C20.6571333,19.1187133 21.5844667,18.58138 22.3298,19.0118244 L30.4880222,23.7236022 C31.2304667,24.1511578 31.2304667,25.2229356 30.4880222,25.65338 M24.6871333,12.0004911 C17.6815778,12.0004911 11.9991333,17.6800467 11.9991333,24.6884911 C11.9991333,31.6940467 17.6815778,37.3764911 24.6871333,37.3764911 C31.6955778,37.3764911 37.3751333,31.6940467 37.3751333,24.6884911 C37.3751333,17.6800467 31.6955778,12.0004911 24.6871333,12.0004911"/>
        </Svg>
    );
}
