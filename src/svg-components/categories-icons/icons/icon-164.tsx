import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon164(props: CategoryInput) {
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
                d="m28.82,12.452c0.327,-0.208 0.553,-0.649 0.553,-1.163c0,-0.712 -0.433,-1.289 -0.965,-1.289l-6.872,0c-0.532,0 -0.964,0.577 -0.964,1.288c0,0.514 0.225,0.956 0.553,1.163c-1.473,2.006 -2.961,5.273 -3.035,5.434l-0.09,0.201l0,18.476a3.442,3.442 0 0 0 3.434,3.438l7.075,0a3.442,3.442 0 0 0 3.437,-3.438l0,-18.478l-0.092,-0.199c-0.073,-0.161 -1.562,-3.427 -3.035,-5.433l0.001,0zm-3.95,5.852c-2.425,1.82 -5.86,0 -5.86,0s1.785,-3.938 3.297,-5.727l5.329,0c1.51,1.79 3.297,5.727 3.297,5.727s-3.64,-1.818 -6.063,0z"/>
        </Svg>
    );
}
