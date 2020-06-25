import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon87(props: CategoryInput) {
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
                d="M14.479 12.842v20.903l11.705 5.017v-5.017H31.2V12.842H14.479zm11.705 5.017l-5.853-2.507h8.362v15.884h-2.51V17.859z"/>
        </Svg>
    );
}
