import { calculateValuePerHour } from '../../../../domain/calculator/Hour/hourValue'

describe('Value per hour', () => {
  test('Should calculate value per hour given a salary of R$1000.00 monthly', () => {
    const monthlyIncome = 1000
    const calculatedResult = calculateValuePerHour(monthlyIncome)
    const expectedOutcome = 6

    expect(calculatedResult).toBe(expectedOutcome)
    expect(calculatedResult).not.toBe(5)
  })
  test('Should calculate value per hour given a salary of R$2000.00 monthly', () => {
    expect(calculateValuePerHour(2000)).toBe(12)
  })
})