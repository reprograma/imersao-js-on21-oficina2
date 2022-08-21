import { MAX_HOURS_PER_PACKAGE } from '../constants/constants';

export const calculatePackage = (totalHoursPerProject) => Object.entries(MAX_HOURS_PER_PACKAGE)
  .find(([key, value]) => value > totalHoursPerProject
)[0];
