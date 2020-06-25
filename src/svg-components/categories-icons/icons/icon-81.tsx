import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon81(props: CategoryInput) {
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
                d="M16.832 10.561c4.556 3.892 8.075 6.219 8.166 11.353.066 3.768-1.254 5.183-4.66 6.575 3.329-3.883 2.882-7.794-1.342-11.732.328 1.845-.228 3.968-1.667 6.37-.233-1.31-.758-2.306-1.573-2.99-.234 1.185-.622 2.181-1.163 2.99-1.118 1.666-.847 3.453.812 5.362-1.62-.735-4.17-1.813-4.396-5.802-.182-3.227 2.43-5.452 4.281-8.598.83-1.41 1.344-2.586 1.542-3.528zM31.5 40c-3.584 0-6.5-2.854-6.5-6.362 0-1.434.431-2.754 1.247-3.817L31.5 23l5.253 6.82C37.569 30.885 38 32.205 38 33.639 38 37.146 35.084 40 31.5 40"/>
        </Svg>
    );
}
