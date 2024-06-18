const { test, expect } = require("@playwright/test")
const { USER, PASSWORD } = process.env

test.describe("Login", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.locator("#email").fill(USER)
        await page.locator("#password").fill(PASSWORD)
        await page.locator("#submit").click()

        // Header Assertion
        await expect(page.getByText("Contact List")).toBeVisible();
    });

    test("Verify user is able to add a new contact ", async ({ page }) => {
        //Header Assertion
        await expect(page.getByText("Contact List")).toBeVisible("Contact List")

        //Add new contact
        await page.pause();
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
        const url = "https://thinking-tester-contact-list.herokuapp.com/contactList"
        await expect(page).toHaveURL(url)

        //Assertion - Verify that the new contact was successfully created by first name
        await expect(page.getByText("Jessy H")).toBeVisible()
        await page.getByRole("cell", { name: "Jessy H" }).click()

        //Delete the contact created by dialog pop up
        page.on("dialog", async dialog => {
            //await expect(dialog).toBeVisible({ timeout: 30000 })
            await dialog.accept()
        });

        await page.locator("#delete").click()
        await expect(page).toHaveURL(url)
        //await page.goto("/contactList");

        //Assertion - Verify that the new contact was successfully removed
        const contactItemCreated = await page.getByText("Jessy H");
        await expect(contactItemCreated).toBeHidden();
    });

});

//npx playwright test
//npx playwright test --headed