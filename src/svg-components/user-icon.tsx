/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function UserIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 55 55"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m46.41919,50l-38,0c0,-7.87929 6.3793,-14.26696 14.24947,-14.26696l9.50106,0c7.86964,0 14.24947,6.38767 14.24947,14.26696zm-29.00924,-27.97869c0,-5.5347 4.48112,-10.02131 10.00903,-10.02131c5.52791,0 10.00902,4.48661 10.00902,10.02131c0,5.5347 -4.48111,10.02131 -10.00902,10.02131c-5.52791,0 -10.00903,-4.48661 -10.00903,-10.02131z"/>
            </G>
        </Svg>
    );
}
