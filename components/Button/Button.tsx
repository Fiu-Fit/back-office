import Icon from '@mdi/react';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  colors,
  sizes,
  variants,
} from './buttonProps';

interface ButtonProps {
  text?: string;
  iconPath?: string;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  iconPath,
  isLoading = false,
  type = 'button',
  disabled = false,
  color = 'primary',
  variant = 'contained',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
      btn ${isLoading && 'loading'} ${sizes[size]} ${variants[variant]} ${
        colors[color]
      } ${className}`}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading ? (
        'Cargando...'
      ) : (
        <>
          {iconPath && <Icon path={iconPath} />}
          <span>{text}</span>
        </>
      )}
    </button>
  );
}
