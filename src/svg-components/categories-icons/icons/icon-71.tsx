import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon71(props: CategoryInput) {
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
                d="M12.209 40.566h2.952a1.925 1.925 0 0 0 0-3.85H12.21a3.609 3.609 0 1 1 6.386 0h14.97a1.925 1.925 0 1 1 0 3.85h-14.97a3.609 3.609 0 0 1-6.386 0zm20.373-1.925a.962.962 0 0 0 1.925 0 .962.962 0 1 0-1.925 0zM17 28.876h15.1V10H17v18.876zm7.549-15.473l2.512 4.35H22.04l2.51-4.35zm-2.51 7.752h5.022l-2.512 4.352-2.51-4.352z"/>
        </Svg>
    );
}
