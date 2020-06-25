import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon65(props: CategoryInput) {
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
                d="M13 40.775h2.952a1.925 1.925 0 0 0 0-3.85H13a3.609 3.609 0 0 1 6.386 0h14.97a1.925 1.925 0 1 1 0 3.85h-14.97a3.609 3.609 0 0 1-6.386 0zm20.373-1.925a.962.962 0 1 0 1.925 0 .962.962 0 0 0-1.925 0zM19.695 29v-2h10.607v2H19.695zm.005 3v-2h10.61v2H19.7zM25 6c4.97 0 9 4.131 9 9.227 0 3.145-3.698 10.875-3.698 10.875H19.695S16 18.372 16 15.227C16 10.131 20.03 6 25 6zm-1.124 17.685h2.25v-8.239h-2.25v8.239z"/>
        </Svg>
    );
}
