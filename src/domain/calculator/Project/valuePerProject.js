import { CONTRACTUAL_TAXES_PER_PACKAGE } from '../constants/constants';
import { calculateProjectHours } from '../Project/hoursPerProject';
import { calculatePackage } from './package';

export const calculateProjectBaseValue = (totalHoursPerProject, hourValue) => {
  return totalHoursPerProject * hourValue;
};

export const calculateTotalProjectValue = (functionalities, hourValue) => {
  const totalHoursPerProject = calculateProjectHours(functionalities);
  
  const packageType = calculatePackage(totalHoursPerProject);

  const baseValue = calculateProjectBaseValue(totalHoursPerProject, hourValue);

  return Math.round(baseValue * CONTRACTUAL_TAXES_PER_PACKAGE[packageType]);
}
