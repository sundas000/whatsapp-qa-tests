import { test, expect } from '@playwright/test';

test('navigate and validate example.com content', async ({ page }) => {
  await page.goto('http://example.com/');
  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  await expect(page.getByText('This domain is for use in illustrative examples')).toBeVisible();
  await expect(page.getByRole('link', { name: 'More information...' })).toBeVisible();

  // Follow the "More information..." link
  await page.getByRole('link', { name: 'More information...' }).click();

  // ✅ Confirm navigation to the correct IANA help page
  await expect(page).toHaveURL('https://www.iana.org/help/example-domains');
});
