import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon93(props: CategoryInput) {
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
                d="M29.385 31.077h-10.77v2.077a1 1 0 0 1-1 1h-1.077a1 1 0 0 1-1-1v-2.077H14v-5.692a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.692h-1.538v2.077a1 1 0 0 1-1 1h-1.077a1 1 0 0 1-1-1v-2.077zm.879-7.692l-1.649-3.847h-9.23l-1.649 3.847h-1.428L18.615 18h10.77l2.307 5.385h-1.428zM10 15v-1h28v20h-2V16H12v18h-2V15zm20.923 10.692a1.538 1.538 0 1 0 0 3.077 1.538 1.538 0 1 0 0-3.077zm-13.846 0a1.538 1.538 0 1 0 0 3.077 1.538 1.538 0 0 0 0-3.077z"/>
        </Svg>
    );
}
