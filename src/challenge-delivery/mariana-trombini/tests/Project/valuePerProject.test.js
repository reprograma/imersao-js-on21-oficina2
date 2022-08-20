import { calculateTotalProjectValue } from '../../../../domain/calculator/Project/valuePerProject'
import { calculateProjectBaseValue } from '../../../../domain/calculator/Project/valuePerProject'

describe('Value per project', () => {
  test('Should calculate project total value', () => {
    const functionalities = ['responsiveness', 'form', 'seo_optimization']
    const hourValue = 16
    expect(calculateTotalProjectValue(functionalities,hourValue)).toBe(845)
  })
  test('Should calculate base value of project', () => {
    const totalHoursPerProject = 150
    const hourValue = 12
    expect(calculateProjectBaseValue(totalHoursPerProject,hourValue)).toBe(1800)
  })
  test('Should calculate base value of project ', () => {
    const totalHoursPerProject = jest.fn(() => 150)
    const projectHours = totalHoursPerProject()
    const calculatePackage = jest.fn(() => 12)
    const hourValue =  calculatePackage(projectHours)
    const result = calculateProjectBaseValue(projectHours, hourValue)
    expect(result).toBe(1800)
  })
})