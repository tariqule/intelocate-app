import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon18(props: CategoryInput) {
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
                d="m12.73965,17.10811c0.1,0.2 0.3,0.4 0.4,0.5l4.2,4.2c1.4,1.4 3.6,1.4 5,0c1.4,-1.4 1.4,-3.6 0,-5l-4.2,-4.2c-0.2,-0.2 -0.3,-0.3 -0.5,-0.4c2.6,-0.8 5.5,-0.2 7.6,1.8c2,2 2.7,4.9 1.9,7.5l10.2,10.2c1.4,1.4 1.4,3.6 0,4.9c-1.4,1.4 -3.6,1.4 -4.9,0l-10.2,-10.2c-2.6,0.8 -5.5,0.2 -7.5,-1.9c-2.3,-1.9 -2.9,-4.8 -2,-7.4zm22.7,17.8c0.6,-0.6 0.6,-1.5 0,-2.1c-0.6,-0.6 -1.5,-0.6 -2.1,0c-0.6,0.6 -0.6,1.5 0,2.1c0.5,0.6 1.5,0.6 2.1,0z"/>
        </Svg>
    );
}
