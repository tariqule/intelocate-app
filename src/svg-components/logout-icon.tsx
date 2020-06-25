/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function LogoutIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 16 16"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m0,0l2,0l0,16l-2,0l0,-16zm4,6l4,0l0,4l-4,0l0,-4zm12,2l-8,5l0,-10l8,5z"/>
            </G>
        </Svg>
    );
}
