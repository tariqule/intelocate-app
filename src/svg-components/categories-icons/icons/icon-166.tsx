import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon166(props: CategoryInput) {
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
                d="m12,36l26,0l0,2l-26,0l0,-2zm23.763,-21.171a0.81,0.81 0 0 1 0,1.146l-1.376,1.376a3.349,3.349 0 0 1 -3.847,0.638l-9.23,9.23l1.734,1.733a0.509,0.509 0 0 1 0,0.72l-2.875,2.874c-1.283,1.283 -3.936,1.479 -4.902,1.452a13.677,13.677 0 0 1 -0.313,-0.017c-1.282,-0.133 -1.729,-0.226 -1.787,-0.294c-0.047,-0.053 -0.101,-0.705 -0.165,-1.954c-0.027,-1.7 0.169,-3.619 1.452,-4.901l2.875,-2.876a0.509,0.509 0 0 1 0.72,0l1.733,1.734l9.23,-9.23a3.355,3.355 0 0 1 0.637,-3.847l1.376,-1.376a0.81,0.81 0 0 1 1.146,0l3.592,3.592zm-2.522,1.375l0.802,-0.802l-2.445,-2.445l-0.802,0.802a1.731,1.731 0 0 0 0,2.445l0,0.001c0.676,0.676 1.77,0.675 2.445,0l0,-0.001z"/>
        </Svg>
    );
}
