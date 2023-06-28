import { User, Verification } from '@fiu-fit/common';

export type UserDisplay = User & {
  verification: Verification;
};
