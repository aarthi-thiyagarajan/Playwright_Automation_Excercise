# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AEQ-11_user_signup.spec.ts >> AEQ-11 | User SignUp >> AEQ-47 | TC-03: Verify Email Format Validation
- Location: tests\AEQ-11_user_signup.spec.ts:79:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Consent' })
  - operation was aborted: Test timeout of 60000ms exceeded.

```

# Page snapshot

```yaml
- generic [active] [ref=f379e1]:
  - banner [ref=f379e2]:
    - generic [ref=f379e5]:
      - link [ref=f379e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f379e9]
      - list [ref=f379e12]:
        - listitem [ref=f379e13]:
          - link " Home" [ref=f379e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f379e15]: 
            - text: Home
        - listitem [ref=f379e16]:
          - link " Products" [ref=f379e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f379e18]: 
            - text: Products
        - listitem [ref=f379e19]:
          - link " Cart" [ref=f379e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f379e21]: 
            - text: Cart
        - listitem [ref=f379e22]:
          - link " Signup / Login" [ref=f379e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f379e24]: 
            - text: Signup / Login
        - listitem [ref=f379e25]:
          - link " Test Cases" [ref=f379e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f379e27]: 
            - text: Test Cases
        - listitem [ref=f379e28]:
          - link " API Testing" [ref=f379e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f379e30]: 
            - text: API Testing
        - listitem [ref=f379e31]:
          - link " Video Tutorials" [ref=f379e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f379e33]: 
            - text: Video Tutorials
        - listitem [ref=f379e34]:
          - link " Contact us" [ref=f379e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f379e36]: 
            - text: Contact us
  - generic [ref=f379e39]:
    - generic [ref=f379e41]:
      - heading "Login to your account" [level=2] [ref=f379e42]
      - generic [ref=f379e43]:
        - textbox "Email Address" [ref=f379e44]
        - textbox "Password" [ref=f379e45]
        - button "Login" [ref=f379e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f379e48]
    - generic [ref=f379e50]:
      - heading "New User Signup!" [level=2] [ref=f379e51]
      - generic [ref=f379e52]:
        - textbox "Name" [ref=f379e53]
        - textbox "Email Address" [ref=f379e54]
        - button "Signup" [ref=f379e55] [cursor=pointer]
  - contentinfo [ref=f379e56]:
    - generic [ref=f379e61]:
      - heading "Subscription" [level=2] [ref=f379e62]
      - generic [ref=f379e63]:
        - textbox "Your email address" [ref=f379e64]
        - button "" [ref=f379e65] [cursor=pointer]
        - paragraph [ref=f379e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f379e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f379e73]:
    - generic [ref=f379e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f379e78]: Discover more
      - link "Test case management" [ref=f379e79] [cursor=pointer]
      - link "TV & Video" [ref=f379e84] [cursor=pointer]
      - link "Automation practice website" [ref=f379e89] [cursor=pointer]
  - insertion [ref=f379e94]:
    - iframe [ref=f379e97]:
      - iframe [ref=f387e1]:
        - generic [ref=f388e2]:
          - iframe [ref=f388e5]:
            - generic [ref=f393e1]:
              - iframe [ref=f393e3]:
                - generic [ref=f397e2] [cursor=pointer]:
                  - img "GettyImages-687711890" [ref=f397e22]
                  - iframe [ref=f397e31]:
                    
                  - img "RESERVA YA" [ref=f397e33]
                  - region "¿SABÍAS QUE NÁPOLES ESTÁ FRENTE A UN VOLCÁN ACTIVO?" [ref=f397e38]:
                    - generic [ref=f397e43]:
                      - generic [ref=f397e45]:
                        - text: ‌
                        - generic [ref=f397e46]: ¿‌
                        - generic [ref=f397e47]: SABÍAS‌
                        - generic [ref=f397e48]: ‌
                        - generic [ref=f397e49]: QUE‌
                        - generic [ref=f397e50]: ‌
                        - generic [ref=f397e51]: NÁPOLES‌
                        - generic [ref=f397e52]: ‌
                        - generic [ref=f397e53]: ESTÁ‌
                        - generic [ref=f397e54]: ‌
                      - generic [ref=f397e56]:
                        - text: ‌
                        - generic [ref=f397e57]: FRENTE‌
                        - generic [ref=f397e58]: ‌
                        - generic [ref=f397e59]: A‌
                        - generic [ref=f397e60]: ‌
                        - generic [ref=f397e61]: UN‌
                        - generic [ref=f397e62]: ‌
                        - generic [ref=f397e63]: VOLCÁN‌
                        - generic [ref=f397e64]: ‌
                        - generic [ref=f397e65]: ACTIVO?‌
              - iframe [ref=f393e4]:
                
          - button [ref=f388e14] [cursor=pointer]
  - generic [ref=f379e99]:
    - button "Privacy and cookie settings" [ref=f379e100] [cursor=pointer]
    - generic [ref=f379e101]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
  - generic [ref=f379e102]:
    - link "Go to shopping options for Secure login solutions" [ref=f379e107] [cursor=pointer]: Secure login solutions
    - button "Close shopping anchor" [ref=f379e108]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class SignupLoginPage {
  4  |   readonly nameInput: Locator;
  5  |   readonly emailInput: Locator;
  6  |   readonly signupButton: Locator;
  7  |   readonly duplicateEmailError: Locator;
  8  | 
  9  |   constructor(private page: Page) {
  10 |     this.nameInput = page.locator('[data-qa="signup-name"]');
  11 |     this.emailInput = page.locator('[data-qa="signup-email"]');
  12 |     this.signupButton = page.locator('[data-qa="signup-button"]');
  13 |     this.duplicateEmailError = page.locator('p:text("Email Address already exist!")');
  14 |   }
  15 | 
  16 |   async verifySignupFormVisible(): Promise<void> {
> 17 |     await this.page.getByRole('button', { name: 'Consent' }).click()
     |                                                              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  18 |     await expect(this.page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
  19 |   }
  20 | 
  21 |   async enterName(name: string): Promise<void> {
  22 |     await this.nameInput.fill(name);
  23 |   }
  24 | 
  25 |   async enterEmail(email: string): Promise<void> {
  26 |     await this.emailInput.fill(email);
  27 |   }
  28 | 
  29 |   async clearName(): Promise<void> {
  30 |     await this.nameInput.clear();
  31 |   }
  32 | 
  33 |   async clearEmail(): Promise<void> {
  34 |     await this.emailInput.clear();
  35 |   }
  36 | 
  37 |   async clickSignupButton(): Promise<void> {
  38 |     await this.signupButton.click();
  39 |   }
  40 | 
  41 |   async getDuplicateEmailError(): Promise<string> {
  42 |     await expect(this.duplicateEmailError).toBeVisible();
  43 |     return this.duplicateEmailError.innerText();
  44 |   }
  45 | 
  46 |   async fillSignupForm(name: string, email: string): Promise<void> {
  47 |     await this.enterName(name);
  48 |     await this.enterEmail(email);
  49 |     await this.clickSignupButton();
  50 |   }
  51 | }
  52 | 
```