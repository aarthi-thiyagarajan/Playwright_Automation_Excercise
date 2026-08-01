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
