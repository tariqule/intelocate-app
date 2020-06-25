/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function StatusCompleteIcon(props: {color?: string}) {
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
                <Path fillRule="nonzero" d="m15.98984,30.98984c-8.284,0 -15,-6.716 -15,-15c0,-8.284 6.716,-15 15,-15c8.284,0 15,6.716 15,15c0,8.284 -6.716,15 -15,15zm0,-3c6.627,0 12,-5.373 12,-12s-5.373,-12 -12,-12s-12,5.373 -12,12s5.373,12 12,12z"/>
                <Path d="m20.83884,11.44984l-6.678,6.597l-2.437,-2.407a1.628,1.628 0 0 0 -2.268,0a1.576,1.576 0 0 0 0,2.238l3.446,3.401c0.365,0.361 0.869,0.503 1.349,0.443c0.426,0.014 0.86,-0.137 1.184,-0.458l7.673,-7.578a1.574,1.574 0 0 0 0,-2.236a1.63,1.63 0 0 0 -2.27,0"/>
            </G>
        </Svg>
    );
}
