import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon146(props: CategoryInput) {
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
                d="M33.792 11H16.92c-1.064 0-1.92.85-1.92 1.902v24.197A1.91 1.91 0 0 0 16.92 39h16.872c1.06 0 1.92-.853 1.92-1.901V12.902A1.91 1.91 0 0 0 33.792 11zm-8.435 27.288a1.135 1.135 0 0 1-1.142-1.129c0-.624.51-1.13 1.142-1.13.63 0 1.141.506 1.141 1.13 0 .624-.512 1.129-1.141 1.129zm8.412-3.248H16.944V13.285h16.825V35.04z"/>
        </Svg>
    );
}
