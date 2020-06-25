import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon60(props: CategoryInput) {
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
                d="M17.846 27.594l-1.451 1.451a2.994 2.994 0 0 0 4.233 4.234l6.049-6.048a2.994 2.994 0 0 0 0-4.234l-1.113-1.113 1.815-1.815 1.113 1.113a5.56 5.56 0 0 1 0 7.863l-6.049 6.049a5.56 5.56 0 0 1-7.863-7.863l3.024-3.024c-.366 1.052-.285 2.181.242 3.387zm13.428-4.96l1.451-1.452a2.994 2.994 0 0 0-4.233-4.234l-6.049 6.049a2.994 2.994 0 0 0 0 4.234l1.113 1.113-1.815 1.814-1.113-1.113a5.56 5.56 0 0 1 0-7.863l6.049-6.048a5.56 5.56 0 0 1 7.863 7.863l-3.024 3.024c.366-1.052.285-2.181-.242-3.387z"/>
        </Svg>
    );
}
