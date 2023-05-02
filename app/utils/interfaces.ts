export interface Page<T> {
  rows: T[];
  count: number;
}

export const RoleEnumToName: Record<string, string> = {
  0: 'Admin',
  1: 'Athlete',
  2: 'Trainer',
};
