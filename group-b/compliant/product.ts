// Abstractions
interface CartService {
  addToCart(productName: string, price: number): void;
}

interface DiscountCalculator {
  calculateDiscount(price: number, discount: number): number;
}

interface CheckoutProcessor {
  proceedCheckout(productName: string, price: number, discount: number): void;
}

// Concrete implementations
class SimpleCartService implements CartService {
  addToCart(productName: string, price: number): void {
    console.log(`Product added to cart: ${productName} - $${price}`);
  }
}

class SimpleDiscountCalculator implements DiscountCalculator {
  calculateDiscount(price: number, discount: number): number {
    return price - (price * discount) / 100;
  }
}

class SimpleCheckoutProcessor implements CheckoutProcessor {
  private discountCalculator: DiscountCalculator;
  private cartService: CartService;

  constructor(
    discountCalculator: DiscountCalculator,
    cartService: CartService
  ) {
    this.discountCalculator = discountCalculator;
    this.cartService = cartService;
  }

  proceedCheckout(productName: string, price: number, discount: number): void {
    this.cartService.addToCart(productName, price);
    const discountedPrice = this.discountCalculator.calculateDiscount(
      price,
      discount
    );
    console.log(
      `Proceeding to checkout:\nProduct: ${productName}\nOriginal Price: $${price}\nDiscounted Price: $${discountedPrice}`
    );
  }
}

// Usage
const cartService = new SimpleCartService();
const discountCalculator = new SimpleDiscountCalculator();
const checkoutProcessor = new SimpleCheckoutProcessor(
  discountCalculator,
  cartService
);

checkoutProcessor.proceedCheckout('Laptop', 1000, 10);
