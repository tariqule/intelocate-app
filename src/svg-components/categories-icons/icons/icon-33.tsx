import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon33(props: CategoryInput) {
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
                d="m26.2,24.2l0,-11.2l-13.2,0l0,12.8l10.8,0l0,11.2l13.2,0l0,-12.8l-10.8,0zm-11.2,-9.1l9.2,0l0,8.8l-9.2,0l0,-8.8z"/>
        </Svg>
    );
}
