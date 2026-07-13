const { expect } = require('@playwright/test'); 

class CheckoutPage { 

  constructor(page) { 
    this.page = page; 
    this.commentBox = 'textarea[name="message"]'; 

    } 

  async verifyAddress() { 
     await expect( this.page.locator('#address_delivery')).toBeVisible(); 
   
     await expect(this.page.locator('#address_invoice')).toBeVisible(); 

    } 

  async enterComment(comment) { 
 
     await this.page.fill(this.commentBox, comment); 

    } 

  async placeOrder() { 

        await this.page.getByText('Place Order').click(); 

    } 

} 

module.exports = CheckoutPage;