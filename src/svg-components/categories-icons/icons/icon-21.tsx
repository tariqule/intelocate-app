import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon21(props: CategoryInput) {
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
                d="M24.69 15.645H33v8.259l-.938.865-.883 15.352h-8.01a3.98 3.98 0 0 0 .574-2.057c0-2.247-1.86-4.07-4.155-4.07-.762 0-1.473.205-2.087.555l-.563-9.78-.938-.865v-8.259l15.682-6.429 1.296 3.032-8.288 3.397zm-5.102 19.542c1.622 0 2.938 1.288 2.938 2.877 0 1.59-1.316 2.878-2.938 2.878-1.623 0-2.939-1.289-2.939-2.878 0-1.589 1.316-2.877 2.939-2.877z"/>
        </Svg>
    );
}
