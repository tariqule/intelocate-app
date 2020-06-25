/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function OfflineModeMessageIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 48 48"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m32.986,18l0.014,0a8,8 0 0 1 8,8l0,1a8,8 0 0 1 -8,8l-18,0a8,8 0 0 1 -8,-8l0,-1a8,8 0 0 1 8,-8l0.014,0a8.5,8.5 0 0 1 8.486,-8l1,0a8.5,8.5 0 0 1 8.486,8z"/>
            </G>
        </Svg>
    );
}
