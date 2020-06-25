/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function NewTagAddTagIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 25 25"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="M5 12a7 7 0 0 0 7-7h13v16H5v-9zm2 13v-1h16v1H7zm-1-2v-1h18v1H6zM19.299 9.36l-5.241 5.179-1.912-1.89a1.278 1.278 0 0 0-1.78 0 1.237 1.237 0 0 0 0 1.757l2.705 2.669c.286.283.68.395 1.058.347.334.011.674-.107.929-.359l6.022-5.947a1.235 1.235 0 0 0 0-1.755 1.279 1.279 0 0 0-1.781 0zM5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zm.708-4.378H8V4.259H5.697V2H4.292v2.26H2v1.362h2.303v2.26h1.405v-2.26z"/>
            </G>
        </Svg>
    );
}
