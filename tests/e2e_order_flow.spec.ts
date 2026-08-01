import { test, expect } from '../fixtures/pom-fixtures';
import userData from '../testData/userData.json';

const { registration, payment, product } = userData;

test.describe('E2E Order Flow', () => {
  test('User can register, browse products, and complete an order', async ({ poManager }) => {
    const {
      homePage,
      signupLoginPage,
      accountInfoPage,
      accountCreatedPage,
      productsPage,
      productDetailPage,
      cartPage,
      checkoutPage,
      paymentPage,
      orderConfirmationPage,
    } = poManager;

    // Generate unique email to avoid duplicate account errors
    const uniqueEmail = `jane.auto.${Date.now()}@mailtest.com`;

    await test.step('Open the website homepage', async () => {
      await homePage.navigate();
      await homePage.verifyHomePageVisible();
    });

    await test.step('Navigate to the Signup / Login page', async () => {
      await homePage.clickSignupLogin();
      await signupLoginPage.verifySignupFormVisible();
    });

    await test.step('Fill in user name and email, then submit signup form', async () => {
      await signupLoginPage.fillSignupForm(registration.name, uniqueEmail);
    });

    await test.step('Enter personal and address information, then create account', async () => {
      await accountInfoPage.verifyEnterAccountInfoVisible();
      await accountInfoPage.fillAccountInfo({
        title: registration.title,
        password: registration.password,
        firstName: registration.firstName,
        lastName: registration.lastName,
        company: registration.company,
        address1: registration.address1,
        address2: registration.address2,
        country: registration.country,
        state: registration.state,
        city: registration.city,
        zipcode: registration.zipcode,
        mobileNumber: registration.mobileNumber,
      });
    });

    await test.step('Verify account was created and continue', async () => {
      await accountCreatedPage.verifyAccountCreated();
      await accountCreatedPage.clickContinue();
    });

    await test.step('Navigate to the Products page', async () => {
      await homePage.clickProducts();
      await productsPage.verifyProductsPageVisible();
    });

    await test.step('Hover over a product to simulate user activity', async () => {
      await productsPage.hoverOverProduct(product.index);
    });

    await test.step('Click on the product to view its details', async () => {
      await productsPage.viewProduct(product.index);
      await productDetailPage.verifyProductDetailVisible();
    });

    await test.step('Set quantity and add product to cart', async () => {
      await productDetailPage.setQuantity(product.quantity);
      await productDetailPage.addToCart();
      await productDetailPage.viewCart();
    });

    await test.step('Verify cart contains the product', async () => {
      await cartPage.verifyCartPageVisible();
      await cartPage.verifyProductInCart();
    });

    await test.step('Proceed to checkout', async () => {
      await cartPage.proceedToCheckout();
      await checkoutPage.verifyCheckoutPageVisible();
    });

    await test.step('Verify delivery and billing address, then add order comment', async () => {
      await checkoutPage.verifyAddressDetails();
      await checkoutPage.addOrderComment('Please deliver between 9am and 5pm.');
    });

    await test.step('Place the order', async () => {
      await checkoutPage.placeOrder();
      await paymentPage.verifyPaymentPageVisible();
    });

    await test.step('Fill in payment details and confirm the order', async () => {
      await paymentPage.fillPaymentDetails({
        nameOnCard: payment.nameOnCard,
        cardNumber: payment.cardNumber,
        cvc: payment.cvc,
        expiryMonth: payment.expiryMonth,
        expiryYear: payment.expiryYear,
      });
      await paymentPage.confirmOrder();
    });

    await test.step('Verify order confirmation is displayed', async () => {
      await orderConfirmationPage.verifyOrderPlaced();
    });
  });
});
