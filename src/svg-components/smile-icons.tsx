/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { KindOfSmile } from '../types';


/* tslint:disable:max-line-length */
export function SmileIcons(props: {kind: KindOfSmile, color?: string}) {
    const { kind } = props;
    const color = props.color ? props.color : '#ffffff';
    switch (kind) {
        case 'very-sad':
            return (
                <Svg
                    viewBox="0 0 35 35"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Path
                        fill={color}
                        fillRule="evenodd"
                        d="M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35zm6.264-12.228A7 7 0 0 0 17.5 18.9a7 7 0 0 0-6.337 4.023.7.7 0 0 0 1.267.596A5.6 5.6 0 0 1 17.5 20.3a5.6 5.6 0 0 1 5.012 3.099.7.7 0 0 0 1.252-.627zM22.05 15.4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm-9.1 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"/>
                </Svg>
            );
        case 'sad':
            return (
                <Svg
                    viewBox="0 0 35 35"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Path
                        fill={color}
                        fillRule="evenodd"
                        d="M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35zm6.264-12.103c-1.301-2.602-11.351-2.505-12.601.151a.7.7 0 1 0 1.267.596c.75-1.596 9.302-1.678 10.082-.12a.7.7 0 1 0 1.252-.627zM22.05 15.4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm-9.1 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"/>
                </Svg>
            );
        case 'average':
            return (
                <Svg
                    viewBox="0 0 35 35"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Path
                        fill={color}
                        fillRule="evenodd"
                        d="M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35zm5.6-13.3H11.9a.7.7 0 0 0 0 1.4h11.2a.7.7 0 0 0 0-1.4zm-1.05-6.3a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm-9.1 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"/>
                </Svg>
            );
        case 'good':
            return (
                <Svg
                    viewBox="0 0 35 35"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Path
                        fill={color}
                        fillRule="evenodd"
                        d="M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35zm5.012-14.177c-.78 1.558-9.331 1.476-10.082-.121a.7.7 0 1 0-1.267.596c1.25 2.656 11.3 2.753 12.6.15a.7.7 0 0 0-1.251-.625zM22.05 15.4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm-9.1 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"/>
                </Svg>
            );
        case 'very-good':
            return (
                <Svg
                    viewBox="0 0 35 35"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Path
                        fill={color}
                        fillRule="evenodd"
                        d="M17.5 35C7.835 35 0 27.165 0 17.5S7.835 0 17.5 0 35 7.835 35 17.5 27.165 35 17.5 35zm5.012-15.577A5.6 5.6 0 0 1 17.5 22.52a5.6 5.6 0 0 1-5.07-3.219.7.7 0 1 0-1.267.596 7 7 0 0 0 6.337 4.023 7 7 0 0 0 6.264-3.872.7.7 0 0 0-1.252-.626zM22.05 15.4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm-9.1 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"/>
                </Svg>
            );
        default:
            return <View />;
    }
}
