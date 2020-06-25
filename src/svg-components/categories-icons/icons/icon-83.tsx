import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon83(props: CategoryInput) {
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
                d="M27 24v13.75l7.7 3.3v-3.3H38V24H27zm7.7 3.3l-3.85-1.65h5.5V36.1H34.7v-8.8zM13 11h11v16H13V11zm1 9v1h9v-1h-9zm0-1v1h1v-1h-1zm8 0v1h1v-1h-1zm-6-6v5h5v-5h-5z"/>
        </Svg>
    );
}
