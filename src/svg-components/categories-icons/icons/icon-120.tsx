import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon120(props: CategoryInput) {
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
                d="M13.286 26.143h1.075l4.5-4.5h3.636l-4.5 4.5h4.078l4.5-4.5h3.636l-4.5 4.5h4.078l4.5-4.5h3.636l-4.5 4.5h3.868L39 24.435v11.35c0 .711-.575 1.286-1.286 1.286H14.571c-.71 0-1.285-.575-1.285-1.285v-9.643zm7.773-6.17l-3.916.817 3.79-6.044 3.916-.817-3.79 6.044zm7.714-1.285l-3.916.816 3.79-6.044 3.917-.817-3.79 6.045zm7.082-1.36l-3.926.819 3.79-6.045.36-.075c.695-.144 1.376.301 1.521.997l.788 3.775-2.533.529zM12 21.986c0-.703.38-1.311.942-1.649l-.444-2.127c-.145-.695.301-1.376.996-1.521l3.988-.832-2.748 4.382c.507.235.89.681 1.043 1.227.047.167.08.339.08.52a1.928 1.928 0 0 1-1.928 1.929c-.227 0-.441-.047-.643-.119A1.922 1.922 0 0 1 12 21.986z"/>
        </Svg>
    );
}
