import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon24(props: CategoryInput) {
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
                d="M25.433 36.125c-5.978 0-10.823-4.846-10.823-10.823h21.646c0 5.977-4.846 10.823-10.823 10.823zm.433-3.03a2.598 2.598 0 1 0 0-5.196 2.598 2.598 0 0 0 0 5.196zm-14.72-14.72h27.708v5.195H11.146v-5.195z"/>
        </Svg>
    );
}
