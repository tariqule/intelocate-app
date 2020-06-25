import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon35(props: CategoryInput) {
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
                d="m38.5,23.8c-1.4,-3.6 -4.3,-6.4 -7.8,-7.8c-1.7,-0.7 -3.5,-1 -5.3,-1c-5.8,0 -11,3.5 -13.2,8.9l-0.2,0.4l0.2,0.4c1.4,3.6 4.3,6.4 7.8,7.8c1.7,0.7 3.5,1 5.3,1c5.8,0 11,-3.5 13.2,-8.9l0.2,-0.4l-0.2,-0.4zm-13.2,7.6c-1.6,0 -3.1,-0.3 -4.6,-0.9c-2.9,-1.2 -5.3,-3.5 -6.6,-6.4c2,-4.4 6.3,-7.3 11.1,-7.3c1.6,0 3.1,0.3 4.6,0.9c2.9,1.2 5.3,3.5 6.6,6.4c-1.9,4.5 -6.2,7.3 -11.1,7.3z"/>
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                d="m25.3,18.1c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm-2,5.5c-0.8,0 -1.5,-0.7 -1.5,-1.5s0.7,-1.5 1.5,-1.5s1.5,0.7 1.5,1.5s-0.7,1.5 -1.5,1.5z"/>
        </Svg>
    );
}
