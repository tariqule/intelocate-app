import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon22(props: CategoryInput) {
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
                d="M22.208 13v6.814l-5.916-3.407L13 22.093l5.916 3.407L13 28.907l3.292 5.686 5.916-3.407V38h6.584v-6.814l5.916 3.407L38 28.907 32.084 25.5 38 22.093l-3.292-5.686-5.916 3.407V13z"/>
        </Svg>
    );
}
