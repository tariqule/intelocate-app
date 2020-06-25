import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon73(props: CategoryInput) {
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
                d="M16.061 21.996C16.583 17.494 20.386 14 25 14s8.417 3.494 8.939 7.996H34V36H16V21.996h.061zm8.878 9.996a1.993 1.993 0 0 0 1.987-2c0-1.103-.89-1.998-1.987-1.998a1.993 1.993 0 0 0-1.986 1.999c0 1.104.889 1.999 1.986 1.999zm-5.96-7.997a1 1 0 0 0 1.006 1h2.956a1 1 0 0 0 0-2h-2.956a.996.996 0 0 0-1.005 1zm6.953 0a1 1 0 0 0 1.005 1h2.956a1 1 0 0 0 0-2h-2.956a.996.996 0 0 0-1.005 1z"/>
        </Svg>
    );
}
