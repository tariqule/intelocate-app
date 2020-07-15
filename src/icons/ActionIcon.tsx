import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function ActionIcon(props: {color?: string}) {
  const color = props.color ? props.color : '#ffffff';
  return (
    <Svg
      viewBox="0 0 20 20"
      style={{
        height: '100%',
        width: '100%',
      }}>
      <G fill={color} fillRule="evenodd">
        <Path
          d="M2 20h16v-1H2zm-1-2h18v-1H1zm-1-2h20V0H0v16zM14.299 4.36L9.058 9.54 7.146 7.65a1.278 1.278 0 00-1.78 0 1.237 1.237 0 000 1.757l2.705 2.669c.286.283.68.395 1.058.347.334.011.674-.107.929-.359l6.022-5.947a1.235 1.235 0 000-1.755 1.279 1.279 0 00-1.781 0z"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
}

export default ActionIcon;
