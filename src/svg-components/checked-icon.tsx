/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function CheckedIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 30 30"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m22.86948,7.02126l-11.13,10.997l-4.06,-4.013a2.714,2.714 0 0 0 -3.78,0a2.627,2.627 0 0 0 0,3.731l5.743,5.668c0.608,0.602 1.447,0.838 2.247,0.738a2.672,2.672 0 0 0 1.974,-0.763l12.788,-12.63a2.623,2.623 0 0 0 0,-3.727a2.716,2.716 0 0 0 -3.782,0"/>
            </G>
        </Svg>
    );
}
