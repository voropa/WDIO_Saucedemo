import { expect, browser, $ } from '@wdio/globals'

describe('My Login application 2', () => {

    beforeEach(async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);
        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()
    });

    afterEach(async () => {
        // Logout
    });

    it('should login with valid credentials 1', async () => {
        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });

    it('should login with valid credentials 2', async () => {
        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });

    it('should login with valid credentials 3', async () => {
        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });
})

