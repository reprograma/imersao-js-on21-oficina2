import { HOURS_PER_DAY, WORKING_DAYS_IN_MONTH } from '../constants/constants';

export const calculateValuePerHour = (monthlyIncome) => {
  const hoursWorkedPerMonth = (HOURS_PER_DAY * WORKING_DAYS_IN_MONTH);
  const valuePerHour = monthlyIncome / hoursWorkedPerMonth;

  return Math.ceil(valuePerHour);
};
