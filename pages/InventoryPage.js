class InventoryPage {
    constructor(page) {
    this.page = page;
    }

    async addItemToCart(productSlug) {
        await this.page.locator(`[data-test="add-to-cart-${productSlug}"]`).click();
    }

    async isItemInCart(productSlug) {
        return await this.page.locator(`[data-test="remove-${productSlug}"]`).isVisible();
    }

    async removeItemFromCart(productSlug) {
        await this.page.locator(`[data-test="remove-${productSlug}"]`).click();
    }

    async openCart() {
        await this.page.locator(`[data-test="shopping-cart-link"]`).click();
    }

}


module.exports = InventoryPage;