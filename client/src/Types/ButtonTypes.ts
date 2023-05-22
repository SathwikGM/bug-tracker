import  { ReactNode, CSSProperties, MouseEventHandler } from 'react';

export interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}