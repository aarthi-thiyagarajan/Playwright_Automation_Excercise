import {Locator, Page, expect} from "@playwright/test"

export class ProductsPage{
    readonly page:Page
    readonly headingallproducts:Locator

    constructor(page:Page){
        this.page=page
        this.headingallproducts=this.page.getByRole('heading', { name: 'All Products' })
    }

    async verifyProductsPageVisible(){
        await expect(this.headingallproducts).toBeVisible()
    }

    async hoverOverProduct(index:number){
        const product = this.page.locator(".product-image-wrapper").nth(index)
        await product.hover()
    }

    async viewProduct(index: number){
        await this.hoverOverProduct(index)
        await this.page.locator('.product-image-wrapper').nth(index).getByRole('link', { name: 'View Product' }).click();

    }
}