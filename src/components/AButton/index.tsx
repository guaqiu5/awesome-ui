import classNames from 'classnames'
import React from 'react'
import './style.scss'
export enum ButtonSize {
    Middle = 'middle',
    Big = 'big',
    Huge = 'huge',
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Dangerous = 'dangerous',
}

interface IButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: any
}

const AButton: React.FC<IButtonProps> = (
    { btnType, size, children, disabled, style, onClick, ...props }
) => {
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size
    })
    return <button
        className={classes}
        disabled={disabled}
        style={style}
        onClick={onClick}
    >
        {children}
    </button>

}

AButton.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
export default AButton