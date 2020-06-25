import * as React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon9(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Polygon
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                points="31.3319621 12.5011185 15.5962445 24.2592835 21.5580994 24.2592835 19.401541 36.0085 35.1394957 24.2503351 29.1754037 24.2503351"/>
        </Svg>
    );
}
