const products = [
  { name: 'Laptop', price: 1500 },
  { name: 'Phone', price: 700 },
  { name: 'Tablet', price: 300 },
  { name: 'Monitor', price: 200 }
];

// 1. Filter products with price > 500
// 2. Map to extract the prices
// 3. Reduce to find the total
const totalExpensiveProducts = products
  .filter(product => product.price > 500)
  .map(product => product.price)
  .reduce((acc, price) => acc + price, 0);

console.log(totalExpensiveProducts); // 2200

