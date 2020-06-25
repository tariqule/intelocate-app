import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon94(props: CategoryInput) {
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
                d="M21.183 36.65v-4.3h-2.866v4.3H9V13h21.5v23.65h-9.317zm-10.75-7.23h3.584v-3.583h-3.584v3.584zm5.017 0h3.583v-3.583H15.45v3.584zm5.017 0h3.583v-3.583h-3.583v3.584zm5.016 0h3.584v-3.583h-3.584v3.584zm-15.05-5.016h3.584V20.82h-3.584v3.583zm5.017 0h3.583V20.82H15.45v3.583zm5.017 0h3.583V20.82h-3.583v3.583zm5.016 0h3.584V20.82h-3.584v3.583zm-15.05-5.017h3.584v-3.583h-3.584v3.583zm5.017 0h3.583v-3.583H15.45v3.583zm5.017 0h3.583v-3.583h-3.583v3.583zm5.016 0h3.584v-3.583h-3.584v3.583zM39.991 37L35.9 32.125h2.373v-1.788C38.273 24.813 35 24 35 24s6.545 0 6.545 6.5v1.625H44L39.99 37z"/>
        </Svg>
    );
}
