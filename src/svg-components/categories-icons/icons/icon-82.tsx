import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon82(props: CategoryInput) {
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
                d="M22.661 13.935C19.015 13.935 16.5 12 16.5 12s-2.515 1.935-6.161 1.935c0 0-2.515 8.71 6.161 13.065 8.676-4.355 6.161-13.065 6.161-13.065zM30.5 25.27a4.286 4.286 0 0 1 4.286 4.286h-8.572A4.286 4.286 0 0 1 30.5 25.27zm-5.438 11.726h10.876v2.04H25.062v-2.04zm9.724-.814h-8.572v-6.626h8.572v6.626zM29.964 24.2v-2.143h.943v2.143h-.943zM23 29.429v-.945h2.143v.944H23zm1.94-5.268l.667-.668 1.516 1.515-.668.668-1.515-1.515zm9.54 1.515l-.668-.668 1.516-1.515.667.668-1.515 1.515zm1.377 3.875v-.943H38v.943h-2.143z"/>
        </Svg>
    );
}
