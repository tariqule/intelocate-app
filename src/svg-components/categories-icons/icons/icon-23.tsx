import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon23(props: CategoryInput) {
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
                d="M34.438 20.889a3.819 3.819 0 0 1-5.401.004 3.819 3.819 0 0 1 .004-5.4 3.819 3.819 0 0 1 5.401-.005 3.819 3.819 0 0 1-.004 5.4m-7.607-7.606a6.952 6.952 0 0 0-.889 8.748l-13.6 13.6 2.438 2.437 1.995-1.996 3.34 3.34 5.497-5.496-3.34-3.34 6.23-6.23a6.955 6.955 0 0 0 8.146-1.246c2.715-2.715 2.719-7.114.008-9.825-2.71-2.71-7.11-2.707-9.825.008"/>
        </Svg>
    );
}
