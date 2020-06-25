import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon134(props: CategoryInput) {
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
                d="M35.427 15.355S39.683 30.452 25 38c-14.683-7.548-10.427-22.645-10.427-22.645C20.744 15.355 25 12 25 12s4.256 3.355 10.427 3.355zm-7.128 5.006l-5.241 5.178-1.912-1.89a1.278 1.278 0 0 0-1.78 0 1.237 1.237 0 0 0 0 1.757l2.705 2.669c.286.283.68.395 1.058.347.334.011.674-.107.929-.359l6.022-5.947a1.235 1.235 0 0 0 0-1.755 1.279 1.279 0 0 0-1.781 0z"/>
        </Svg>
    );
}
