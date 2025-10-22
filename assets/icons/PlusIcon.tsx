import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PlusIcon(props: SvgProps) {
    return (
        <Svg
            width='24'
            height='24'
            viewBox='0 0 20 20'
            fill='none'
            {...props}
        >
            <Path
                d='M5 10H15'
                stroke={props.stroke || '#1053B9'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d='M10 15V5'
                stroke={props.stroke || '#1053B9'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default PlusIcon;