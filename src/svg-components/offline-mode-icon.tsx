/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function OfflineModeIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 22 22"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m16.74183,8.129a5.44,5.44 0 0 1 -0.311,10.871l-10.88,0a5.44,5.44 0 0 1 -0.311,-10.871a5.44,5.44 0 0 1 5.431,-5.129l0.64,0c2.9,0 5.27,2.27 5.431,5.129zm-5.614,5.387l2.48,2.48l1.498,-1.5l-2.491,-2.491l2.487,-2.487l-1.52,-1.52l-2.488,2.486l-2.48,-2.48l-1.498,1.5l2.491,2.491l-2.487,2.487l1.52,1.52l2.488,-2.486z"/>
            </G>
        </Svg>
    );
}
