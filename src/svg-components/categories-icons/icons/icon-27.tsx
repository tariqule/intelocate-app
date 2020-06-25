import * as React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon27(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Rect
                x={'14.065'}
                y={'21.058'}
                width={'15.91'}
                height={'15.91'}
                rx={2}
                fill={getCodeWithColor(props).color} />
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                /* tslint:disable:max-line-length */
                d="M25.496 8.87l.045 2.27c3.758.073 7.32 1.606 10.03 4.316 2.71 2.71 4.242 6.272 4.316 10.03l2.27.045c-.086-4.365-1.867-8.501-5.013-11.648-3.147-3.147-7.283-4.927-11.648-5.013"/>
            <Path
                fill={getCodeWithColor(props).color}
                fillRule="evenodd"
                d="M25.348 15.107l.045 2.269c2.163.043 4.213.925 5.773 2.485 1.56 1.56 2.442 3.61 2.485 5.773l2.269.045c-.055-2.77-1.184-5.395-3.18-7.391-1.998-1.997-4.623-3.127-7.392-3.181"/>
        </Svg>
    );
}
