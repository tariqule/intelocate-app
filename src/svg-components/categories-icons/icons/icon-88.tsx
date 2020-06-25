import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon88(props: CategoryInput) {
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
                d="M25.278 30.806h4.966v-7.364h-4.966v7.364zm-7.627-10.104c.398-3.112 3.035-5.536 6.256-5.536 3.219 0 5.856 2.424 6.256 5.536H17.65zm-.08 10.104h4.967v-7.364H17.57v7.364zm15.332-10.104c-.414-4.624-4.265-8.276-8.996-8.276-4.73 0-8.584 3.652-8.996 8.276h-.081v12.845h18.154V20.702h-.081z"/>
        </Svg>
    );
}
