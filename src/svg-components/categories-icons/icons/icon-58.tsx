import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon58(props: CategoryInput) {
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
                d="M35 16.5V12l-14 3v15.065c-.62-.056-1.434-.065-2.5-.065a3.5 3.5 0 0 0 0 7c1.933 0 4.5-1.567 4.5-3.5 0-.595 0-1.09-.023-1.5H23V19.571l10-2.142v9.64c-.62-.06-1.434-.069-2.5-.069a3.5 3.5 0 0 0 0 7c1.933 0 4.5-1.567 4.5-3.5 0-.595-.002-1.09-.03-1.5H35V16.5z"/>
        </Svg>
    );
}
