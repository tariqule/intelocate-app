import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon34(props: CategoryInput) {
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
                d="m12,15l0,5l0,1l0,14l26,0l0,-14l0,-1l0,-5l-26,0zm24,18.1l-22,0l0,-11l22,0l0,11zm-1.5,-16.1c0.8,0 1.5,0.7 1.5,1.5s-0.7,1.5 -1.5,1.5s-1.5,-0.7 -1.5,-1.5s0.7,-1.5 1.5,-1.5zm-4,0c0.8,0 1.5,0.7 1.5,1.5s-0.7,1.5 -1.5,1.5s-1.5,-0.7 -1.5,-1.5s0.7,-1.5 1.5,-1.5zm-4,0c0.8,0 1.5,0.7 1.5,1.5s-0.7,1.5 -1.5,1.5s-1.5,-0.7 -1.5,-1.5s0.7,-1.5 1.5,-1.5z"/>
        </Svg>
    );
}
