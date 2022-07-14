import classNames from 'classnames'  
import React from 'react'

export enum ImgSize{
    Middle='middle',
    Big='big',
    Huge='huge',
}
 
export interface IImgProps{
    className?: string;
    size?: ImgSize;
    src?: any;
    children: React.ReactNode;  
}

const AImg : React.FC<IImgProps> =({src,size,className,children})=>{
    const classes=classNames('aimg',className,{
        [`aimg-${size}`]:size
    })

    return <>
    <img src={src} className={classes}>
    {children}
    </img>
    </>
}

AImg.defaultProps ={
   size:ImgSize.Huge
}

export default AImg
