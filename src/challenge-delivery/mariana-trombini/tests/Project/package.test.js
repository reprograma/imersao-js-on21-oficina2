import { calculatePackage } from '../../../../domain/calculator/Project/package'

describe('Calculate Package', () => {
  test('Should calculate and identify project package based on the amount of hours', () => {
    const hoursPerProject = jest.fn(() => 29)
    const projectHours = hoursPerProject()
    const projectPackage = calculatePackage(projectHours)
    expect(projectPackage).toBe('basic_package')
  })
  test('Should calculate and identify project package based on the amount of hours', () => {
    const hoursPerProject = jest.fn(() => 64)
    const projectHours = hoursPerProject()
    const projectPackage = calculatePackage(projectHours)
    expect(projectPackage).toBe('intermediate_package')
  })
  test('Should calculate and identify project package based on the amount of hours', () => {
    const hoursPerProject = jest.fn(() => 199)
    const projectHours = hoursPerProject()
    const projectPackage = calculatePackage(projectHours)
    expect(projectPackage).toBe('premium_package')
  })
  test('Should calculate and identify project package based on the amount of hours', () => {
    const projectHours = 49
    expect(calculatePackage(projectHours)).toEqual('basic_package')
  })
  test('Should calculate and identify project package based on the amount of hours', () => {
    const projectHours = 99
    expect(calculatePackage(projectHours)).toEqual('intermediate_package')
  })
  test('Should calculate and identify project package based on the amount of hours', () => {
    const projectHours = 199
    expect(calculatePackage(projectHours)).toEqual('premium_package')
  })
})