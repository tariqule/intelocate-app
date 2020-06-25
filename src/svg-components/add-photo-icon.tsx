/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function AddPhotoIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 24 24"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Path
                fill={color}
                fillRule="evenodd"
                d="m3,4l0,-3l2,0l0,3l3,0l0,2l-3,0l0,3l-2,0l0,-3l-3,0l0,-2l3,0zm3,6l0,-3l3,0l0,-3l7,0l1.83,2l3.17,0c1.1,0 2,0.9 2,2l0,12c0,1.1 -0.9,2 -2,2l-16,0c-1.1,0 -2,-0.9 -2,-2l0,-10l3,0zm7,9c2.76,0 5,-2.24 5,-5s-2.24,-5 -5,-5s-5,2.24 -5,5s2.24,5 5,5zm-3.2,-5c0,1.77 1.43,3.2 3.2,3.2s3.2,-1.43 3.2,-3.2s-1.43,-3.2 -3.2,-3.2s-3.2,1.43 -3.2,3.2z"/>
        </Svg>
    );
}
