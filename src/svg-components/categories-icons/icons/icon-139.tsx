import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon139(props: CategoryInput) {
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
                d="M16.905 31.747a7.963 7.963 0 0 0 4.3 1.253c1.567 0 3.028-.45 4.262-1.228C29.587 32.139 32 35.682 32 40H10c0-4.446 2.558-8.07 6.905-8.253zM15.205 25a6 6 0 1 1 12 0 6 6 0 0 1-12 0zM37.236 19.947l-2.377 2.377a.993.993 0 0 0 1.404 1.404l2.377-2.377 2.824-2.824a4.716 4.716 0 0 0-4.231-7.965h-5.555a1.241 1.241 0 0 0 0 2.482h1.93l-1.637 1.638-3.062 3.061a.993.993 0 0 0 1.404 1.404l3.062-3.061.351.35-3.746 3.747a.993.993 0 0 0 1.404 1.404l3.746-3.746.351.35-3.404 3.405A.993.993 0 1 0 33.481 23l3.404-3.404.351.351z"/>
        </Svg>
    );
}
