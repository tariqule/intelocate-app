/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function CheckInIcon(props: {color?: string}) {
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
                <Path d="m24.375,37c-1.196,0 -9.375,-11.02 -9.375,-15.993c0,-4.975 4.197,-9.007 9.375,-9.007s9.375,4.032 9.375,9.007c0,4.973 -8.179,15.993 -9.375,15.993zm0,-12.133c2.219,0 4.018,-1.729 4.018,-3.86c0,-2.132 -1.799,-3.86 -4.018,-3.86s-4.018,1.728 -4.018,3.86c0,2.131 1.799,3.86 4.018,3.86z"/>
            </G>
        </Svg>
    );
}
