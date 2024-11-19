import { BasePage } from "./base.page";

class LoginPage extends BasePage {

    get usernameInput() { return $('#user-name') };

    get passwordInput() { return $('#password') };

    get loginButton() { return $('#login-button') };

    get errorMessage() { return $('div.error-message-container') };

    override async open(): Promise<void> {
        await super.open('https://www.saucedemo.com');
    }

    async setUsername(username: string): Promise<void> {
        await this.usernameInput.setValue(username);
    }

    async getUsername(): Promise<string> {
        return this.usernameInput.getValue();
    }

    async setPassword(password: string) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}

export default new LoginPage();