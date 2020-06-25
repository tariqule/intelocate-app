import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon109(props: CategoryInput) {
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
                d="m38.55,39l-26.1,0c-0.801,0 -1.45,-0.675 -1.45,-1.5s0.649,-1.5 1.45,-1.5l26.1,0c0.801,0 1.45,0.675 1.45,1.5s-0.649,1.5 -1.45,1.5zm-21.346,-13l16.592,0l2.204,6l-21,0l2.204,-6zm5.975,-14.05c1.551,-3.933 4.09,-3.933 5.642,0l3.179,8.05l-12,0l3.179,-8.05z"/>
        </Svg>
    );
}
