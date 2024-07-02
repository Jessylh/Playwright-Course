const {chromium} = require('playwright')

/*
https://thinking-tester-contact-list.herokuapp.com/
jogeh79883@acuxi.com
jogeh79883
 */

//Verify that the user is able to add new contact
async function addNewContact() {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    //Login
    await page.goto('https://thinking-tester-contact-list.herokuapp.com')
    await page.locator("#email").fill("jogeh79883@acuxi.com")
    await page.locator("#password").fill("jogeh79883")
    await page.locator("#submit").click()

    //Header Assertion
    await expect(page.getByText("Contact List")).toBeVisible("Contact List")

    //Add new contact
    await page.locator("#add-contact").click()
    await page.locator("#firstName").fill("Jessy")
    await page.locator("#lastName").fill("H")
    await page.locator("#birthdate").fill("1996-07-23")
    await page.locator("#email").fill("jogeh79883@acuxi.com")
    await page.locator("#phone").fill("80005000")
    await page.locator("#street1").fill("Main street 1023")
    await page.locator("#street2").fill("Main street 4050")
    await page.locator("#city").fill("Guadalupe")
    await page.locator("#stateProvince").fill("San Jose")
    await page.locator("#postalCode").fill("10400")
    await page.locator("#country").fill("Costa Rica")

    //Submit the form
    await page.locator("#submit").click()

    //Assertion - Verify that the new contact was successfully created by first name
    await page.locator(".contactTableBodyRow").click()
    await expect(page.getByText("Jessy")).toBeVisible("Jessy")
    await browser.close();
}

addNewContact();