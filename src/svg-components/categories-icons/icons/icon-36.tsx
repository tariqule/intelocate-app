import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon36(props: CategoryInput) {
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
                d="m35.5,14c-1.4,0 -2.5,1.1 -2.5,2.5c0,0.6 0.2,1.1 0.5,1.5l-4.7,7c-0.1,0 -0.2,0 -0.3,0c-0.2,0 -0.4,0 -0.6,0.1l-4.2,-4.4c0.2,-0.4 0.3,-0.8 0.3,-1.2c0,-1.4 -1.1,-2.5 -2.5,-2.5s-2.5,1.1 -2.5,2.5c0,0.6 0.2,1.1 0.5,1.5l-4.2,6.1c-0.2,-0.1 -0.5,-0.1 -0.8,-0.1c-1.4,0 -2.5,1.1 -2.5,2.5c0,1.4 1.1,2.5 2.5,2.5s2.5,-1.1 2.5,-2.5c0,-0.4 -0.1,-0.7 -0.2,-1l4.5,-6.5c0.1,0 0.2,0 0.2,0c0.2,0 0.4,0 0.6,-0.1l4.2,4.4c-0.2,0.4 -0.3,0.7 -0.3,1.2c0,1.4 1.1,2.5 2.5,2.5s2.5,-1.1 2.5,-2.5c0,-0.5 -0.2,-1 -0.5,-1.4l4.7,-7.1c0.1,0 0.1,0 0.2,0c1.4,0 2.5,-1.1 2.5,-2.5c0.1,-1.3 -1,-2.5 -2.4,-2.5z"/>
        </Svg>
    );
}
