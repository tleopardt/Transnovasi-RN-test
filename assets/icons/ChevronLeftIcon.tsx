import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ChevronLeftIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={16}
      viewBox='0 0 10 16'
      fill='none'
      {...props}
    >
      <Path
        d='M8.5 15l-7-7 7-7'
        stroke={props.stroke || '#fff'}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

export default ChevronLeftIcon;
