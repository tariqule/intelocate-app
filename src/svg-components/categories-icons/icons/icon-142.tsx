import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon142(props: CategoryInput) {
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
                d="M29.098 18.56l6.868-7.628 5.202 4.684-6.868 7.628-4.699-.012-.503-4.672zM33 38.59h-2v-2h2v-3h4V29.5h-6v-2h6v-3.91h2v11a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1h-1zm-12-2V33h2v3.59h4v2H11a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h16v2h-4v6h-2v-6h-9v9.5h15v2H12v7.09h9zM37.053 9.725a.976.976 0 0 1 1.376-.075l3.756 3.382c.4.36.426.98.07 1.377l-.685.76-5.202-4.684.685-.76zm-3.471 11.708l-2.605-2.345.205 2.391 2.4-.046zm2.748-8.29l-5.353 5.945 2.601 2.342 5.353-5.945-2.6-2.342z"/>
        </Svg>
    );
}
