import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon59(props: CategoryInput) {
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
                d="M14 11h22v28H14V11zm3 13v2h16v-2H17zm0 5v2h16v-2H17zm0 5v2h16v-2H17zm8.032-20c-.72 0-1.27.184-1.65.552-.381.368-.571.901-.571 1.601v.576H22v1.353h.81v.479c0 .182-.02.335-.063.459a.879.879 0 0 1-.203.33c-.092.095-.27.22-.534.373v1.528h5.18v-1.592h-3.276c.518-.25.776-.62.776-1.108v-.469h1.68v-1.353h-1.68v-.517c0-.231.045-.4.135-.508.09-.107.228-.161.417-.161.339 0 .749.09 1.23.269l.538-1.412a5.052 5.052 0 0 0-1.978-.4z"/>
        </Svg>
    );
}
