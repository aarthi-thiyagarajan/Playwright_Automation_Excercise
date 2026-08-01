import { test, expect } from '../fixtures/pom-fixtures';
import { PoManager } from '../pages/PoManager';

const STORY = 'AEQ-11 | User SignUp';

test.describe(STORY, () => {
  let preRegisteredEmail: string;

  // Register one account in beforeAll — reused by duplicate-email test cases
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    const pm = new PoManager(page);
    preRegisteredEmail = `pre.reg.${Date.now()}@mailtest.com`;

    await pm.homePage.navigate();
    await pm.homePage.clickSignupLogin();
    await pm.signupLoginPage.fillSignupForm('Pre Registered User', preRegisteredEmail);
    await pm.accountInfoPage.verifyEnterAccountInfoVisible();
    await pm.accountInfoPage.fillAccountInfo({
      title: 'Mrs',
      password: 'SecurePass@123',
      firstName: 'Pre',
      lastName: 'Registered',
      company: 'Test Corp',
      address1: '1 Test Avenue',
      address2: '',
      country: 'United States',
      state: 'Texas',
      city: 'Austin',
      zipcode: '73301',
      mobileNumber: '5550001111',
    });
    await pm.accountCreatedPage.verifyAccountCreated();
    await pm.accountCreatedPage.clickContinue();
    await page.close();
  });

  // ─── TC-01 ────────────────────────────────────────────────────────────────
  test('AEQ-45 | TC-01: Verify Valid Name and Email Input', async ({ poManager }) => {
    const { homePage, signupLoginPage } = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Enter valid name and email, verify fields accept input', async () => {
      await signupLoginPage.enterName('John Doe');
      await signupLoginPage.enterEmail('john.doe@example.com');
      await expect(signupLoginPage.nameInput).toHaveValue('John Doe');
      await expect(signupLoginPage.emailInput).toHaveValue('john.doe@example.com');
    });
  });

  // ─── TC-02 ────────────────────────────────────────────────────────────────
  test('AEQ-46 | TC-02: Verify Required Fields Validation', async ({ poManager }) => {
    const { homePage, signupLoginPage } = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Click Signup with empty name field — expect form stays on page', async () => {
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Fill name, leave email empty — expect form stays on page', async () => {
      await signupLoginPage.enterName('John Doe');
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible();
    });
  });

  // ─── TC-03 ────────────────────────────────────────────────────────────────
  test('AEQ-47 | TC-03: Verify Email Format Validation', async ({ poManager }) => {
    const { homePage, signupLoginPage} = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit with email missing @ — expect form stays on page', async () => {
      await signupLoginPage.enterName('John Doe');
      await signupLoginPage.enterEmail('userexample.com');
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible()
    });

    await test.step('Submit with email missing domain — expect form stays on page', async () => {
      await signupLoginPage.clearEmail();
      await signupLoginPage.enterEmail('user@.com');
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible()
    });

    await test.step('Submit with email missing TLD — expect form stays on page', async () => {
      await signupLoginPage.clearEmail();
      await signupLoginPage.enterEmail('user@example.');
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible();
    });
  });

  // ─── TC-04 ────────────────────────────────────────────────────────────────
  test('AEQ-48 | TC-04: Verify Duplicate Email Prevention', async ({ poManager }) => {
    const { homePage, signupLoginPage } = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit signup with already-registered email — expect duplicate error', async () => {
      await signupLoginPage.fillSignupForm('Another User', preRegisteredEmail);
      await expect(signupLoginPage.duplicateEmailError).toBeVisible();
    });
  });

  // ─── TC-05 ────────────────────────────────────────────────────────────────
  test('AEQ-49 | TC-05: Verify Duplicate Email Error Message', async ({ poManager }) => {
    const { homePage, signupLoginPage } = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit with duplicate email — verify error message text', async () => {
      await signupLoginPage.fillSignupForm('Another User', preRegisteredEmail);
      const errorText = await signupLoginPage.getDuplicateEmailError();
      expect(errorText).toContain('already exist');
    });
  });

  // ─── TC-06 ────────────────────────────────────────────────────────────────
  test('AEQ-50 | TC-06: Verify Successful Registration Flow Progression', async ({ poManager }) => {
    const { homePage, signupLoginPage, accountInfoPage } = poManager;
    const uniqueEmail = `tc06.${Date.now()}@mailtest.com`;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit valid new credentials — verify proceeds to Account Info', async () => {
      await signupLoginPage.fillSignupForm('John Smith', uniqueEmail);
      await accountInfoPage.verifyEnterAccountInfoVisible();
    });
  });

  // ─── TC-07 ────────────────────────────────────────────────────────────────
  test('AEQ-51 | TC-07: Verify Signup Button Functionality', async ({ poManager }) => {
    const { homePage, signupLoginPage, accountInfoPage } = poManager;
    const uniqueEmail = `tc07.${Date.now()}@mailtest.com`;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Verify Signup button is visible and enabled', async () => {
      await expect(signupLoginPage.signupButton).toBeVisible();
      await expect(signupLoginPage.signupButton).toBeEnabled();
    });

    await test.step('Click Signup button — verify registration flow is triggered', async () => {
      await signupLoginPage.fillSignupForm('Valid User', uniqueEmail);
      await accountInfoPage.verifyEnterAccountInfoVisible();
    });
  });

  // ─── TC-08 ────────────────────────────────────────────────────────────────
  test('AEQ-52 | TC-08: Verify Special Characters in Name Field', async ({ poManager }) => {
    const { homePage, signupLoginPage, accountInfoPage } = poManager;

    await test.step('Signup with apostrophe in name (e.g. O\'Connor) — verify accepted', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.fillSignupForm("John O'Connor", `tc08a.${Date.now()}@mailtest.com`);
      await accountInfoPage.verifyEnterAccountInfoVisible();
    });

    await test.step('Signup with hyphenated name (e.g. Mary-Jane) — verify accepted', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.fillSignupForm('Mary-Jane Smith', `tc08b.${Date.now()}@mailtest.com`);
      await accountInfoPage.verifyEnterAccountInfoVisible();
    });
  });

  // ─── TC-09 ────────────────────────────────────────────────────────────────
  test('AEQ-53 | TC-09: Verify Name Field Length Validation', async ({ poManager }) => {
    const { homePage, signupLoginPage } = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit with single-character name "A" — expect form rejects', async () => {
      await signupLoginPage.enterName('A');
      await signupLoginPage.enterEmail(`tc09a.${Date.now()}@mailtest.com`);
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit with 101-character name — expect form rejects', async () => {
      await signupLoginPage.clearName();
      await signupLoginPage.enterName('A'.repeat(101));
      await signupLoginPage.clickSignupButton();
      await signupLoginPage.verifySignupFormVisible();
    });
  });

  // ─── TC-10 ────────────────────────────────────────────────────────────────
  test('AEQ-54 | TC-10: Verify Email Case-Insensitive Validation', async ({ poManager }) => {
    const { homePage, signupLoginPage } = poManager;

    await test.step('Navigate to Signup page', async () => {
      await homePage.navigate();
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Submit pre-registered email in UPPERCASE — expect duplicate error', async () => {
      await signupLoginPage.fillSignupForm('Case Test User', preRegisteredEmail.toUpperCase());
      const errorText = await signupLoginPage.getDuplicateEmailError();
      expect(errorText).toContain('already exist');
    });
  });
});
