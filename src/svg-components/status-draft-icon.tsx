/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function StatusDraftIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#6BD6F1';
    return (
        <Svg
            viewBox="0 0 32 32"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m28.10107,28.10107l0,-14l3,0l0,17l-30,0l0,-30l17,0l0,3l-14,0l0,24l24,0z" fillRule="nonzero"/>
                <Path d="m22.40707,5.57107l4.471,4.471l-8.941,8.941l-4.47,-4.47l8.94,-8.941l0,-0.001zm-10.058,10.06l4.47,4.47l-5.098,0.627l0.628,-5.098l0,0.001zm15.942,-13.117l1.642,1.642a2,2 0 0 1 0,2.829l-1.938,1.938l-4.47,-4.47l1.938,-1.939a2,2 0 0 1 2.828,0z"/>
            </G>
        </Svg>
    );
}
