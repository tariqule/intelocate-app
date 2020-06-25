import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon159(props: CategoryInput) {
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
                d="m14.567,33.986l3.97,0l0,3.971l4.095,0l0,-3.971l9.519,0l0,-2.836l0,-0.567l-9.519,0l0,-2.091l6.027,0c2.363,0 4.292,-0.72 5.787,-2.163c1.495,-1.44 2.242,-3.302 2.242,-5.583c0,-2.28 -0.747,-4.141 -2.242,-5.584c-1.495,-1.44 -3.424,-2.162 -5.787,-2.162l-10.121,0l0,11.717l-4.538,0l0,3.775l4.537,0l0,2.091l-4.537,0l0,3.403l0.567,0zm8.065,-17.21l5.672,0c1.253,0 2.263,0.366 3.031,1.099c0.768,0.732 1.152,1.69 1.152,2.871c0,1.182 -0.384,2.14 -1.152,2.871c-0.768,0.734 -1.778,1.1 -3.03,1.1l-5.673,0l0,-7.941z"/>
        </Svg>
    );
}
