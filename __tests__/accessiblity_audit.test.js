
const { AxePuppeteer } = require('axe-puppeteer')

const { setupPage } = require('../lib/jest-utilities.js')
const configPaths = require('../lib/paths.js')
const PORT = configPaths.testPort

let page
const baseUrl = 'http://localhost:' + PORT

async function audit (page) {
  const axe = new AxePuppeteer(page)
    .include('body')
    // axe reports there is "no label associated with the text field", when there is one.
    .exclude('#app-site-search__input')
    // axe reports that the phase banner is not inside a landmark, which is intentional.
    .exclude('.app-phase-banner')
    // axe reports that the skip link is not inside a landmark, which is intentional.
    // https://design-system.service.gov.uk/components/skip-link/#when-to-use-this-component
    .exclude('.govuk-skip-link')
    // axe reports that the back to top button is not inside a landmark, which is intentional.
    .exclude('.app-back-to-top')

  const results = await axe.analyze()

  return results.violations
}

beforeAll(async () => {
  page = await setupPage()
})

afterAll(async () => {
  await page.close()
})

describe('Accessibility Audit', () => {
  describe('Home page - layout.njk', () => {
    it('validates', async () => {
      await page.goto(baseUrl + '/', { waitUntil: 'load' })
      const violations = await audit(page)
      expect(violations).toEqual([])
    })
  })

  describe('Component page - layout-pane.njk', () => {
    it('validates', async () => {
      await page.goto(baseUrl + '/components/radios/', { waitUntil: 'load' })
      const violations = await audit(page)
      expect(violations).toEqual([])
    })
  })

  describe('Patterns page - layout-pane.njk', () => {
    it('validates', async () => {
      await page.goto(baseUrl + '/patterns/gender-or-sex/', { waitUntil: 'load' })
      const violations = await audit(page)
      expect(violations).toEqual([])
    })
  })

  describe('Get in touch page - layout-single-page.njk', () => {
    it('validates', async () => {
      await page.goto(baseUrl + '/get-in-touch/', { waitUntil: 'load' })
      const violations = await audit(page)
      expect(violations).toEqual([])
    })
  })

  describe('Site Map page - layout-sitemap.njk', () => {
    it('validates', async () => {
      await page.goto(baseUrl + '/sitemap/', { waitUntil: 'load' })
      const violations = await audit(page)
      expect(violations).toEqual([])
    })
  })
})
