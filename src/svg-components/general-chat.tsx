import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function GeneralChatIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 40 40"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="M29.225 25.586a7.214 7.214 0 0 0-2.77-3.821 4.185 4.185 0 0 1 1.745-.379H31a4.2 4.2 0 0 1 4.2 4.2h-5.975zm-18.59 0H4.8a4.2 4.2 0 0 1 4.2-4.2h2.8c.59 0 1.15.122 1.66.34a7.214 7.214 0 0 0-2.825 3.86zM7.45 17.35a2.95 2.95 0 1 1 5.9 0 2.95 2.95 0 0 1-5.9 0zm19.2 0a2.95 2.95 0 1 1 5.9 0 2.95 2.95 0 0 1-5.9 0zm1.21 10.49H12a5.947 5.947 0 0 1 5.947-5.947h3.965a5.947 5.947 0 0 1 5.948 5.947zM15.752 16.177a4.177 4.177 0 1 1 8.355 0 4.177 4.177 0 0 1-8.355 0"/>
            </G>
        </Svg>
    );
}
