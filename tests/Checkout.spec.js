const { test, expect } = require('@playwright/test'); 
const LoginPage = require('../pages/LoginPage'); 
const ProductsPage = require('../pages/ProductsPage'); 
const CartPage = require('../pages/CartPage'); 
const CheckoutPage = require('../pages/CheckoutPage'); 
const PaymentPage = require('../pages/PaymentPage'); 

test('End to End Checkout Flow', async ({ page }) => { 
   await page.goto('https://automationexercise.com'); 
   const loginPage = new LoginPage(page); 
   const productsPage = new ProductsPage(page); 
   const cartPage = new CartPage(page); 
   const checkoutPage = new CheckoutPage(page); 
   const paymentPage = new PaymentPage(page); 

   // Login 
     await loginPage.login('sanjeet.mallick325@gmail.com', 'David@2026'); 

  // Products 
  await productsPage.openProductsPage(); 
  await productsPage.addBlueTop(); 
  await productsPage.addMenTshirt(); 

  // Cart 

  await cartPage.verifyProducts(); 
  await cartPage.proceedToCheckout(); 

  

    // Checkout 

    await checkoutPage.verifyAddress(); 
    await checkoutPage.enterComment('Please deliver by 5 PM'); 
    await checkoutPage.placeOrder(); 

  // Payment 
    await paymentPage.enterPaymentDetails(); 
    await paymentPage.confirmOrder(); 

   const download = await paymentPage.downloadInvoice(); 
   expect(await download.path()).not.toBeNull(); 
   await page.getByText('Continue').click(); 

}); 