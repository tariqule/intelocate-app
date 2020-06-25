/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function HomeIcon(props: {color?: string}) {
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
                <Path d="m10,0l9.49318,5.712l-18.98636,0l9.49318,-5.712zm-9.49318,19.99199l18.98636,0l0,-14.27999l-18.98636,0l0,14.27999z"/>
            </G>
        </Svg>
    );
}
