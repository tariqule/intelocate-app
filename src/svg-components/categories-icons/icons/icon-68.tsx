import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon68(props: CategoryInput) {
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
                d="M12.209 40.566h2.952a1.925 1.925 0 0 0 0-3.85H12.21a3.609 3.609 0 1 1 6.386 0h14.97a1.925 1.925 0 1 1 0 3.85h-14.97a3.609 3.609 0 0 1-6.386 0zm20.373-1.925a.962.962 0 0 0 1.925 0 .962.962 0 1 0-1.925 0zM29.58 12.15V8l-3.851 1.069v.218h-.744v-.523h-1.523v.523h-1.028v.01C19.98 9.348 18 11.422 18 13.97h1.52c0-1.713 1.346-3.106 3-3.106v-.002h.942v1.556c-1.687.367-2.966 1.924-2.966 3.777v13.041c0 .55.436 1 .966 1h5.525c.53 0 .965-.45.965-1V16.195c0-1.853-1.28-3.41-2.967-3.777v-1.556h.744v.219l3.851 1.068z"/>
        </Svg>
    );
}
