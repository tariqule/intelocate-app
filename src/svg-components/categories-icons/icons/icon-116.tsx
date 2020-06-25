import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon116(props: CategoryInput) {
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
                d="M16.364 29.09h4.772s2.046 0 2.046 2.046c0 2.85-.512 4.267-.68 4.656-.013.03-.028.06-.04.09l-.014.027h.005a2.975 2.975 0 0 0-.215 1.101 2.99 2.99 0 1 0 5.979 0c0-.39-.08-.76-.215-1.1h.004l-.013-.029-.04-.089c-.168-.387-.68-1.804-.68-4.656 0 0 .007-2.045 2.045-2.045h4.773c.753 0 1.364-.61 1.364-1.364v-6.136H31.3c.038-.107.063-.221.063-.341v-2.045a1.023 1.023 0 0 1 2.045 0v.681a1.023 1.023 0 0 0 2.046 0v-8.522c0-.754-.61-1.364-1.364-1.364H16.364C15.61 10 15 10.61 15 11.364v6.818h8.864c.564 0 1.363.458 1.363 1.023a1.023 1.023 0 0 0 2.046 0 1.023 1.023 0 0 1 2.045 0v2.045c0 .12.025.234.063.34H15v6.137c0 .754.61 1.364 1.364 1.364"/>
        </Svg>
    );
}
