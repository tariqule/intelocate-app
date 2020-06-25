import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon100(props: CategoryInput) {
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
                d="M12 18.653h2.769l6.292-5.284v21.39l-6.292-5.285H12v-10.82zm19.483-7.401a17.998 17.998 0 0 1 5.308 12.812c0 4.84-1.885 9.39-5.308 12.812l-1.78-1.78a15.498 15.498 0 0 0 4.571-11.032c0-4.168-1.623-8.086-4.57-11.033l1.78-1.78zm-5.107 4.682a11.422 11.422 0 0 1 3.368 8.13c0 3.07-1.197 5.958-3.368 8.13l-1.78-1.78a8.923 8.923 0 0 0 2.63-6.35c0-2.4-.934-4.655-2.63-6.351l1.78-1.78z"/>
        </Svg>
    );
}
