import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon61(props: CategoryInput) {
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
                d="M16 15h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1zm-6 4h4v2h-4v-2zm0 5h4v2h-4v-2zm0 5h4v2h-4v-2zm26-10h4v2h-4v-2zm0 5h4v2h-4v-2zm0 5h4v2h-4v-2zm-5-19v4h-2v-4h2zm-5 0v4h-2v-4h2zm-5 0v4h-2v-4h2zm10 26v4h-2v-4h2zm-5 0v4h-2v-4h2zm-5 0v4h-2v-4h2z"/>
        </Svg>
    );
}
