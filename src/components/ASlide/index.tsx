import * as React from 'react'
import classNames from 'classnames';

export type DotPosition = 'top' | 'bottom' | 'left' | 'right'
export interface ISlide {
    style?: React.CSSProperties;
    children?: React.ReactNode;
    prefixCls?: string;
    slickGoTo?: number;
    dotPosition?: DotPosition;
    dots?:
    | boolean
    | {
        className?: string;
    };
}

const ASlide: React.FC<ISlide> = ({
    prefixCls,
    dotPosition,
    ...props }) => {
    const className = classNames(prefixCls, {
        // [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-vertical`]: dotPosition === 'left' || dotPosition === 'right',
    });
    return <div
    className={className}
    >

    </div>
}

export default ASlide