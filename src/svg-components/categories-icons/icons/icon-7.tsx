import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon7(props: CategoryInput) {
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
                d="M16.4501302,35.6876271 L33.5498698,35.6876271 L33.5498698,14.3123729 L16.4501302,14.3123729 L16.4501302,35.6876271 Z M24.9988407,18.1659007 L27.8437737,23.0929443 L22.1562263,23.0929443 L24.9988407,18.1659007 Z M22.1562263,26.9441535 L27.8437737,26.9441535 L24.9988407,31.8735157 L22.1562263,26.9441535 Z"/>
        </Svg>
    );
}
