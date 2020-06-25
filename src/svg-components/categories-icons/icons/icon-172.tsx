import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon172(props: CategoryInput) {
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
                d="M25 40c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zM12.449 21.271v6.067h1.67V24.84l3.499 2.711v-6.082h-1.652v2.405L12.45 21.27zm6.401.183v5.876h1.73v-5.876h-1.73zm2.296 0l2.975 6.097 2.984-6.097h-1.782l-1.12 2.627-1.174-2.627h-1.883zm6.522 0v5.871h3.848v-1.487h-2.171v-.733h1.823v-1.436h-1.823v-.717h2.17v-1.498h-3.847zm4.132 5.871h1.806l.287-.678h2.13l.289.678h1.851l-3.146-6.1-3.217 6.1zm2.665-1.994l.495-1.17.495 1.17h-.99z"/>
        </Svg>
    );
}
