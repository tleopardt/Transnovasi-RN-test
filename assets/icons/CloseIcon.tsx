import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function CloseIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M18 6L6 18M6 6l12 12"
        stroke={props.stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;
