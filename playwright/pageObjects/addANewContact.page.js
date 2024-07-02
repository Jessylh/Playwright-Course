const ParentPage = require("./parentPage.page");
const { expect, fillInput } = require('@playwright/test');

class addANewContactPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page; 
    }

    get firstNameTxt() {
        return this.page.locator("#firstName")
    }

    get lastNameTxt() {
        return this.page.locator("#lastName")
    }

    get birthDateTxt() {
        return this.page.locator("#birthdate")
    }

    get emailTxt() {
        return this.page.locator("#email")
    }
    
    get phoneTxt() {
        return this.page.locator("#phone")
    }

    get street1Txt() {
        return this.page.locator("#street1")
    }

    get street2Txt() {
        return this.page.locator("#street2")
    }

    get cityTxt() {
        return this.page.locator("#city")
    }

    get stateProvinceTxt() {
        return this.page.locator("#stateProvince")
    }

    get postalCodeTxt() {
        return this.page.locator("#postalCode")
    }

    get countryTxt() {
        return this.page.locator("#country")
    }

    get submitBtn() {
        return this.page.locator("#submit")
    }

    //Methods
    async fillFirstName(text) {
        await this.fillInput(this.firstNameTxt, text);
    }

    async fillLastName(text) {
        await this.fillInput(this.lastNameTxt, text);
    }

    async fillBirthDate(text) {
        await this.fillInput(this.birthDateTxt, text);
    }

    async fillEmail(text) {
        await this.fillInput(this.emailTxt, text);
    }

    async fillPhone(text) {
        await this.fillInput(this.phoneTxt, text);
    }

    async fillStreet1(text) {
        await this.fillInput(this.street1Txt, text);
    }

    async fillStreet2(text) {
        await this.fillInput(this.street2Txt, text);
    }

    async fillCity(text) {
        await this.fillInput(this.cityTxt, text);
    }

    async fillStateProvince(text) {
        await this.fillInput(this.stateProvinceTxt, text);
    }

    async fillPostalCode(text) {
        await this.fillInput(this.postalCodeTxt, text);
    }

    async fillCountry(text) {
        await this.fillInput(this.countryTxt, text);
    }

    async clickOnSubmitBtn() {
        await super.clickElement(this.submitBtn)
    }

}




module.exports = addANewContactPage;
