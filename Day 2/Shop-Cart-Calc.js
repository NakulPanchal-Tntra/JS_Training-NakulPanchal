const products = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.map((item) => ({
      ...item,
      quantity: 0, // add quantity field to each product
    }))
  )
  .catch((err) => console.error("Error fetching products:", err));

const cart = [];
let totalPrice = 0;
let cart_total = document.getElementById("total");
let priceDiscount_div = document.getElementById("PriceDiscount");
let itemDiscount_div = document.getElementById("ItemDiscount");
let newPrice_div = document.getElementById("newPrice");

//Product list display on html ul tag with image and add cart button
//the add
async function list(listId) {
  const data = await products;
  const productList = document.getElementById(listId);
  data.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}" width="50" height="50"/>
      <span>${item.title} | $${item.price}</span>
      <button onclick="(async () => { await addToCart(${item.id}); await getTotal(); })()">Add to Cart</button>
    `;
    productList.appendChild(liElement);
  });
}

// add to cart function with quantity
async function addToCart(productId) {
  const data = await products;
  const product = data.find((item) => item.id === productId);
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
    totalPrice += product.price;
  } else {
    product.quantity = 1;
    cart.push(product);
    totalPrice += product.price;
  }
  await CartList("CartList");
}

//Cart list display on Html ul tag with quantity and image
async function CartList(cartlistid) {
  const cartList = document.getElementById(cartlistid);
  cartList.innerHTML = " ";
  cart.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}" width="50" height="50"/>
      <span>${item.title} | $${item.price} | Quantity: ${item.quantity}</span>
    `;
    cartList.appendChild(liElement);
  });
}

//total of the cart products
async function getTotal() {
  let itemDiscount = 0;
  let priceDiscount = 0;
  let newPrice = totalPrice;
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalItems > 10) {
    itemDiscount = newPrice * 0.1;
    newPrice -= itemDiscount;
  }
  if (totalPrice > 500) {
    priceDiscount = newPrice * 0.05;
    newPrice -= priceDiscount;
  }
  cart_total.innerText = `Total : $${totalPrice.toFixed(2)}`;
  priceDiscount_div.innerText = `Price Discount : $${priceDiscount.toFixed(2)}`;
  itemDiscount_div.innerText = `Item Discount : $${itemDiscount.toFixed(2)}`;
  newPrice_div.innerText = `New Price : $${newPrice.toFixed(2)}`;
}

//10% discount above the 10 items and 5% discount above 500 total

list("ProductList");
CartList("CartList");
