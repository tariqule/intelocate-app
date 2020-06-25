/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function LocationMarker(props: {color?: string}) {
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
                <Path d="M24.25 39C22.815 39 13 25.777 13 19.808 13 13.838 18.037 9 24.25 9S35.5 13.839 35.5 19.808C35.5 25.777 25.685 39 24.25 39zm0-14.56c2.663 0 4.821-2.074 4.821-4.632s-2.158-4.632-4.821-4.632-4.821 2.074-4.821 4.632 2.158 4.632 4.821 4.632z"/>
            </G>
        </Svg>
    );
}
