import { Page, Locator, expect } from '@playwright/test';

export class SignupLoginPage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;
  readonly duplicateEmailError: Locator;

  constructor(private page: Page) {
    this.nameInput = page.locator('[data-qa="signup-name"]');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.duplicateEmailError = page.locator('p:text("Email Address already exist!")');
  }

  async verifySignupFormVisible(): Promise<void> {
  
    await expect(this.page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
  }

  async enterName(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async clearName(): Promise<void> {
    await this.nameInput.clear();
  }

  async clearEmail(): Promise<void> {
    await this.emailInput.clear();
  }

  async clickSignupButton(): Promise<void> {
    await this.signupButton.click();
  }

  async getDuplicateEmailError(): Promise<string> {
    await expect(this.duplicateEmailError).toBeVisible();
    return this.duplicateEmailError.innerText();
  }

  async fillSignupForm(name: string, email: string): Promise<void> {
    await this.enterName(name);
    await this.enterEmail(email);
    await this.clickSignupButton();
  }
}
