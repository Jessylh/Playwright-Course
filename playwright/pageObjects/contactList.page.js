const ParentPage = require("./parentPage.page");
const { expect, clickElement, page } = require('@playwright/test');

class ContactListPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page; 
    }

    get contactListHeader() {
        return this.page.getByText('Contact List')
    }

    get newContactBtn() {
        return this.page.locator("#add-contact")
    }

    get newContactCreatedBtn() {
        return this.page.getByRole("cell", { name: "Jessy H" })
    }

    // Methods
/*     async isContactListHeaderVisible() {
        await expect(this.contactListHeader).toBeVisible();
    } */
    async isContactListHeaderVisible() {
        const mainHeader = this.contactListHeader;
        await expect(mainHeader).toBeVisible()
    }

    async clickOnAddNewContactBtn() {
        await super.clickElement(this.newContactBtn)
    }

    async userIsRedirectedToContactPage() {
        const url = "https://thinking-tester-contact-list.herokuapp.com/contactList"
        await super.waitForUrlOnPage(this.page, url)
    }
 
    async isContactListHeaderVisible() {
        const mainHeader = this.contactListHeader;
        await expect(mainHeader).toBeVisible()
    }

    async isNewContactCreatedVisible() {
        const newContactCreatedByName = this.newContactCreatedBtn;
        await expect(newContactCreatedByName).toBeVisible()
    }

    async clickOnNewContacCreatedBtn() {
        await super.clickElement(this.newContactCreatedBtn)
    }

}

module.exports = ContactListPage;
