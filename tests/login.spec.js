const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const invalidLogins = require('../test-data/loginData');

test.describe('Login Page', () => {
    let loginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('valid login that redirects to inventory page', async ({page}) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    for (const data of invalidLogins) {
        test(`invalid login - ${data.label}`, async ({page}) => {
            await loginPage.login(data.username, data.password);
            const errorText = await loginPage.getErrorText();
            await expect(errorText).toBe(data.expectedError);
        });

    }
});