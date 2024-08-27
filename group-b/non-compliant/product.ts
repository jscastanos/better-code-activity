class ProductService {
    addToCart(productName: string, price: number): void {
        // Code to add the product to the cart
        console.log(`Product added to cart: ${productName} - $${price}`);
    }

    calculateDiscount(price: number, discount: number): number {
        // Code to calculate the discounted price
        return price - (price * discount) / 100;
    }

    proceedCheckout(productName: string, price: number, discount: number): void {
        const discountedPrice = this.calculateDiscount(price, discount);
        console.log(`Proceeding to checkout:\nProduct: ${productName}\nOriginal Price: $${price}\nDiscounted Price: $${discountedPrice}`);
    }
}

// Usage
const productService = new ProductService();
productService.addToCart("Laptop", 1000);
const discountedPrice = productService.calculateDiscount(1000, 10);
console.log(`Discounted Price: $${discountedPrice}`);
productService.proceedCheckout("Laptop", 1000, 10);
