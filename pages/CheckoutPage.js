class CheckoutPage {
    constructor(page) {
    this.page =  page;
    this.firstNameFeild = page.locator('[data-test="firstName"]');
    this.lastNameFeild = page.locator('[data-test="lastName"]');
    this.postalCodeFeild = page.locator('[data-test="postalCode"]');
    }

    async addYourInfo(firstName,lastName,postalCode) {
        await this.firstNameFeild.fill(firstName);
        await this.lastNameFeild.fill(lastName);
        await this.postalCodeFeild.fill(postalCode);
        await this.page.locator('[data-test="continue"]').click(); 
    }
    
    async confirmCheckout(productName) {
        return await this.page.locator('[data-test="inventory-item-name"]').filter({ hasText: productName }).isVisible();
    }   
      
    async finishCheckout() {
        await this.page.locator('[data-test="finish"]').click();
        return await this.page.locator('[data-test="complete-header"]').isVisible();
    }

}

module.exports = CheckoutPage;