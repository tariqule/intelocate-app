import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon102(props: CategoryInput) {
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
                d="M27.81 22.972a2.972 2.972 0 0 1-2.97 2.975 2.972 2.972 0 0 1-2.97-2.975 2.972 2.972 0 0 1 2.97-2.974c1.64 0 2.97 1.332 2.97 2.974m-8.372 0a5.406 5.406 0 0 1 5.402-5.41 5.406 5.406 0 0 1 5.402 5.41 5.412 5.412 0 0 1-3.797 5.168v6.856h3.676v6.05h-3.676v2.196h-2.683V28.275a5.41 5.41 0 0 1-4.324-5.303zM30.753 6h4.424v7.016L40 15.802l-2.21 3.83L25 12.25l-12.788 7.382L10 15.802l15-8.661 5.753 3.32V6z"/>
        </Svg>
    );
}
