/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function OfflineModeEventsIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 20 20"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m0,15.91466l18,0l-9,-14l-9,14zm10,-4l-2,0l0,-5l2,0l0,5zm0,3l-2,0l0,-2l2,0l0,2z"/>
            </G>
        </Svg>
    );
}
