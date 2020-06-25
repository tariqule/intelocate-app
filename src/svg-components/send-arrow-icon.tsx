/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, Polygon } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function SendArrowIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 45 34"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Polygon
                fill={color}
                fillRule="evenodd"
                points="24.994,31.705 36.908,20 0,20 0,15 36.908,15 24.994,3.006 27.822,0.273 45,17.499 27.822,34.605   "
            />
        </Svg>
    );
}
