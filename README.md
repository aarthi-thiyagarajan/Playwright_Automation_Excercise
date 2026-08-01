# Playwright_Automation_Excercise
QA Automation AI Framework
End-to-end test automation framework for automationexercise.com built with Playwright and TypeScript, following the Page Object Model pattern. Tests are linked to Jira and failures are automatically reported as bugs. Reports are generated with Allure and the pipeline runs on GitHub Actions.

Table of Contents
Tech Stack
Project Structure
Prerequisites
Installation
Environment Variables
Configuration
Test Data
Running Tests
Reports
CI/CD Pipeline
Test Coverage
Page Objects Reference
Adding New Tests
Tech Stack
Tool	Version	Purpose
Playwright	^1.44.0	Browser automation and test runner
TypeScript	^5.4.0	Static typing
allure-playwright	^3.0.0	Allure reporter integration
allure-commandline	^2.29.0	Allure HTML report generation
Node.js	>=20	Runtime
GitHub Actions	—	CI/CD pipeline
Project Structure
Qa-Automation-Ai-Framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD pipeline
│
├── fixtures/
│   └── testFixtures.ts             # Custom Playwright fixture — injects PoManager
│
├── pages/                          # Page Object Model classes
│   ├── PoManager.ts                # Central access point for all page objects
│   ├── HomePage.ts                 # Homepage navigation and verification
│   ├── SignupLoginPage.ts          # Signup form interactions and validations
│   ├── AccountInfoPage.ts          # Account registration form (full address + personal details)
│   ├── AccountCreatedPage.ts       # Account creation confirmation
│   ├── ProductsPage.ts             # Product listing, hover, and view product
│   ├── ProductDetailPage.ts        # Product detail, quantity, add to cart
│   ├── CartPage.ts                 # Cart verification and checkout navigation
│   ├── CheckoutPage.ts             # Address verification, order comment, place order
│   ├── PaymentPage.ts              # Payment details entry and order confirmation
│   └── OrderConfirmationPage.ts    # Final order confirmation message
│
├── specs/                          # Test specification files
│   ├── e2e_order_flow.spec.ts      # Full E2E journey: register → browse → checkout → confirm
│   └── AEQ-11_user_signup.spec.ts  # 10 test cases from Jira story AEQ-11 (User SignUp)
│
├── testData/
│   └── userData.json               # Test input data: registration, payment, product
│
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript compiler options
├── package.json                    # Scripts and dependencies
├── .gitignore                      # Excludes node_modules, reports, test-results
└── README.md
Prerequisites
Ensure the following are installed on your machine before getting started:

Node.js v20 or higher — download
npm v9 or higher (bundled with Node.js)
Git — download
Verify your versions:

node --version   # should print v20.x.x or higher
npm --version    # should print 9.x.x or higher
git --version
Installation
1. Clone the repository

git clone https://github.com/AsmaaEissa10/QA_Framework_AI_Automation.git
cd QA_Framework_AI_Automation
2. Install project dependencies

npm ci
Use npm ci (not npm install) to get a reproducible install from package-lock.json.

3. Install Playwright browsers

npx playwright install --with-deps chromium
--with-deps installs the required OS-level system libraries for Chromium. Required on Linux and recommended on all platforms.

Environment Variables
This project does not require any mandatory environment variables for local runs. All configuration is driven by playwright.config.ts and testData/userData.json.

The following variable is set automatically by CI:

Variable	Where set	Purpose
CI	GitHub Actions runner	Enables retries (1) and forbidOnly in Playwright config
If you want to replicate CI behavior locally:

# Windows PowerShell
$env:CI = "true"; npx playwright test

# macOS / Linux
CI=true npx playwright test
Configuration
All Playwright settings live in playwright.config.ts.

Setting	Value	Notes
baseURL	https://automationexercise.com	Applied to all page.goto('/') calls
testDir	./specs	Directory scanned for spec files
timeout	60 000 ms	Per-test timeout
expect.timeout	10 000 ms	Per-assertion timeout
workers	1	Single worker — avoids shared state conflicts on the live site
fullyParallel	false	Tests run sequentially within each spec
retries	1 (CI) / 0 (local)	Automatic retry on CI only
headless	true	Run with --headed flag to watch the browser
screenshot	only-on-failure	Screenshots saved to test-results/ on failure
video	retain-on-failure	Video saved to test-results/ on failure
trace	retain-on-failure	Playwright trace saved for debugging failures
Reporters	list, html, allure-playwright	List in terminal, HTML report, Allure report
Test Data
All test inputs are stored in testData/userData.json and imported directly into spec files via resolveJsonModule.

{
  "registration": {
    "name": "Jane Automation",
    "email": "jane.automation@mailtest.com",
    "password": "SecurePass@123",
    "title": "Mrs",
    "firstName": "Jane",
    "lastName": "Automation",
    "company": "QA Corp",
    "address1": "123 Test Street",
    "address2": "Suite 456",
    "country": "United States",
    "state": "California",
    "city": "Los Angeles",
    "zipcode": "90001",
    "mobileNumber": "5551234567"
  },
  "payment": {
    "nameOnCard": "Jane Automation",
    "cardNumber": "4111111111111111",
    "cvc": "123",
    "expiryMonth": "12",
    "expiryYear": "2027"
  },
  "product": {
    "index": 1,
    "quantity": 1
  }
}
Note: The registration email in userData.json is a base value only. Both spec files generate a unique email at runtime using Date.now() to prevent duplicate account errors on re-runs:

const uniqueEmail = `jane.auto.${Date.now()}@mailtest.com`;
Running Tests
Run all tests (headless)
npm test
# or
npx playwright test
Run all tests in headed mode (watch the browser)
npm run test:headed
# or
npx playwright test --headed
Run a specific spec file
# E2E order flow
npx playwright test specs/e2e_order_flow.spec.ts

# AEQ-11 signup test cases
npx playwright test specs/AEQ-11_user_signup.spec.ts
Run a specific test by title
npx playwright test --grep "TC-01"
Run tests matching a pattern
# All tests containing "Signup"
npx playwright test --grep "Signup"

# All tests from a Jira story
npx playwright test --grep "AEQ-11"
Run with debug mode (Playwright Inspector)
npx playwright test --debug
Run with verbose output
npx playwright test --reporter=list
Simulate CI environment locally
CI=true npx playwright test        # macOS / Linux
$env:CI="true"; npx playwright test  # Windows PowerShell
Reports
Playwright HTML Report
Generated automatically after every run in playwright-report/.

# Open the report in your browser
npm run test:report
# or
npx playwright show-report
Allure Report
Allure results (raw JSON) are written to allure-results/ during the test run by allure-playwright.

Step 1 — Generate the HTML report:

npm run allure:generate
# or
npx allure generate allure-results --clean -o allure-report
Step 2 — Open the report in your browser:

npm run allure:open
# or
npx allure open allure-report
Allure requires Java to be installed locally for the allure-commandline package to generate reports. Download from adoptium.net.

Viewing failure artifacts
On test failure, Playwright automatically saves:

Artifact	Location
Screenshot	test-results/<test-name>/test-failed-1.png
Video	test-results/<test-name>/video.webm
Trace	test-results/<test-name>/trace.zip
Open a trace file:

npx playwright show-trace test-results/<test-name>/trace.zip
CI/CD Pipeline
The pipeline is defined in .github/workflows/playwright.yml and runs on GitHub Actions.

Triggers
Event	Condition
push	Any push to main or develop branch
pull_request	Any PR targeting main
workflow_dispatch	Manual trigger from the GitHub Actions UI
Pipeline Steps
1. Checkout repository
2. Setup Node.js 20 (with npm cache)
3. npm ci  — install dependencies
4. npx playwright install --with-deps chromium  — install browser + OS libs
5. npx playwright test  — run all tests (CI=true)
6. Upload: playwright-html-report artifact
7. Upload: allure-results artifact (raw JSON)
8. npx allure-commandline generate  — build Allure HTML report
9. Upload: allure-html-report artifact (browsable HTML)
Steps 6–9 run with if: always() — artifacts are uploaded even when tests fail.

Downloading artifacts
After a workflow run completes:

Go to the Actions tab
Click the completed workflow run
Scroll to the Artifacts section at the bottom
Download any of the three artifacts:
playwright-html-report
allure-results
allure-html-report
Test Coverage
specs/e2e_order_flow.spec.ts
Full end-to-end regression test covering the complete purchase journey.

Step	Action
1	Open the website homepage and verify it loads
2	Navigate to the Signup / Login page
3	Fill name and email, submit signup form
4	Complete account information form (personal + address details)
5	Verify "Account Created!" confirmation and continue
6	Navigate to the Products page
7	Hover over a product
8	Click to view product detail
9	Set quantity and add product to cart
10	Verify cart contents
11	Proceed to checkout
12	Verify delivery and billing addresses, add order comment
13	Place the order and navigate to payment
14	Fill payment card details and confirm the order
15	Verify "Order Placed!" confirmation message
specs/AEQ-11_user_signup.spec.ts
10 test cases derived from Jira User Story AEQ-11 (User SignUp). Each test is tagged with its Jira key.

Jira Key	Test Case	Type	Priority
AEQ-45	TC-01: Verify Valid Name and Email Input	Positive	High
AEQ-46	TC-02: Verify Required Fields Validation	Negative	High
AEQ-47	TC-03: Verify Email Format Validation	Negative	High
AEQ-48	TC-04: Verify Duplicate Email Prevention	Negative	High
AEQ-49	TC-05: Verify Duplicate Email Error Message	Negative	High
AEQ-50	TC-06: Verify Successful Registration Flow Progression	Positive	High
AEQ-51	TC-07: Verify Signup Button Functionality	Positive	High
AEQ-52	TC-08: Verify Special Characters in Name Field	Positive	Medium
AEQ-53	TC-09: Verify Name Field Length Validation	Boundary	Medium
AEQ-54	TC-10: Verify Email Case-Insensitive Validation	Boundary	Medium
Bugs raised from failures (auto-reported to Jira):

Bug Key	Linked TC	Description
AEQ-55	AEQ-47	System accepts email without TLD (e.g. user@example)
AEQ-56	AEQ-53	No name field length validation — single-char and 100+ char names accepted
AEQ-57	AEQ-54	Email duplicate check is case-sensitive — uppercase bypass possible
Page Objects Reference
All page objects live in pages/ and are accessed through PoManager.

Class	File	Responsibility
PoManager	pages/PoManager.ts	Aggregates all page objects; injected via fixture
HomePage	pages/HomePage.ts	navigate(), verifyHomePageVisible(), clickSignupLogin(), clickProducts(), clickCart()
SignupLoginPage	pages/SignupLoginPage.ts	fillSignupForm(), enterName(), enterEmail(), clickSignupButton(), getDuplicateEmailError()
AccountInfoPage	pages/AccountInfoPage.ts	fillAccountInfo(AccountInfo), verifyEnterAccountInfoVisible()
AccountCreatedPage	pages/AccountCreatedPage.ts	verifyAccountCreated(), clickContinue()
ProductsPage	pages/ProductsPage.ts	verifyProductsPageVisible(), hoverOverProduct(index), viewProduct(index)
ProductDetailPage	pages/ProductDetailPage.ts	verifyProductDetailVisible(), setQuantity(n), addToCart(), viewCart()
CartPage	pages/CartPage.ts	verifyCartPageVisible(), verifyProductInCart(), proceedToCheckout()
CheckoutPage	pages/CheckoutPage.ts	verifyCheckoutPageVisible(), verifyAddressDetails(), addOrderComment(), placeOrder()
PaymentPage	pages/PaymentPage.ts	verifyPaymentPageVisible(), fillPaymentDetails(PaymentInfo), confirmOrder()
OrderConfirmationPage	pages/OrderConfirmationPage.ts	verifyOrderPlaced(), getConfirmationMessage()
Adding New Tests
1. Create a new spec file in specs/

// specs/my_new_feature.spec.ts
import { test, expect } from '../fixtures/testFixtures';

test.describe('Feature Name', () => {
  test('Test title', async ({ poManager }) => {
    const { homePage } = poManager;

    await test.step('Step description', async () => {
      await homePage.navigate();
      // assertions...
    });
  });
});
2. Add a new Page Object if needed

// pages/MyPage.ts
import { Page, expect } from '@playwright/test';

export class MyPage {
  constructor(private page: Page) {}

  async doSomething(): Promise<void> {
    await this.page.locator('#selector').click();
  }
}
3. Register it in PoManager

// pages/PoManager.ts
import { MyPage } from './MyPage';

export class PoManager {
  readonly myPage: MyPage;

  constructor(page: Page) {
    // existing pages...
    this.myPage = new MyPage(page);
  }
}
4. Add test data to testData/userData.json if required

{
  "myFeature": {
    "inputValue": "example"
  }
}
