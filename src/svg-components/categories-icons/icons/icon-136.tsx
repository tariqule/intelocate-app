import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon136(props: CategoryInput) {
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
                d="M12 35h26v2H12z"/>
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                d="M29.883 12L17 21.504h4.881L20.115 31 33 21.496h-4.883z"/>
        </Svg>
    );
}
