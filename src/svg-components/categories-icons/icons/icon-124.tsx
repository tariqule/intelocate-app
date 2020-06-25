import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon124(props: CategoryInput) {
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
                d="M19 22.75a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm9.375 9.75a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zM27.25 25a1.5 1.5 0 0 1 1.5-1.5h6.75A1.5 1.5 0 0 1 37 25v3.75a1.5 1.5 0 0 1-1.5 1.5h-6.75a1.5 1.5 0 0 1-1.5-1.5V25zm8.625 9.75a1.125 1.125 0 1 1 0-2.251 1.125 1.125 0 0 1 0 2.25zm-3.75 0a1.125 1.125 0 1 1 0-2.251 1.125 1.125 0 0 1 0 2.25zm-20.625 3h27a1.5 1.5 0 0 0 1.5-1.5v-15c0-.774-.589-1.404-1.342-1.485l-25.466-6.74a.75.75 0 0 0-.384 1.45l19.928 5.275H11.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5z"/>
        </Svg>
    );
}
