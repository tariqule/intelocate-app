import * as React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon8(props: CategoryInput) {
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
                points="12.7392801 15.0396199 12.7392801 28.0745412 16.3279316 28.0745412 16.3279316 34.9603801 20.489391 34.9603801 20.489391 28.0745412 29.547042 28.0745412 29.547042 34.9603801 33.7085014 34.9603801 33.7085014 28.0745412 37.2607199 28.0745412 37.2607199 15.0396199"/>
        </Svg>
    );
}
