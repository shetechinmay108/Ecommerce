
document.addEventListener('DOMContentLoaded', () => {
    const cartSummary = document.getElementById('cart-summary');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');
    const totalProducts = document.getElementById('total-products');
  
    const loadCart = () => JSON.parse(localStorage.getItem('cart')) || {};
    const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));
  
    const updateSummary = () => {
        const cart = loadCart();
        cartSummary.innerHTML = '';
        let items = 0, price = 0, products = 0;
  
        for (const [product, { quantity, price: itemPrice }] of Object.entries(cart)) {
            cartSummary.innerHTML += `
                <div class="item">
                    <div class="three">
                        <span>${product}</span>
                    </div>
                    <div class="four">
                        <span id="price">${itemPrice.toFixed(2)}</span>
                        <button id="minus" data-action="minus" data-product="${product}">-</button>
                        <span>${quantity}</span>
                        <button id="pluse" data-action="plus" data-product="${product}">+</button>
                        <button id="remove" data-action="remove" data-product="${product}">Remove</button>
                    </div>
                </div>
            `;
            items += quantity;
            price += itemPrice;
            products++;
        }
  
        totalItems.textContent = items;
        totalPrice.textContent = price.toFixed(2);
        totalProducts.textContent = products;
  
        // Store the totalProducts in localStorage
        localStorage.setItem('totalProducts', products);
    };
  
    const modifyProduct = (product, delta) => {
        const cart = loadCart();
        const item = cart[product];
  
        if (item) {
            item.quantity += delta;
            item.price += (item.price / (item.quantity - delta)) * delta;  // Correct the calculation
  
            if (item.quantity <= 0) delete cart[product];
  
            saveCart(cart);
            updateSummary();
        }
    };
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const { product, price } = button.dataset;
            const cart = loadCart();
  
            if (!cart[product]) cart[product] = { quantity: 0, price: 0 };
            cart[product].quantity++;
            cart[product].price += parseFloat(price);
  
            saveCart(cart);
            updateSummary();
        });
    });
  
    cartSummary.addEventListener('click', e => {
        const { action, product } = e.target.dataset;
        if (action === 'plus') modifyProduct(product, 1);
        else if (action === 'minus') modifyProduct(product, -1);
        else if (action === 'remove') {
            const cart = loadCart();
            delete cart[product];
            saveCart(cart);
            updateSummary();
        }
    });
  
    updateSummary();
});

function goToCheck(){
    window.location.href="../payment.html"
  }
  function goToSubscribe() {
    window.location.href = "../Subscribe.html";
  }  