const ParentPage = require("./parentPage.page");
const { expect, clickElement, page } = require('@playwright/test');

class ContactDetailsPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page; 
    }

    get deleteBtn() {
        return this.page.locator('#delete')
    }


    
    // Methods
     async clickOnDeleteBtn() {
        await super.clickElement(this.deleteBtn)
    }

    async deleteContactCreated() {
        await this.page.locator('#delete').click()
        await this.page.once('dialog', async function(dialog) {
            await dialog.accept();
        });
    }
}

module.exports = ContactDetailsPage;
