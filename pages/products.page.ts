import { HomePage } from "./home.page";

class ProductsPage extends HomePage {
    get itemContainers() { return $$('div.inventory_item') }

    override async open(): Promise<void> {
        await super.open('https://www.saucedemo.com/inventory.html');
    }

    async clickAddToCartButton(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        await itemContainer.$('button[id^=add-to-cart]').click();
    }

    async clickRemoveButton(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        await itemContainer.$('button[id^=remove-from-cart]').click();
    }

    async getItemPrice(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        return itemContainer.$('div.inventory_item_price').getText();
    }

    async getItemDescription(itemName: string) {
        const itemContainer = await this.getItemContainerByName(itemName);
        return itemContainer.$('div.inventory_item_desc').getText();
    }

    private async getItemContainerByName(itemName: string): Promise<ChainablePromiseElement> {
        return this.itemContainers.find(async (itemContainer) => {
            return (await itemContainer.$('div.inventory_item_name').getText()) === itemName
        });
    }

}

export default new ProductsPage();