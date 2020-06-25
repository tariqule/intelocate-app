/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function StatusCancelIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#6BD6F1';
    return (
        <Svg
            viewBox="0 0 32 32"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="nonzero"
            >
                <Path d="m6.32604,8.97606c-3.34,4.687 -2.908,11.235 1.297,15.44c4.204,4.204 10.752,4.636 15.439,1.296l-16.736,-16.736zm2.033,-2.21l16.912,16.914c3.996,-4.715 3.77,-11.786 -0.678,-16.234c-4.448,-4.448 -11.52,-4.674 -16.234,-0.678l0,-0.002zm-2.858,19.77c-5.857,-5.857 -5.857,-15.355 0,-21.213c5.858,-5.857 15.356,-5.857 21.214,0c5.857,5.858 5.857,15.356 0,21.214c-5.858,5.857 -15.356,5.857 -21.214,0l0,-0.001z"/>
            </G>
        </Svg>
    );
}
