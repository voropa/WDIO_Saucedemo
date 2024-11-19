import { BasePage } from "./base.page";

export abstract class HomePage extends BasePage {

    get cartIcon() { return $('a.shopping_cart_link') };

    get menuIcon() { return $('#react-burger-menu-btn') };

    async clickCartIcon() {
        await this.cartIcon.click();
    }

    async openMenu() {
        await this.menuIcon.click();
    }
}