import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon114(props: CategoryInput) {
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
                d="m36.96,22.614a3.75,3.75 0 1 1 -7.5,-0.001a3.75,3.75 0 0 1 7.5,0l0,0.001zm-6.867,12.953a3.75,3.75 0 1 1 0,-7.5a3.75,3.75 0 0 1 0,7.5zm-8.843,-19.09a3.75,3.75 0 1 1 7.5,-0.001a3.75,3.75 0 0 1 -7.5,0l0,0.001zm-1.385,19.09a3.75,3.75 0 1 1 0,-7.5a3.75,3.75 0 0 1 0,7.5zm-6.797,-12.954a3.75,3.75 0 1 1 7.5,-0.001a3.75,3.75 0 0 1 -7.5,0l0,0.001zm11.932,-12.612c-8.284,0 -15,6.716 -15,15c0,8.284 6.716,15 15,15c8.284,0 15,-6.716 15,-15c0,-8.284 -6.716,-15 -15,-15z"/>
        </Svg>
    );
}
