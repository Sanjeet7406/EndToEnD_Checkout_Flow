class LoginPage { 
   constructor(page) { 

        this.page = page; 
        this.loginLink = 'a[href="/login"]'; 
        this.email = '[data-qa="login-email"]'; 
        this.password = '[data-qa="login-password"]'; 
        this.loginBtn = '[data-qa="login-button"]'; 

    } 

    async login(userEmail, userPassword) { 

        await this.page.click(this.loginLink); 
        await this.page.fill(this.email, userEmail); 
        await this.page.fill(this.password, userPassword); 
        await this.page.click(this.loginBtn); 

    } 

} 

module.exports = LoginPage;