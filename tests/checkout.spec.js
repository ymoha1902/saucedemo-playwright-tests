const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Checkout Function', () => {
    let loginPage, inventoryPage, cartPage, checkoutPage;

    test.beforeEach(async ({page}) =>{
    loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
    });

    test('user can add item to cart and proceed to checkout', async ({page}) => {
        await inventoryPage.addItemToCart('sauce-labs-backpack');
        const cartCheck = await inventoryPage.isItemInCart('sauce-labs-backpack');
        await expect(cartCheck).toBe(true);

        await inventoryPage.openCart();
        const productCheck = await cartPage.checkCart('Sauce Labs Backpack');
        await expect(productCheck).toBe(true);
    
        await cartPage.clickCheckout();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

        await checkoutPage.addYourInfo('Tester','Testing','123');
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        
        const finalCheck = await checkoutPage.confirmCheckout('Sauce Labs Backpack');
        await expect(finalCheck).toBe(true);
        
        const thankYouCheck = await checkoutPage.finishCheckout();
        await expect(thankYouCheck).toBe(true);
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        
    });
});
