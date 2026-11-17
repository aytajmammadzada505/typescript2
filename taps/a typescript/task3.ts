interface Product {
    readonly id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 2000,
    inStock: true
};

product.price = 3000;

console.log(product);
