import { Page, expect } from '@playwright/test';

export class OrderConfirmationPage {
  constructor(private page: Page) {}

  async verifyOrderPlaced(): Promise<void> {
    await expect(this.page.getByText('Order Placed!')).toBeVisible();
  }

  async getConfirmationMessage(): Promise<string> {
    return await this.page.locator('[data-qa="order-placed"] p').innerText();
  }
}
