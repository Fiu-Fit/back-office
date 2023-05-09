export interface Page<T> {
  rows: T[];
  count: number;
}

export const RoleEnumToName: Record<string, string> = {
  0: 'Admin',
  1: 'Athlete',
  2: 'Trainer',
};

export const CategoryEnumToName: Record<string, string> = {
  0:  'Legs',
  1:  'Chest',
  2:  'Back',
  3:  'Shoulders',
  4:  'Arms',
  5:  'Core',
  6:  'Cardio',
  7:  'Full Body',
  8:  'Free Weight',
  9:  'Stretching',
  10: 'Strength',
};
