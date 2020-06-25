import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon67(props: CategoryInput) {
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
                d="M22.821 9.579V7h1.642v2.579h-1.642zm-4.206 2.007l-1.163 1.163-1.823-1.826 1.162-1.16 1.824 1.823zM13 18.566v-1.644h2.579v1.644H13zm22.57-.55c0 .762-.457 1.41-1.107 1.71a10.62 10.62 0 0 1-6.942 8.285v.954h-7.697v-3.057h7.697v.097a8.738 8.738 0 0 0 5.074-6.484c-.474-.344-.802-.874-.802-1.504a1.888 1.888 0 1 1 3.777 0zm-4.268-.039a6.998 6.998 0 1 1-13.996 0 6.998 6.998 0 0 1 13.996 0zm-6.998-1.465a1.504 1.504 0 1 0 .001 3.01 1.504 1.504 0 0 0 0-3.01zM12.209 40.566h2.952a1.925 1.925 0 0 0 0-3.85H12.21a3.609 3.609 0 1 1 6.386 0h14.97a1.925 1.925 0 1 1 0 3.85h-14.97a3.609 3.609 0 0 1-6.386 0zm20.373-1.925a.962.962 0 0 0 1.925 0 .962.962 0 1 0-1.925 0z"/>
        </Svg>
    );
}
