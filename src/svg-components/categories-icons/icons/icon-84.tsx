import * as React from 'react';
import { Svg, G, Circle } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon84(props: CategoryInput) {
    return (
        <Svg
            viewBox="0 0 50 50"
            style={{
                height: '100%',
                width: '100%',
                color: getCodeWithColor(props).color
            }}
        >
            <G>
                <Circle cx={'25'} cy={'26'} r={'3'} />
                <Circle cx={'35'} cy={'26'} r={'3'} />
                <Circle cx={'15'} cy={'26'} r={'3'} />
            </G>
        </Svg>
    );
}
