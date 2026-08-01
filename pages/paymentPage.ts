import { Page, expect } from '@playwright/test';

export interface PaymentInfo {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}

export class PaymentPage {
  constructor(private page: Page) {}

  async verifyPaymentPageVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Payment' })).toBeVisible();
  }

  async fillPaymentDetails(info: PaymentInfo): Promise<void> {
    await this.page.locator('[data-qa="name-on-card"]').fill(info.nameOnCard);
    await this.page.locator('[data-qa="card-number"]').fill(info.cardNumber);
    await this.page.locator('[data-qa="cvc"]').fill(info.cvc);
    await this.page.locator('[data-qa="expiry-month"]').fill(info.expiryMonth);
    await this.page.locator('[data-qa="expiry-year"]').fill(info.expiryYear);
  }

  async confirmOrder(): Promise<void> {
    await this.page.locator('[data-qa="pay-button"]').click();
  }
}
