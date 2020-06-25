import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon161(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                d="m26.432,13c2.352,0 4.62,0.46 6.804,1.38l-1.848,4.866c-1.658,-0.617 -3.069,-0.926 -4.234,-0.926c-0.65,0 -1.128,0.185 -1.436,0.555c-0.308,0.37 -0.462,0.954 -0.462,1.751l0,1.785l5.779,0l0,4.663l-5.779,0l0,1.616c0,1.684 -0.89,2.958 -2.67,3.822l11.271,0l0,5.488l-17.823,0l0,-5.27c0.907,-0.527 1.52,-0.956 1.84,-1.287c0.318,-0.331 0.55,-0.71 0.696,-1.137c0.146,-0.426 0.219,-0.954 0.219,-1.582l0,-1.65l-2.789,0l0,-4.663l2.789,0l0,-1.987c0,-2.413 0.655,-4.253 1.965,-5.522c1.31,-1.268 3.203,-1.902 5.678,-1.902z"/>
        </Svg>
    );
}
