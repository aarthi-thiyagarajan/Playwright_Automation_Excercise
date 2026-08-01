import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyCheckoutPageVisible(): Promise<void> {
    await expect(this.page.getByText('Review Your Order')).toBeVisible();
  }

  async verifyAddressDetails(): Promise<void> {
    await expect(this.page.locator('#address_delivery')).toBeVisible();
    await expect(this.page.locator('#address_invoice')).toBeVisible();
  }

  async addOrderComment(comment: string): Promise<void> {
    await this.page.locator('textarea[name="message"]').fill(comment);
  }

  async placeOrder(): Promise<void> {
    await this.page.getByRole('link', { name: 'Place Order' }).click();
  }
}
