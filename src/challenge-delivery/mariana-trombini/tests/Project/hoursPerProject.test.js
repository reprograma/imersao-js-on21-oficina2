import { calculateProjectHours } from '../../../../domain/calculator/Project/hoursPerProject'

describe('Calculate hours per project', () => {
  test('Should calculate project hours based on chosen feature', () => {
    const functionalitiesList = ['construction_1_page']
    const calculatedHours = calculateProjectHours(functionalitiesList)
    const expectedHours = 8
    expect(calculatedHours).toBe(expectedHours)
  })
  test('Should calculate project hours based on chosen features', () => {
    const functionalitiesList = ['responsiveness', 'form', 'seo_optimization']
    expect(calculateProjectHours(functionalitiesList)).toBe(48)
  })
  test('Should calculate project hours based on chosen features', () => {
    const functionalitiesList = ['construction_1_page', 'own_api_integration', 'ssr']
    const calculatedHours = calculateProjectHours(functionalitiesList)
    const expectedHours = 32
    expect(calculatedHours).toBe(expectedHours)
  })
  test('Should calculate project hours based on chosen features', () => {
    const functionalitiesList = ['setup', 'form', 'responsiveness', 'construction_1_page', 'own_api_integration', 'ssr', 'seo_optimization', 'mailchimp_integration']
    const calculatedHours = calculateProjectHours(functionalitiesList)
    const expectedHours = 104
    expect(calculatedHours).toBe(expectedHours)
  })
})