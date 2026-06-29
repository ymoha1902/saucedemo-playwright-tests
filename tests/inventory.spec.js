const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

test.describe('Cart Funtionality', () => {
    let loginPage, inventoryPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
         await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        inventoryPage = new InventoryPage(page);
    });

    test('sauce labs backback can be added to cart', async ({page}) => {
        await inventoryPage.addItemToCart('sauce-labs-backpack');
        const cartCheck = await inventoryPage.isItemInCart('sauce-labs-backpack');
        await expect(cartCheck).toBe(true);
    });

        test('sauce labs backback can be removed from cart', async ({page}) => {
        await inventoryPage.addItemToCart('sauce-labs-backpack');
        await inventoryPage.removeItemFromCart('sauce-labs-backpack');
        const cartCheck = await inventoryPage.isItemInCart('sauce-labs-backpack');
        await expect(cartCheck).toBe(false);
    });

})