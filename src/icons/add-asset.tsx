import * as React from 'react';


interface Props {
    width?: number;
    height?: number;
}

export function AddAssetIcon(props: Props) {
    return (
        <svg
            width={props.width === undefined ? '20' : props.width}
            height={props.height === undefined ? '20' : props.height}
        >
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-add-asset" />
        </svg>
    );
}
