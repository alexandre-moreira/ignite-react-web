import {ImgHTMLAttributes} from 'react';
import styles from './Avatar.module.css';

interface AvantarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}
export function Avatar({hasBorder = true, ...props}: AvantarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props}
    />
  )
}
