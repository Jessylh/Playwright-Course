class ParentPage {
    async clickElement(element) {
        await element.waitFor()
        await element.click()
    }

    async fillInput(element, text) {
        await element.waitFor()
        await element.fill(text)
    }

    async waitForElementVisible(element) {
        await element.waitFor({state: 'visible'})
    }

    async waitForUrlOnPage(page, url ) {
        await page.waitForURL(url)
    }
}

module.exports = ParentPage; 