import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { CategoryInput } from '../types';
import { getCodeWithColor } from '../utils';


export function Icon85(props: CategoryInput) {
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
                d="M29.959 28.53c.207.098.382.266.486.49l1.719 3.684a1.016 1.016 0 0 1-1.843.86L28.73 30.15l-2.72-1.905-.03.03-4.719-4.718-.487 2.762 2.577 2.162a1.016 1.016 0 1 1-1.307 1.557l-2.803-2.352a1.016 1.016 0 0 1-.447-.399 1.017 1.017 0 0 1-.037-1.234l.612-3.472c.062-.353.3-.631.607-.76l2.542-2.543a1.018 1.018 0 0 1 .012-.266l.585-3.316-2.831-1.635a1.016 1.016 0 1 1 1.016-1.76l3.522 2.033a1.016 1.016 0 0 1 .345 1.432l-.604 3.425 4.41 4.411h3.09c.213 0 .41.066.574.178.032.014.064.03.095.048l3.521 2.033a1.016 1.016 0 0 1-1.016 1.76l-3.441-1.986h-3.177l-1.15 1.15 2.477 1.735.013.01zm-9.25-8.358a2.71 2.71 0 1 1-3.834-3.834 2.71 2.71 0 0 1 3.834 3.834zM13.839 34.839h26v2h-26z"/>
        </Svg>
    );
}
