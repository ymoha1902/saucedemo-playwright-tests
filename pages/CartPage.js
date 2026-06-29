class CartPage {
    constructor(page) {
    this.page =  page;
    }

    async checkCart(productName) {
        return await this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName }).isVisible();
    }

    async clickCheckout(){
        await this.page.locator('[data-test="checkout"]').click();
    }

}

module.exports = CartPage;