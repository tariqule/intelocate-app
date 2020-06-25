/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import { Svg, Polygon } from 'react-native-svg';


/* tslint:disable:max-line-length */
export function PlaneIcon(props: {color?: string}) {
    const color = props.color ? props.color : '#ffffff';
    return (
        <Svg
            viewBox="0 0 100 100"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Polygon
                fill={color}
                fillRule="evenodd"
                points="13.68511962890625,47.84832000732422 30.1319580078125,58.25497055053711 62.43389892578125,37.139984130859375 36.7669677734375,62.661964416503906 39.64947509765625,75.48638153076172 46.4998779296875,68.77994537353516 63.2142333984375,78.79109954833984 74.31488037109375,25.20890235900879"
            />
        </Svg>
    );
}
