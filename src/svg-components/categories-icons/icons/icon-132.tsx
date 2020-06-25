import * as React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon132(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G transform="translate(-20)">
                <Path
                    fill={getCodeWithColor(props).color}
                    fillRule="evenodd"
                    /* tslint:disable:max-line-length */
                    d="M60 22.568V36.1h-2V23.31l-13.002 4.819L27 21.456l17.998-7.373L63 21.456l-3 1.112zM45.014 30.47l11.052-4.375.046 7.502S51.144 37 45.014 37c-5.868 0-11.086-2.885-11.055-2.885.02 0 .007-2.674-.04-8.023l11.095 4.379z"/>
            </G>
        </Svg>
    );
}
