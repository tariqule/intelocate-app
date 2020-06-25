import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon162(props: CategoryInput) {
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
                d="m33.65,29.84c0,3.42 -2.423,6.342 -6.845,7.111l0,3.92l-3.768,0l0,-3.648c-2.578,-0.117 -5.076,-0.811 -6.537,-1.654l1.154,-4.5c1.615,0.886 3.883,1.693 6.383,1.693c2.191,0 3.691,-0.848 3.691,-2.385c0,-1.461 -1.23,-2.389 -4.077,-3.348c-4.112,-1.385 -6.921,-3.306 -6.921,-7.033c0,-3.386 2.385,-6.035 6.499,-6.845l0,-3.651l3.767,0l0,3.383c2.576,0.115 4.309,0.652 5.576,1.268l-1.115,4.348c-0.997,-0.424 -2.767,-1.311 -5.536,-1.311c-2.5,0 -3.307,1.076 -3.307,2.154c0,1.268 1.346,2.074 4.613,3.307c4.579,1.613 6.423,3.728 6.423,7.191z"/>
        </Svg>
    );
}
