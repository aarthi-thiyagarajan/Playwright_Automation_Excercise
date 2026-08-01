import { Page, expect } from '@playwright/test';

export class ProductDetailPage {
  constructor(private page: Page) {}

  async verifyProductDetailVisible(): Promise<void> {
    await expect(this.page.locator('.product-information')).toBeVisible();
  }

  async setQuantity(quantity: number): Promise<void> {
    await this.page.locator('#quantity').fill(String(quantity));
  }

  async addToCart(): Promise<void> {
    await this.page.getByRole('button', { name: /add to cart/i }).click();
  }

  async viewCart(): Promise<void> {
    await this.page.getByRole('link', { name: 'View Cart' }).click();
  }
}
