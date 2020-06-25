import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon72(props: CategoryInput) {
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
                d="M19.792 15.478L24.863 14l4.275 1.393a8 8 0 0 0 3.794.285L37 15v16c0 3.688-12.5 8.158-12.5 8 0-.012-12.5-4-12.5-8V15c.209 0 1.6.226 4.172.677a8 8 0 0 0 3.62-.2zm5.582 3.82c-1.28 0-2.257.328-2.935.982-.677.654-1.016 1.603-1.016 2.848v1.025h-1.441v2.405h1.441v.85c0 .325-.037.597-.112.817-.076.22-.196.415-.36.586-.166.17-.483.392-.952.664v2.718h9.213v-2.83h-5.826c.92-.446 1.38-1.103 1.38-1.972v-.833h2.987v-2.405h-2.987v-.92c0-.412.08-.713.24-.904.158-.19.406-.286.742-.286.602 0 1.33.159 2.188.477l.955-2.51a8.985 8.985 0 0 0-3.517-.711z"/>
        </Svg>
    );
}
