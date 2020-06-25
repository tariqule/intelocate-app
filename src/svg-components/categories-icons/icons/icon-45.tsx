import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon45(props: CategoryInput) {
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
                d="M21.53 31.227l1.911-.892-3.38-7.25-6.285 2.93.005.01c-1.822 1.025-2.58 3.282-1.69 5.19.889 1.908 3.105 2.777 5.061 2.04l.005.01 1.48-.69 3.635 3.637a1.5 1.5 0 0 0 2.121-2.121l-2.863-2.864zm-.654-8.575l1.827-.851 2.48-5.518 6.761 14.5-5.82-1.647-1.827.852-3.42-7.336zm10.406-10.317c3.136 1.19 5.654 3.543 7.091 6.624 1.437 3.081 1.62 6.523.516 9.69l-1.63-.62c.95-2.726.792-5.69-.445-8.343-1.237-2.653-3.406-4.68-6.106-5.704l.574-1.647zm-1.774 4.456a8.138 8.138 0 0 1 4.5 4.203 8.137 8.137 0 0 1 .327 6.15l-1.63-.62a6.357 6.357 0 0 0-.256-4.803 6.358 6.358 0 0 0-3.515-3.283l.574-1.647z"/>
        </Svg>
    );
}
