/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function MainInfoIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#9b9b9b';
    return (
        <Svg
            viewBox="0 0 30 31"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m10,0l10,6l-20,0l10,-6zm-10,21l20,0l0,-15l-20,0l0,15z"/>
            </G>
        </Svg>
    );
}
