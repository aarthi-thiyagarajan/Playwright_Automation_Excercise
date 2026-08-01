# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_order_flow.spec.ts >> E2E Order Flow >> User can register, browse products, and complete an order
- Location: tests\e2e_order_flow.spec.ts:7:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Payment' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Payment' })

```

# Page snapshot

```yaml
- generic [ref=f74e1]:
  - banner [ref=f74e2]:
    - generic [ref=f74e5]:
      - link [ref=f74e8] [cursor=pointer]:
        - /url: /
      - list [ref=f74e12]:
        - listitem [ref=f74e13]:
          - link [ref=f74e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f74e15]: 
            - text: Home
        - listitem [ref=f74e16]:
          - link [ref=f74e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f74e18]: 
            - text: Products
        - listitem [ref=f74e19]:
          - link [ref=f74e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f74e21]: 
            - text: Cart
        - listitem [ref=f74e22]:
          - link [ref=f74e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f74e24]: 
            - text: Logout
        - listitem [ref=f74e25]:
          - link [ref=f74e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f74e27]: 
            - text: Delete Account
        - listitem [ref=f74e28]:
          - link [ref=f74e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f74e30]: 
            - text: Test Cases
        - listitem [ref=f74e31]:
          - link [ref=f74e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f74e33]: 
            - text: API Testing
        - listitem [ref=f74e34]:
          - link [ref=f74e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f74e36]: 
            - text: Video Tutorials
        - listitem [ref=f74e37]:
          - link [ref=f74e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f74e39]: 
            - text: Contact us
        - listitem [ref=f74e40]:
          - generic [ref=f74e41]:
            - generic [ref=f74e42]: 
            - text: Logged in as Jane Automation
  - generic [ref=f74e44]:
    - list [ref=f74e46]:
      - listitem [ref=f74e47]:
        - link [ref=f74e48] [cursor=pointer]:
          - /url: /
          - text: Home
      - listitem [ref=f74e49]: Checkout
    - heading [level=2] [ref=f74e51]: Address Details
    - generic [ref=f74e53]:
      - list [ref=f74e55]:
        - listitem [ref=f74e56]:
          - heading [level=3] [ref=f74e57]: Your delivery address
        - listitem [ref=f74e58]: Mrs. Jane Automation
        - listitem [ref=f74e59]: QA Corp
        - listitem [ref=f74e60]: 123 Test Street
        - listitem [ref=f74e61]: Suite 456
        - listitem [ref=f74e62]: Los Angeles California 90001
        - listitem [ref=f74e63]: United States
        - listitem [ref=f74e64]: "5551234567"
      - list [ref=f74e66]:
        - listitem [ref=f74e67]:
          - heading [level=3] [ref=f74e68]: Your billing address
        - listitem [ref=f74e69]: Mrs. Jane Automation
        - listitem [ref=f74e70]: QA Corp
        - listitem [ref=f74e71]: 123 Test Street
        - listitem [ref=f74e72]: Suite 456
        - listitem [ref=f74e73]: Los Angeles California 90001
        - listitem [ref=f74e74]: United States
        - listitem [ref=f74e75]: "5551234567"
    - heading [level=2] [ref=f74e77]: Review Your Order
    - table [ref=f74e79]:
      - rowgroup [ref=f74e80]:
        - row [ref=f74e81]:
          - cell [ref=f74e82]: Item
          - cell [ref=f74e83]: Description
          - cell [ref=f74e84]: Price
          - cell [ref=f74e85]: Quantity
          - cell [ref=f74e86]: Total
          - cell [ref=f74e87]
      - rowgroup [ref=f74e88]:
        - row [ref=f74e89]:
          - cell [ref=f74e90]:
            - link [ref=f74e91] [cursor=pointer]:
              - /url: ""
          - cell [ref=f74e93]:
            - heading [level=4] [ref=f74e94]:
              - link [ref=f74e95] [cursor=pointer]:
                - /url: /product_details/2
                - text: Men Tshirt
            - paragraph [ref=f74e96]: Men > Tshirts
          - cell [ref=f74e97]:
            - paragraph [ref=f74e98]: Rs. 400
          - cell [ref=f74e99]:
            - button [ref=f74e100] [cursor=pointer]: "1"
          - cell [ref=f74e101]:
            - paragraph [ref=f74e102]: Rs. 400
        - row [ref=f74e103]:
          - cell [ref=f74e104]
          - cell [ref=f74e105]
          - cell [ref=f74e106]:
            - heading [level=4] [ref=f74e107]: Total Amount
          - cell [ref=f74e108]:
            - paragraph [ref=f74e109]: Rs. 400
    - generic [ref=f74e110]:
      - generic [ref=f74e111]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [ref=f74e112]: Please deliver between 9am and 5pm.
    - link [ref=f74e114] [cursor=pointer]:
      - /url: /payment
      - text: Place Order
  - contentinfo [ref=f74e115]:
    - generic [ref=f74e120]:
      - heading [level=2] [ref=f74e121]: Subscription
      - generic [ref=f74e122]:
        - textbox [ref=f74e123]:
          - /placeholder: Your email address
        - button [ref=f74e124] [cursor=pointer]:
          - generic [ref=f74e125]: 
        - paragraph [ref=f74e126]: Get the most recent updates from our site and be updated your self...
    - generic [ref=f74e127]:
      - insertion [ref=f74e129]:
        - generic [ref=f74e132]:
          - heading [level=2] [ref=f74e134]: Discover more
          - link [ref=f74e135] [cursor=pointer]:
            - generic [ref=f74e136]: Mathematics
          - link [ref=f74e140] [cursor=pointer]:
            - generic [ref=f74e141]: Directories & Listings
          - link [ref=f74e145] [cursor=pointer]:
            - generic [ref=f74e146]: Development Tools
      - paragraph [ref=f74e152]: Copyright © 2021 All rights reserved
    - generic [ref=f74e154]:
      - button [ref=f74e155] [cursor=pointer]: Privacy and cookie settings
      - generic [ref=f74e156]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
  - insertion [ref=f74e157]:
    - iframe [ref=f74e160]:
      - iframe [ref=f83e1]:
        - generic [ref=f85e2]:
          - iframe [ref=f85e5]:
            - generic [ref=f92e1]:
              - iframe [ref=f92e3]:
                - generic [ref=f93e2] [cursor=pointer]:
                  - img "GettyImages-1308481673" [ref=f93e10]
                  - iframe [ref=f93e19]:
                    
                  - iframe [ref=f93e25]:
                    
                  - region "¿SABÍAS QUE ÁMSTERDAM TIENE CASI 400 CANALES?" [ref=f93e27]:
                    - generic [ref=f93e32]:
                      - generic [ref=f93e34]:
                        - text: ‌
                        - generic [ref=f93e35]: ¿‌
                        - generic [ref=f93e36]: SABÍAS‌
                        - generic [ref=f93e37]: ‌
                        - generic [ref=f93e38]: QUE‌
                        - generic [ref=f93e39]: ‌
                        - generic [ref=f93e40]: ÁMSTERDAM‌
                        - generic [ref=f93e41]: ‌
                      - generic [ref=f93e43]:
                        - text: ‌
                        - generic [ref=f93e44]: TIENE‌
                        - generic [ref=f93e45]: ‌
                        - generic [ref=f93e46]: CASI‌
                        - generic [ref=f93e47]: ‌
                        - generic [ref=f93e48]: 400‌
                        - generic [ref=f93e49]: ‌
                        - generic [ref=f93e50]: CANALES?‌
              - iframe [ref=f92e4]:
                
          - button [ref=f85e14] [cursor=pointer]
  - generic [ref=f74e161]:
    - link [ref=f74e166] [cursor=pointer]: Software
    - button [ref=f74e167]
  - text: 
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export interface PaymentInfo {
  4  |   nameOnCard: string;
  5  |   cardNumber: string;
  6  |   cvc: string;
  7  |   expiryMonth: string;
  8  |   expiryYear: string;
  9  | }
  10 | 
  11 | export class PaymentPage {
  12 |   constructor(private page: Page) {}
  13 | 
  14 |   async verifyPaymentPageVisible(): Promise<void> {
> 15 |     await expect(this.page.getByRole('heading', { name: 'Payment' })).toBeVisible();
     |                                                                       ^ Error: expect(locator).toBeVisible() failed
  16 |   }
  17 | 
  18 |   async fillPaymentDetails(info: PaymentInfo): Promise<void> {
  19 |     await this.page.locator('[data-qa="name-on-card"]').fill(info.nameOnCard);
  20 |     await this.page.locator('[data-qa="card-number"]').fill(info.cardNumber);
  21 |     await this.page.locator('[data-qa="cvc"]').fill(info.cvc);
  22 |     await this.page.locator('[data-qa="expiry-month"]').fill(info.expiryMonth);
  23 |     await this.page.locator('[data-qa="expiry-year"]').fill(info.expiryYear);
  24 |   }
  25 | 
  26 |   async confirmOrder(): Promise<void> {
  27 |     await this.page.locator('[data-qa="pay-button"]').click();
  28 |   }
  29 | }
  30 | 
```