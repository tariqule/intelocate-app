/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function StatusOverdueIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#6BD6F1';
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="nonzero"
            >
                <Path d="M24.5 11.954L12.223 33h24.554L24.5 11.954zM24.5 6L42 36H7L24.5 6z"/>
            </G>
        </Svg>
    );
}
