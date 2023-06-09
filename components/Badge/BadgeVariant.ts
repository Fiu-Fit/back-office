export const BadgeColorToClass = {
    primary:   'badge-primary',
    secondary: 'badge-secondary',
    accent:    'badge-accent',
    success:   'badge-success',
    error:     'badge-error',
    warning:   'badge-warning',
    info:      'badge-info',
    neutral:   'badge-neutral',
};

export type BadgeColor = keyof typeof BadgeColorToClass;
