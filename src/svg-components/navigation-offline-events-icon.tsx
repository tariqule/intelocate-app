/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function NavigationOfflineEventsIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 18 14"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="M0 14h18L9 0 0 14zm10-4H8V5h2v5zm0 3H8v-2h2v2z"/>
            </G>
        </Svg>
    );
}
