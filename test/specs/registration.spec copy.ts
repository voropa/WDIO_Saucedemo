import { expect, browser, $ } from '@wdio/globals'

describe('My Login application 2', () => {
    it('should login with valid credentials 1', async () => {
        // 1
        await browser.url(`https://the-internet.herokuapp.com/login`)

        // 2
        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click();

        // 3

        expect(await $('[name="login-button"]').isDisplayed()).toBe(true); // true / false

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'));

        await expect($('#flash').isDisplayed()).toBe(false);

        // 1st option
        $$('$deleteButtons').forEach(async (element, index) => {
            await expect(element).toBeDisplayed({ message: `Delete button #${index} is not displayed`, wait: 5000 }); // wait + assert
        });

        //Delete button #1 is not displayed

        // 2nd option
        await expect($$('#deleteButton').every(async (element) => {
            return element.isDisplayed();
        })).toBeTruthy(); // Fail: expected true but found false

        await expect($('#qwe')).toBeDisplayed({
            message: "Expected menu container has appeared",
        });
        // getValue() => string
        // getAttribute() -> 'false' - string => boolean 
        const price1 = await $('item1_price').getText(); // string -> number
        const price2 = await $('item12_price').getText(); // string -> number
        const totalPrice = await $('total_price').getText();

        expect(parseFloat(price1) + parseFloat(price2)).toEqual(parseFloat(totalPrice));
    });
});

