import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon108(props: CategoryInput) {
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
                d="m16.865,16.227a2.767,2.767 0 1 1 0,5.534a2.767,2.767 0 0 1 0,-5.534zm6.06,17.922a1.777,1.777 0 1 1 -3.554,0a1.777,1.777 0 0 1 3.554,0zm1.748,-21.651a2.767,2.767 0 1 1 0,5.534a2.767,2.767 0 0 1 0,-5.534zm6.299,21.786a2.767,2.767 0 1 1 -5.535,0.001a2.767,2.767 0 0 1 5.535,0l0,-0.001zm1.457,-18.244a2.767,2.767 0 1 1 0,5.534a2.767,2.767 0 0 1 0,-5.534zm4.827,11.443a2.767,2.767 0 1 1 -5.535,0.001a2.767,2.767 0 0 1 5.535,0l0,-0.001zm-24.258,6.303c-0.303,2.768 6.14,6.919 11.927,6.656c8.493,-0.387 15,-6.718 15,-15.221s-6.75,-15.221 -15.252,-15.221c-5.913,0 -12.454,3.722 -14.587,10.835c-1.078,3.59 8.3,3.179 8.616,7.357c0.26,3.418 -5.48,3.54 -5.704,5.594z"/>
        </Svg>
    );
}
