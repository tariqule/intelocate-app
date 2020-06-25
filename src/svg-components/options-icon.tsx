/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Circle } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function OptionsIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#8e8e8e';
    return (
        <Svg
            viewBox="0 0 3 15"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Circle cx="1.5" cy="1.5" r="1.5"/>
                <Circle cx="1.5" cy="7.5" r="1.5"/>
                <Circle cx="1.5" cy="13.5" r="1.5"/>
            </G>
        </Svg>
    );
}
