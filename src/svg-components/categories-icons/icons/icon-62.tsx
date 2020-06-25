import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon62(props: CategoryInput) {
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
                d="M26.679 32.09h5.172v-7.671H26.68v7.671zm-7.945-10.525c.414-3.242 3.161-5.767 6.516-5.767 3.353 0 6.1 2.525 6.517 5.767H18.734zm-.085 10.525h5.175v-7.671H18.65v7.671zm15.972-10.525c-.432-4.817-4.443-8.621-9.37-8.621-4.929 0-8.942 3.804-9.371 8.62h-.085v13.38h18.911v-13.38h-.085z"/>
        </Svg>
    );
}
