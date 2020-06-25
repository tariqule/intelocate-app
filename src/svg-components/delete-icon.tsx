/* tslint:disable-next-line:no-unused-variable */
import * as React from "react";
import { Svg, Path } from "react-native-svg";
import { Platform } from "react-native";

/* tslint:disable:max-line-length */
export function DeleteIcon(props: { color?: string; isCheckInMode: boolean }) {
  const color = props.color ? props.color : "#ffffff";
  if (!props.isCheckInMode || Platform.OS === "android") {
    return (
      <Svg
        viewBox="0 0 24 24"
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          fillRule="evenodd"
          fill={color}
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        viewBox="5 3 17 17"
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Path
          d="M10.6504393,9.62971183 L10.6504393,17.3419393 L12.6948282,19.3400234 L14.7392171,17.3419393 L14.7392171,9.62971183 L10.6504393,9.62971183 Z M10.6504393,7.19341899 C10.6515841,7.19390687 10.6533203,7.1942007 10.6558771,7.1942007 L14.7337793,7.1942007 C14.7384709,7.1942007 14.7392171,7.19493757 14.7392171,7.18481631 L14.7392171,8.02083405 L15.7392171,8.02083405 L15.7392171,7.02083405 L9.65043931,7.02083405 L9.65043931,8.02083405 L10.6504393,8.02083405 L10.6504393,7.19342354 Z"
          id="edit---icon-copy"
          stroke="#BCBBBF"
          fill="transparent"
          stroke-width="3"
          transform="translate(12.694828, 13.466257) rotate(45.000000) translate(-12.694828, -13.466257) "
        />
      </Svg>
    );
  }
}
