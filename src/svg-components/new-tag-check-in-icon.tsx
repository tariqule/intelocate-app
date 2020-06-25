/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function NewTagCheckInIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 25 25"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="M8.059 11.298a7.006 7.006 0 0 0 3.889-5.44A7.71 7.71 0 0 1 15.5 5c4.142 0 7.5 3.226 7.5 7.205C23 16.185 16.457 25 15.5 25 14.543 25 8 16.185 8 12.205c0-.307.02-.61.059-.907zm7.441 3.995c1.775 0 3.214-1.382 3.214-3.088 0-1.705-1.439-3.088-3.214-3.088s-3.214 1.383-3.214 3.088c0 1.706 1.439 3.088 3.214 3.088zM5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zm.708-4.378H8V4.259H5.697V2H4.292v2.26H2v1.362h2.303v2.26h1.405v-2.26z"/>
            </G>
        </Svg>
    );
}
