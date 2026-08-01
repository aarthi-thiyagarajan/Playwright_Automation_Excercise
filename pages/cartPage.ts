import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyCartPageVisible(): Promise<void> {
    await expect(this.page).toHaveURL(/\/view_cart/);
    await expect(this.page.locator('#cart_info')).toBeVisible();
  }

  async verifyProductInCart(): Promise<void> {
    await expect(this.page.locator('tbody tr').first()).toBeVisible();
  }

  async proceedToCheckout(): Promise<void> {
    await this.page.getByText('Proceed To Checkout').click();
  }
}
