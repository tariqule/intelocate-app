import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon4(props: CategoryInput) {
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
                d="M15.0820291,13.3775594 L15.0820291,35.1513084 L27.2747772,40.3771 L27.2747772,35.1513084 L32.5005688,35.1513084 L32.5005688,13.3775594 L15.0820291,13.3775594 Z M27.2747772,18.603351 L21.1784031,15.9916038 L29.8888215,15.9916038 L29.8888215,32.537264 L27.2747772,32.537264 L27.2747772,18.603351 Z"/>
        </Svg>
    );
}
