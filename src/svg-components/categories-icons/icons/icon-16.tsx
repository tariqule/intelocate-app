import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon16(props: CategoryInput) {
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
                d="M49.823 81.935L39.407 75.74c-15.043-8.947-21.359-27.622-14.87-43.97 1.623-4.089 5.552-6.77 9.92-6.77H65.19c4.369 0 8.297 2.681 9.92 6.77 6.49 16.348.174 35.023-14.87 43.97l-10.416 6.195z"/>
        </Svg>
    );
}
