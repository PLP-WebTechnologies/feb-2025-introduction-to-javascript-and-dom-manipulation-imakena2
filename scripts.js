
let cart = [];

const addToCartButtons = document.querySelectorAll('button');


function addToCart(productName, productPrice) {
  const product = {
    name: productName,
    price: productPrice
  };
  
  cart.push(product);
  alert(`${productName} added to cart!`);
  console.log(cart);
}


addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.previousElementSibling.previousElementSibling.textContent;
    const productPrice = e.target.previousElementSibling.textContent;
    

    addToCart(productName, productPrice);
  });
});
