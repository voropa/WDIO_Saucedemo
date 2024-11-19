import { Key } from 'webdriverio'

export abstract class BasePage {
    constructor() {
    }

    async open(url: string) {
        await browser.url(url);
    }

    async pressTabKey() {
        await browser.keys(Key.Tab);
    }
}