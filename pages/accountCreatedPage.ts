import {expect, Locator, Page} from "@playwright/test"

export class AccountCreatedPage{
    readonly page : Page
    readonly accountcreatedMsg:Locator
    readonly continueBtton:Locator

    constructor(page:Page){
       this.page=page
       this.accountcreatedMsg=this.page.getByText('Account Created!')
       this.continueBtton=this.page.getByRole('link', { name: 'Continue' })
    }

    async verifyAccountCreated(){
        await expect(this.accountcreatedMsg).toBeVisible()
        
    }

    async clickContinue(){
        await this.continueBtton.click()
    }
}