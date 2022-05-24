import classNames from 'classnames'  
import React from 'react'

export enum ButtonSize{
    Middle='middle',
    Big='big',
    Huge='huge',
}
 
export enum ButtonType {
    Primary='primary',
    Default='default',
    Dangerous='dangerous',
}

interface IButtonProps{
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children:React.ReactNode;
     
}

 const Button:React.FC<IButtonProps> =(props:IButtonProps)=>{
     
    const {btnType,size,children,disabled} = props

    const classes= classNames('btn',{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size
    })


    return <button
        className={classes}
        disabled={disabled}
            > 
        {children}
    </button>
}
Button.defaultProps ={
    disabled:false,
    btnType:ButtonType.Default
}
export default Button