class ProductsPage { 
  constructor(page) { 
     this.page = page; 

    } 
  
    async openProductsPage() { 
      await this.page.click('a[href="/products"]'); 

    } 
    async addBlueTop() { 
      const blueTop = this.page.locator('.single-products') 
                  .filter({ hasText: 'Blue Top' }) .first(); 

      await blueTop.hover(); 
      await blueTop.locator('a.add-to-cart').last().click(); 
      await this.page.getByText('Continue Shopping').click(); 

    } 
  
    async addMenTshirt() { 
       const menTshirt = this.page.locator('.single-products') 
            .filter({ hasText: 'Men Tshirt' }) .first(); 

       await menTshirt.scrollIntoViewIfNeeded(); 

       await menTshirt.hover(); 
       await menTshirt.locator('a.add-to-cart').last().click(); 
       await this.page.getByText('View Cart').click(); 

    } 

} 

module.exports = ProductsPage;