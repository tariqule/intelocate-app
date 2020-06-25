/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function ChecklistIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#9b9b9b';
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
                <Path d="m12.17,2.02302a3.001,3.001 0 0 1 5.66,0l2.17,0l0,4l-10,0l0,-4l2.17,0zm-4.17,3l0,3l14,0l0,-3l1.01,0c1.099,0 1.99,0.89 1.99,2.004l0,20.992a2.002,2.002 0 0 1 -1.99,2.004l-16.02,0c-1.099,0 -1.99,-0.89 -1.99,-2.004l0,-20.992c0,-1.107 0.898,-2.004 1.99,-2.004l1.01,0zm7,-1a1,1 0 1 0 0,-2a1,1 0 0 0 0,2zm3.124,10.315l-4.579,4.524l-1.67,-1.65a1.116,1.116 0 0 0 -1.555,0a1.08,1.08 0 0 0 0,1.534l2.363,2.332c0.25,0.247 0.595,0.345 0.924,0.304a1.1,1.1 0 0 0 0.812,-0.314l5.261,-5.196a1.079,1.079 0 0 0 0,-1.534a1.117,1.117 0 0 0 -1.556,0z"/>
            </G>
        </Svg>
    );
}
