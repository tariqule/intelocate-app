import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon66(props: CategoryInput) {
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
                d="M32.746 28.806l.04-.009.009-.04-.05.05zm-1.123.187c-3.864.474-7.9-.773-10.866-3.739a13.09 13.09 0 0 1-3.543-12.029 13.09 13.09 0 0 1 12.029 3.544 13.078 13.078 0 0 1 3.739 10.865L20.749 16.761l10.874 12.232zM12.209 40.566h2.952a1.925 1.925 0 0 0 0-3.85H12.21a3.609 3.609 0 1 1 6.386 0h14.97a1.925 1.925 0 1 1 0 3.85h-14.97a3.609 3.609 0 0 1-6.386 0zm20.373-1.925a.962.962 0 0 0 1.925 0 .962.962 0 1 0-1.925 0z"/>
        </Svg>
    );
}
