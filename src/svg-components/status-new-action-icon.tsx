/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function StatusNewActionIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#6BD6F1';
    return (
        <Svg
            viewBox="0 0 32 32"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path d="m11.7509,28.765l-5.171,0.01l-1.589,-4.921l-4.19,-3.032l1.608,-4.915l-1.607,-4.916l4.19,-3.031l1.588,-4.922l5.171,0.01l4.178,-3.048l4.178,3.048l5.172,-0.01l1.588,4.922l4.19,3.031l-1.608,4.916l1.608,4.915l-4.19,3.032l-1.588,4.921l-5.172,-0.01l-4.178,3.048l-4.178,-3.048z"/>
                <Path fill="#ffffff" d="m17.2069,18.496l-2.666,0l-0.42,-9.717l3.506,0l-0.42,9.717zm-3.184,3.027c0,-0.482 0.174,-0.877 0.522,-1.186c0.349,-0.31 0.783,-0.464 1.304,-0.464s0.956,0.154 1.304,0.464c0.348,0.309 0.522,0.704 0.522,1.186s-0.174,0.877 -0.522,1.187c-0.348,0.309 -0.783,0.464 -1.304,0.464c-0.52,0 -0.955,-0.155 -1.304,-0.464a1.516,1.516 0 0 1 -0.522,-1.187z"/>
            </G>
        </Svg>
    );
}
