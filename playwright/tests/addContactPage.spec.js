const { test, expect } = require('@playwright/test');
const { USER, PASSWORD } = process.env;
const LoginPage = require('../pageObjects/login.page');
const ContactListPage = require('../pageObjects/contactList.page');
const AddANewContactPage = require('../pageObjects/addANewContact.page');
const ContactDetailsPage = require('../pageObjects/contactDetails.page')
const { faker } = require('@faker-js/faker');

let loginPage;
let contactListPage;
let addANewContactPage
let contactDetailsPage


test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        contactListPage = new ContactListPage(page);
        addANewContactPage = new AddANewContactPage(page)
        contactDetailsPage = new ContactDetailsPage(page)
        await page.goto('/');
        await loginPage.login(USER, PASSWORD);
        // Verify that the contact list header is visible
        await contactListPage.isContactListHeaderVisible();
    });

    test('Verify that the user is able add new contact', async ({ page }) => {
        // Login
        await contactListPage.clickOnAddNewContactBtn()
        await addANewContactPage.fillFirstName('Jessy');
        await addANewContactPage.fillLastName("H")
        await addANewContactPage.fillBirthDate("1996-07-23")
        await addANewContactPage.fillEmail("jogeh79883@acuxi.com")
        await addANewContactPage.fillPhone("80005000")
        await addANewContactPage.fillStreet1("Main street 1023")
        await addANewContactPage.fillStreet2("Main street 4050")
        await addANewContactPage.fillCity("Guadalupe")
        await addANewContactPage.fillStateProvince("San Jose")
        await addANewContactPage.fillPostalCode("10400")
        await addANewContactPage.fillCountry("Costa Rica")
        //Submit the form
        await addANewContactPage.clickOnSubmitBtn()
        await contactListPage.userIsRedirectedToContactPage()

        //Assertion - Verify that the new contact was successfully created by first name
        await contactListPage.isNewContactCreatedVisible('Jessy H')
        await contactListPage.clickOnNewContacCreatedBtn()


        //Delete the contact created by dialog pop up
        //await contactDetailsPage.deleteContactCreated()
        //await contactDetailsPage.clickOnDeleteBtn()
    });

    test('Verify that the user is able add new contact by faker', async ({ page }) => {

        // Utilizando un objeto para almacenar los datos falsos
        const randomFirstName = faker.person.fullName()
        const randomLastName = faker.person.lastName()
        const randomEmail = faker.internet.email()
        const randomAddress1 = faker.address.streetAddress()
        const randomAddress2 = faker.address.streetAddress()
        const randomCity = faker.address.city();
        const randomState = faker.address.state()
        const randomZipCode = faker.address.zipCode()
        const randomCountry = faker.address.country();

        await contactListPage.clickOnAddNewContactBtn();
        await addANewContactPage.fillFirstName(randomFirstName);
        await addANewContactPage.fillLastName(randomLastName);
        await addANewContactPage.fillBirthDate("1996-07-23");
        await addANewContactPage.fillEmail(randomEmail)
        await addANewContactPage.fillPhone("80005000")
        await addANewContactPage.fillStreet1(randomAddress1)
        await addANewContactPage.fillStreet2(randomAddress2)
        await addANewContactPage.fillCity(randomCity)
        await addANewContactPage.fillStateProvince(randomState)
        await addANewContactPage.fillPostalCode(randomZipCode)
        await addANewContactPage.fillCountry(randomCountry)

        //Submit the form
        await addANewContactPage.clickOnSubmitBtn()
        await contactListPage.userIsRedirectedToContactPage()

        //Assertion - Verify that the new contact was successfully created by first name
        await contactListPage.isNewContactCreatedVisible(randomFirstName)
        await contactListPage.clickOnNewContacCreatedBtn()
    });

});

// npm run test
// npx playwright test
// npx playwright test --headed
