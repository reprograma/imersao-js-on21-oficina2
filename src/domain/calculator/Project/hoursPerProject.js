import { HOURS_PER_FUNCTIONALITY } from '../constants/constants';

export const calculateProjectHours = (featureList) => (
  featureList
    .map(feat => HOURS_PER_FUNCTIONALITY[feat])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);