import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon51(props: CategoryInput) {
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
                d="M31.54 18.946c.844.531 1.457.86.632 1.685L20.858 31.945c-.856.856-1.28.266-1.905-.57a.998.998 0 0 0-.073-.358l-1.154-2.854a1 1 0 0 0-1.5-.445L8.84 32.89a1 1 0 0 0-.096 1.562l2.287 2.06a1 1 0 0 0 1.243.077l.297-.208a9 9 0 0 0 12.529-.193l11.313-11.314a9 9 0 0 0 .157-12.567l.02-.03a1 1 0 0 0-.076-1.242l-2.06-2.287a1 1 0 0 0-1.563.095l-5.17 7.386a1 1 0 0 0 .444 1.5l2.854 1.154c.17.069.348.088.52.063z"/>
        </Svg>
    );
}
