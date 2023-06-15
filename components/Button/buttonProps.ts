export const colors = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  accent:    'btn-accent',
  info:      'btn-info',
  success:   'btn-success',
  warning:   'btn-warning',
  error:     'btn-error',
  neutral:   'btn-neutral',
};

export const variants = {
  text:      'btn-ghost',
  outlined:  'btn-outlined',
  contained: '',
  link:      'btn-link',
};

export const sizes = {
  xs:     'btn-xs',
  sm:     'btn-sm',
  md:     'btn-md',
  lg:     'btn-lg',
  wide:   'btn-wide',
  block:  'btn-block',
  circle: 'btn-circle',
  square: 'btn-square',
};

export type ButtonColor = keyof typeof colors;
export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;
