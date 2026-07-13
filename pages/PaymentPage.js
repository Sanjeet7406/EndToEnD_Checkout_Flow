const { expect } = require('@playwright/test'); 

class PaymentPage { 
   constructor(page) { 

        this.page = page; 
        this.name = '[data-qa="name-on-card"]'; 
        this.cardNumber = '[data-qa="card-number"]'; 
        this.cvc = '[data-qa="cvc"]'; 
        this.month = '[data-qa="expiry-month"]'; 
        this.year = '[data-qa="expiry-year"]'; 
        this.payBtn = '[data-qa="pay-button"]'; 

    } 

  async enterPaymentDetails() { 

        await this.page.fill(this.name, 'Sanjeet Kumar'); 
        await this.page.fill(this.cardNumber, '4111111111111111'); 
        await this.page.fill(this.cvc, '123'); 
        await this.page.fill(this.month, '11'); 
        await this.page.fill(this.year, '2027'); 

    } 

  

    async confirmOrder() { 

        await this.page.click(this.payBtn); 
        await expect(this.page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible(); 

    } 

  
   async downloadInvoice() { 
        const download = this.page.waitForEvent('download');
        await this.page.getByText('Download Invoice').click();         
        
 //const download = await downloadInvoice; 

        return  await download; 

    } 

} 

module.exports = PaymentPage;