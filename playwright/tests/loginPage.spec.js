const { test, expect } = require('@playwright/test')
const { USER, PASSWORD } = process.env

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Verify user is able to log in', async ({ page }) => {
        await page.locator('#email').fill(USER)
        await page.locator('#password').fill(PASSWORD)
        await page.locator('#submit').click()

        // Header Assertion
        await expect(page.getByText('Contact List')).toBeVisible();
    });
});

//npx playwright test
//npx playwright test --headed