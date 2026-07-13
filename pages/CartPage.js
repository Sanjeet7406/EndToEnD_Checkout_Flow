const { expect } = require('@playwright/test'); 

  

class CartPage { 

  

    constructor(page) { 

        this.page = page; 

    } 

  

    async verifyProducts() { 

  

        await expect(this.page.locator('#cart_info_table')) 

            .toContainText('Blue Top'); 

  

        await expect(this.page.locator('#cart_info_table')) 

            .toContainText('Men Tshirt'); 

    } 

  

    async proceedToCheckout() { 

        await this.page.getByText('Proceed To Checkout').click(); 

    } 

} 

module.exports = CartPage;