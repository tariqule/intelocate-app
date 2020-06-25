import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon42(props: CategoryInput) {
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
                d="M16.149 34.268c.915.916 2.4.916 3.315 0l5.284-5.284-3.315-3.315-5.284 5.284a2.344 2.344 0 0 0 0 3.315zm9.76-11.417l1.657 1.657 6.942-6.942-1.657-1.657-6.942 6.942z"/>
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                d="M32.788 34.945l-1.658 1.658-2.023-2.023a3.001 3.001 0 0 1-.413-3.728l-9.218-9.218c-1.16.737-2.716.599-3.728-.413l-2.023-2.023 4.973-4.973 2.023 2.023a3.001 3.001 0 0 1 .413 3.728l9.218 9.218a3.001 3.001 0 0 1 3.728.413l2.023 2.023-1.658 1.658-1.657-1.658a1.172 1.172 0 1 0-1.658 1.658l1.658 1.657zM15.383 17.54l1.664 1.664a1.172 1.172 0 0 0 1.657-1.657l-1.664-1.664-1.657 1.657z"/>
        </Svg>
    );
}
