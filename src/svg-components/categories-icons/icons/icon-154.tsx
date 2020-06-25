import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon154(props: CategoryInput) {
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
                d="m19.2,22.56l12.6,0l0,6.21l-12.6,0l0,-6.21zm21.97,-1.688c1.01,0 1.829,0.82 1.83,1.83l0,5.496c0,1.01 -0.82,1.829 -1.83,1.83l-0.874,0l0,-9.156l0.874,0zm-4.302,-3.872c1.01,0.001 1.83,0.82 1.83,1.83l0,13.67c0,1.01 -0.82,1.829 -1.83,1.83l-3.47,0l0,-17.33l3.47,0zm-24.566,1.83c0,-1.01 0.82,-1.829 1.83,-1.83l3.47,0l0,17.33l-3.47,0c-1.01,0 -1.83,-0.82 -1.83,-1.83l0,-13.67zm-4.302,3.872a1.832,1.832 0 0 1 1.83,-1.83l0.874,0l0,9.156l-0.874,0a1.832,1.832 0 0 1 -1.83,-1.83l0,-5.496z"/>
        </Svg>
    );
}
