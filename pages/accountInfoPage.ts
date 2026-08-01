import {expect, Page} from "@playwright/test"

export interface AccountInfo {
  title: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}


export class AccountInfoPage{
    readonly page: Page

    constructor(page:Page){
        this.page=page
    }

    async verifyEnterAccountInfoVisible(){
        await expect(this.page.getByText('Enter Account Information')).toBeVisible()
    }

    async fillAccountInfo(info:AccountInfo){
           await this.page.locator(`#id_gender${info.title === 'Mr' ? '1' : '2'}`).check();
       await this.page.getByRole('textbox', { name: 'Password *' }).fill(info.password)

       await this.page.locator('#days').selectOption('10')
       await this.page.locator('#months').selectOption('5')
       await this.page.locator('#years').selectOption('1990')

       await this.page.locator('#newsletter').check()
       await this.page.locator('#optin').check()

       await this.page.locator('#first_name').fill(info.firstName)
       await this.page.locator('#last_name').fill(info.lastName)
       await this.page.locator('#company').fill(info.company)
       await this.page.locator('#address1').fill(info.address1)
       await this.page.locator('#address2').fill(info.address2)
       await this.page.locator('#country').selectOption(info.country)
       await this.page.locator('#state').fill(info.state)
       await this.page.locator('#city').fill(info.city)
       await this.page.locator('#zipcode').fill(info.zipcode)
       await this.page.locator('#mobile_number').fill(info.mobileNumber)

       await this.page.getByRole('button', { name: 'Create Account' }).click()
    }
}