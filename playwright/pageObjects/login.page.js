const ParentPage = require("./parentPage.page");

class LoginPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page; 
    }

    get inputUser() {
        return this.page.locator("#email")
    }

    get inputPassword() {
        return this.page.locator("#password")
    } 

    get btnLogin() {
        return this.page.locator('#submit')
    }

    // Methods
    async login(user, password) {
        await super.fillInput(this.inputUser, user)
        await super.fillInput(this.inputPassword, password)
        await super.clickElement(this.btnLogin)
    }
}

module.exports = LoginPage;





















/* 
const ParentPage = require("./parentPage.page");

class LoginPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page; 
    }

    get inputUser() {
        return this.page.locator("#email")
    }

    get inputPassword() {
        return this.page.locator("#password")
    } 

    get btnLogin() {
        return this.page.locator('#submit')
    }


 //Methods
    
    async login(user, password) {
        await super.fillInput(this.inputUser, user)
        await super.fillInput(this.inputPassword, password)
        await super.clickElement(this.btnLogin)
    }

}

module.exports = LoginPage;  */