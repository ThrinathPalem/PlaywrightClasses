import {test, expect} from '@playwright/test'

test('Testing', async ({ page }) => {
  await page.goto('https://playwright.dev/');
})