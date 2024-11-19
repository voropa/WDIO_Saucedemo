import loginPage from "../../pages/login.page";
import productsPage from "../../pages/products.page";

describe('Login tests', async () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('Positive login test', async () => {
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton();
        await expect(productsPage.cartIcon).toBeDisplayed();
    });

    it('Negative login test', async () => {
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('');
        await loginPage.clickLoginButton();
        await expect(loginPage.loginButton).toBeDisplayed();
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
    });

    it.only('Product test', async () => {
        const productName = 'Sauce Labs Onesie';
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickLoginButton();
        expect(await productsPage.getItemPrice(productName)).toEqual('$7.99');
        await productsPage.clickAddToCartButton(productName);
    });
})