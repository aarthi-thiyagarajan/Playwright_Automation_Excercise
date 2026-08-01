import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async verifyHomePageVisible(): Promise<void> {
    await expect(this.page).toHaveURL(/automationexercise\.com/);
    await expect(this.page.locator('img[alt="Website for automation practice"]')).toBeVisible();
  }

  async clickSignupLogin() {
  const consent = this.page.getByRole('button', { name: 'Consent' });

  if (await consent.isVisible().catch(() => false)) {
    await consent.click();
  }

  await this.page.getByRole('link', { name: 'Signup / Login' }).click();
}

  async clickProducts(): Promise<void> {
    await this.page.getByRole('link', { name: ' Products' }).click();
  }

  async clickCart(): Promise<void> {
    await this.page.getByRole('link', { name: ' Cart' }).click();
  }
}
