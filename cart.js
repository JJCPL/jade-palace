// Making empty Cart Array

let cart = [];

// Adding save and load functions for saving and loading the array so it stays after refreshes.

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCart = () => {
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
};

// Adding the event listener for buttons

document.addEventListener("click", (event) => {
  console.log(event.target);

  const button = event.target.closest("button");

  // Mobile Bar and Cart

  if (button && button.classList.contains("open-cart")) {
    document.getElementById("mobile-cart-modal").classList.add("active");
    return;
  }

  if (button && button.classList.contains("close-cart")) {
    document.getElementById("mobile-cart-modal").classList.remove("active");
    return;
  }

  if (event.target.id === "mobile-cart-modal") {
    event.target.classList.remove("active");
  }

  if (!button) return;

  // Clear Button

  if (button.classList.contains("clear")) {
    cart = [];
    renderCart();
    saveCart();
    return;
  }

  const itemId = button.dataset.id;
  if (!itemId) return;

  // Adding to Cart Button

  if (
    button.classList.contains("add-to-cart") ||
    button.classList.contains("set-menu-btn")
  ) {
    let selectedItem;

    if (button.classList.contains("set-menu-btn")) {
      selectedItem = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price),
      };
    } else {
      selectedItem = findItemById(itemId);
      if (!selectedItem) return;
    }

    const existingItem = cart.find((item) => item.id == selectedItem.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...selectedItem, quantity: 1 });
    }

  renderCart();
  saveCart();

  //  For delay pop animation for add to cart button.

  button.classList.add("added-pop");

  setTimeout(() => {
    button.classList.remove("added-pop");
  }, 300);

  const cartElement = document.getElementById("cart");
  cartElement.classList.add("cart-pulse");

  setTimeout(() => {
    cartElement.classList.remove("cart-pulse");
  }, 200);

  return;
  }

  // Add Quantity Button

  if (button.classList.contains("increase")) {
    const existingItem = cart.find((item) => item.id == itemId);
    if (existingItem) {
      existingItem.quantity++;
    }

    renderCart();
    saveCart();
    return;
  }

  // Decreasing Button

  if (button.classList.contains("decrease")) {
    const existingItem = cart.find((item) => item.id == itemId);
    if (existingItem) {
      existingItem.quantity--;

      if (existingItem.quantity <= 0) {
        cart = cart.filter((item) => item.id != itemId);
      }
    }

    renderCart();
    saveCart();
    return;
  }

  // Removing Button

  if (button.classList.contains("remove")) {
    cart = cart.filter((item) => item.id != itemId);

    renderCart();
    saveCart();
    return;
  }
});

const findItemById = (id) => {
  for (let category of menu) {
    const found = category.items.find((item) => item.id == id);
    if (found) return found;
  }

  return null;
};

// Function for rendering everything in cart

const renderCart = () => {
  const cartContainer = document.getElementById("cart");
  const mobileContainer = document.getElementById("mobile-cart-container");

  // Add filler info in cart before any item is selected

  cartContainer.innerHTML = "";
  if (mobileContainer) mobileContainer.innerHTML = "";

  const cartHeader = document.createElement("h2");
  cartHeader.classList.add("cart-header");
  cartHeader.textContent = "Your Order";
  cartContainer.appendChild(cartHeader);

  if (cart.length === 0) {
    const empty = document.createElement("div");
    empty.classList.add("empty-cart");
    empty.innerHTML = `
                  <i class="fa-solid fa-basket-shopping empty-icon"></i>

                  <h3>Currently your cart is empty</h3>

                  <p>Start adding dishes to build your order</p>

                <div class="empty-cart-reminder">
                  <p>Reminder: This menu is a guide to calculate your order total.</p>
                  <p>All orders must be placed by phone or in person at the shop.</p>
                </div>
            `;

    cartContainer.appendChild(empty);

    if (mobileContainer) {
      mobileContainer.appendChild(empty.cloneNode(true));
    }

    const summaries = document.querySelectorAll(".cart-summary");

    summaries.forEach((summary) => {
      summary.textContent = `0 Items • £0.00`;
    });

    return;
  }

  // Create loop when item selected to find correct item and display all info in cart

  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const itemTotal = item.price * item.quantity;

    total += itemTotal;

    cartItem.innerHTML = `
                <div class="cart-info">
                    <span class="cart-name">${item.name}</span>
                    <span class="cart-price">£${itemTotal.toFixed(2)}</span>
                </div>

                <div class="cart-controls">
                    <span class="cart-qty">x${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                    <button class="decrease" data-id="${item.id}">-</button>
                    <button class="remove" data-id="${item.id}">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                `;

    cartContainer.appendChild(cartItem);

    if (mobileContainer) {
      mobileContainer.appendChild(cartItem.cloneNode(true));
    }
  });

  // Make the calculations of order and render the total at the bottom

  const totalCart = document.createElement("div");

  totalCart.classList.add("total-row");

  totalCart.innerHTML = `
            <div class="total">
                <span class="total-label">Order Total</span> £${total.toFixed(2)}
            </div>
            `;

  cartContainer.appendChild(totalCart);

  if (mobileContainer) {
    mobileContainer.appendChild(totalCart.cloneNode(true));
  }

  // Add Clear Order Button

  const clearButton = document.createElement("button");
  clearButton.classList.add("clear");
  clearButton.textContent = "Clear Order";

  cartContainer.append(clearButton);

  if (mobileContainer) {
    mobileContainer.appendChild(clearButton.cloneNode(true));
  }

  const reminder = document.createElement("div");
  reminder.classList.add("cart-end");
  reminder.innerHTML = `
        <span class="cart-reminder">
            This is a calculation of your total.<br>Please call to place your order
        </span>

        <div class="cart-phones">
            <div class="phone-block">
                <span class="phone-label">Main Line</span>
                <a href="tel:01803521888" class="phone-link">01803 521888</a>
            </div>

            <div class="phone-block">
                <span class="phone-label">Second Line</span>
                <a href="tel:01803526688" class="phone-link">01803 526688</a>
            </div>
        </div>
                        `;

  cartContainer.appendChild(reminder);

  if (mobileContainer) {
    mobileContainer.appendChild(reminder.cloneNode(true));
  }

  const summaries = document.querySelectorAll(".cart-summary");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  summaries.forEach((summary) => {
    summary.textContent = `${totalItems} items • £${total.toFixed(2)}`;
  });
};

loadCart();
renderCart();
