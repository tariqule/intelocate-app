import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon38(props: CategoryInput) {
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
                d="M24 10.05V20h2v-9.95c5.053.5 9 4.763 9 9.95v10c0 5.523-4.476 10-10 10-5.523 0-10-4.475-10-10V20c0-5.185 3.946-9.449 9-9.95zM15 20h20v2H15v-2z"/>
        </Svg>
    );
}
