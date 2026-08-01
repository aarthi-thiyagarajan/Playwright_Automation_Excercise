import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { SignupLoginPage } from './SignupLoginPage';
import { AccountInfoPage } from './AccountInfoPage';
import { AccountCreatedPage } from './AccountCreatedPage';
import { ProductsPage } from './ProductsPage';
import { ProductDetailPage } from './ProductDetailPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { PaymentPage } from './PaymentPage';
import { OrderConfirmationPage } from './OrderConfirmationPage';

export class PoManager {
  readonly homePage: HomePage;
  readonly signupLoginPage: SignupLoginPage;
  readonly accountInfoPage: AccountInfoPage;
  readonly accountCreatedPage: AccountCreatedPage;
  readonly productsPage: ProductsPage;
  readonly productDetailPage: ProductDetailPage;
  readonly cartPage: CartPage;
  readonly checkoutPage: CheckoutPage;
  readonly paymentPage: PaymentPage;
  readonly orderConfirmationPage: OrderConfirmationPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.signupLoginPage = new SignupLoginPage(page);
    this.accountInfoPage = new AccountInfoPage(page);
    this.accountCreatedPage = new AccountCreatedPage(page);
    this.productsPage = new ProductsPage(page);
    this.productDetailPage = new ProductDetailPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.paymentPage = new PaymentPage(page);
    this.orderConfirmationPage = new OrderConfirmationPage(page);
  }
}
