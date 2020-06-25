import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon137(props: CategoryInput) {
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
                d="M15.145 22.733a3.489 3.489 0 0 1-.326-2.615l1.294-4.83a3.5 3.5 0 0 1 4.171-2.504 2.49 2.49 0 0 1 1.59.726l6.364 6.364a2.5 2.5 0 1 1-3.535 3.536l-2.776-2.776-.299 1.115 2.367 2.368a3.5 3.5 0 0 0 5.279-.379l3.711 3.712a2 2 0 0 1 0 2.828L30.864 32.4a5.001 5.001 0 0 1-5.363 1.12l-5.95 5.952-9.9-9.9 5.777-5.777a2.997 2.997 0 0 1-.283-1.061zm10.77-6.597l-2.83-2.828 4.243-4.243a2 2 0 1 1 2.829 2.828l-4.243 4.243zm3.483 3.586a3.515 3.515 0 0 0-.453-.555l-2.324-2.324 5.657-5.657a2 2 0 1 1 2.829 2.829l-5.657 5.657a2.036 2.036 0 0 1-.052.05zm9.244-5a2 2 0 0 1 0 2.828l-5.657 5.657a2 2 0 1 1-2.828-2.828l5.657-5.657a2 2 0 0 1 2.828 0zm2.121 4.95a2 2 0 0 1 0 2.828l-4.242 4.243a2 2 0 1 1-2.829-2.829l4.243-4.242a2 2 0 0 1 2.828 0z"/>
        </Svg>
    );
}
