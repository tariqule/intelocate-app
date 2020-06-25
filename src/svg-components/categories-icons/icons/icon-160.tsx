import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon160(props: CategoryInput) {
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
                d="m37.432,26.12c-0.34,-3.292 -1.936,-6.514 -4.492,-9.07c-5.324,-5.32 -13.217,-6.088 -17.596,-1.705c-4.38,4.381 -3.615,12.272 1.707,17.594c2.556,2.556 5.778,4.152 9.07,4.492c0.44,0.046 0.872,0.069 1.299,0.069c2.83,0 5.362,-0.992 7.226,-2.856c2.144,-2.142 3.135,-5.17 2.786,-8.524zm-7.79,2.702c-1.744,-1.331 -3.635,-1.858 -5.688,-2.42c-5.169,-1.418 -7.736,-5.73 -8.336,-10.785c1.456,1.756 2.531,3.763 4.319,5.233c1.904,1.566 4.001,2.136 6.304,2.803c5.057,1.467 7.558,5.742 8.133,10.719c-1.578,-1.897 -2.736,-4.025 -4.733,-5.55l0.001,0z"/>
        </Svg>
    );
}
