import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon86(props: CategoryInput) {
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
                d="M13 14v-1h23v23h-2V15H15v21h-2V14zm3 2l5.95 4v12L16 36V16zm17 0v20l-5.95-4V20L33 16zm-13.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.5-.5zm10 0a.5.5 0 0 0-.5.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.5-.5z"/>
        </Svg>
    );
}
