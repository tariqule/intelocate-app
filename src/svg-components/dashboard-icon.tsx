/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function DashboardIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 20 20"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Path
                d="M11 20h9v-9h-9zM0 9h20V0H0zm0 11h9v-9H0z"
                fillRule="evenodd"
                fill={color}
            />
        </Svg>
    );
}
