import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon70(props: CategoryInput) {
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
                d="M10 16h30v-3H10zM10 20h30v-3H10zM10 24h30v-3H10zM10 28h30v-3H10zM12.209 40.566h2.952a1.925 1.925 0 0 0 0-3.85H12.21a3.609 3.609 0 1 1 6.386 0h14.97a1.925 1.925 0 1 1 0 3.85h-14.97a3.609 3.609 0 0 1-6.386 0zm20.373-1.925a.962.962 0 0 0 1.925 0 .962.962 0 1 0-1.925 0z"/>
        </Svg>
    );
}
