import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
import {getCodeWithColor} from '../utils';
import {CategoryInput} from '../types';

export function Icon188(props: CategoryInput) {
  return (
    <Svg
      viewBox="0 0 50 50"
      style={{
        height: '100%',
        width: '100%',
      }}>
      <Path
        fill={getCodeWithColor(props).color}
        fillRule="evenodd"
        d="M13.375 24C16.482 24 19 26.239 19 29H4c0-2.761 2.518-5 5.625-5h3.75zM11.5 16a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM40.375 24C43.482 24 46 26.239 46 29H31c0-2.761 2.518-5 5.625-5h3.75zM38.5 16a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
      />
      <Path
        fill={getCodeWithColor(props).color}
        fillRule="evenodd"
        stroke="#787878"
        strokeLinecap="square"
        d="M36.327 34.5H13.673"
      />
      <Path
        fill={getCodeWithColor(props).color}
        fillRule="evenodd"
        d="M40 34.5l-5.625 2v-4zM10 34.5l5.625-2v4z"
      />
    </Svg>
  );
}
