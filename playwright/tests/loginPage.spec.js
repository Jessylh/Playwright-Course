const { test, expect } = require('@playwright/test');
const { USER, PASSWORD } = process.env;
const LoginPage = require('../pageObjects/login.page');
const ContactListPage = require('../pageObjects/contactList.page');

let loginPage;
let contactListPage;

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        contactListPage = new ContactListPage(page);
        await page.goto('/');
    });

    test('Verify user is able to log in', async ({ page }) => {
        // Login
        await page.pause()
        await loginPage.login(USER, PASSWORD);
        // Verify that the contact list header is visible
        await contactListPage.isContactListHeaderVisible();
    });
});

// npm run test
// npx playwright test
// npx playwright test --headed
