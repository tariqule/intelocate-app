/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, G, Path } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function FiltersIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 35 35"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <G
                fill={color}
                fillRule="evenodd"
            >
                <Path
                    d="M11.344 22.281h-2.73v1.783h2.73c.355 1.038 1.312 1.782 2.437 1.782 1.125 0 2.083-.744 2.437-1.782h9.622V22.28h-9.622c-.354-1.038-1.312-1.782-2.437-1.782-1.125 0-2.082.744-2.437 1.782zm6.891-4.159c.355 1.038 1.312 1.783 2.437 1.783 1.125 0 2.082-.745 2.437-1.783h2.731V16.34h-2.731c-.355-1.039-1.312-1.783-2.437-1.783-1.125 0-2.082.744-2.437 1.783H8.613v1.782h9.622zm-6.89-7.724H8.612v1.782h2.731c.355 1.039 1.312 1.783 2.437 1.783 1.125 0 2.083-.744 2.437-1.783h9.622v-1.782h-9.622c-.354-1.039-1.312-1.783-2.437-1.783-1.125 0-2.082.744-2.437 1.783z"
                />
            </G>
        </Svg>
    );
}
