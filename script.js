
const menu = {

  "PYAALI-E-SUKOON": [
    { name: "Masale Wali Chai", price: 30 },
    { name: "Elaichi Wali Chai", price: 30 },
    { name: "Adrak Wali Chai", price: 30 },
    { name: "Kullhad Wali Chai", price: 30 },
    { name: "Hajmola Wali Chai", price: 30 },
    { name: "Coffee Wali Chai", price: 30 },
    { name: "Gud Wali Chai", price: 30 },
    { name: "Sugarfree Wali Chai", price: 40 }
  ],

  "RASILI BLENDS": [
    { name: "Oreo Shake", price: 99 },
    { name: "Masala Cold Drink", price: 40 },
    { name: "Cold Coffee", price: 89 },
    { name: "Cold Coffee With Ice-cream", price: 99 },
    { name: "Lassi", price: 59 },
    { name: "Buttermilk", price: 30 },
    { name: "Lime Soda", price: 40 },
    { name: "Masala Soda", price: 49 }
  ],

  "BREWED SUKOON": [
    { name: "Black Coffee", price: 79 },
    { name: "Coffee", price: 69 },
    { name: "Hot Chocolate", price: 99 }
  ],

  "THANDAAA DIL": [
    { name: "Chocolate Ice-cream", price: 59 },
    { name: "Vanilla Ice-cream", price: 59 },
    { name: "Butterscotch", price: 59 }
  ],

  "GUILT FREE CORNER": [
    { name: "Protein Bowl", price: 149 },
    { name: "Chana Chat Salad", price: 129 },
    { name: "Yogurt Chat Salad", price: 129 },
    { name: "Paneer Tikka", price: 199 },
    { name: "Masala Rava Idli", price: 79 },
    { name: "Omelette Bread", price: 79 },
    { name: "Masala Oats", price: 99 },
    { name: "Sprouts", price: 69 },
    { name: "Protein Shake", price: 99 },
    { name: "Banana Protein Shake", price: 129 }
  ],

  "TENDERED AND TEMPERED": [
    { name: "Chicken Pops", price: 89 },
    { name: "Fried Chicken", price: 129 },
    { name: "Chicken Nuggets", price: 119 },
    { name: "Chicken And Cheese Nuggets", price: 139 },
    { name: "Chicken Burger", price: 129 },
    { name: "Crispy Chicken Burger", price: 159 },
    { name: "Chicken Hotdog", price: 89 },
    { name: "Spicy And Crispy Chicken Wings", price: 159 }
  ],

  "SIMPLY EGGS": [
    { name: "Boiled Eggs", price: 49 },
    { name: "Egg Pakora", price: 69 },
    { name: "Egg Fry", price: 89 },
    { name: "Scrambled Eggs", price: 79 }
  ],

  "LAYERED COMFORT": [
    { name: "Veg Burger", price: 79 },
    { name: "Cheese Burger", price: 99 },
    { name: "Chef Special Burger", price: 129 }
  ],

  "COZY CRUNCH": [
    { name: "Salted Fries", price: 79 },
    { name: "Peri Peri Fries", price: 99 },
    { name: "Cheesy Fries", price: 129 },
    { name: "Crispy Corn", price: 69 },
    { name: "Crispy Corn Chaat", price: 89 },
    { name: "Chana Papdi", price: 59 },
    { name: "Nachos Bowl", price: 129 }
  ],

  "2 MINUTE WALI KHUSHIYAAN": [
    { name: "Plain Maggie", price: 49 },
    { name: "Veg Maggie", price: 69 },
    { name: "Garlic Maggie", price: 69 },
    { name: "Cheesy Maggie", price: 79 }
  ],

  "2 BREAD EK KAHANI": [
    { name: "Veg Sandwich", price: 79 },
    { name: "Cheese Sandwich", price: 79 },
    { name: "Cheese And Corn Sandwich", price: 99 },
    { name: "Masala Sandwich", price: 69 },
    { name: "Chocolate Sandwich", price: 99 },
    { name: "Peanut Butter Banana Sandwich", price: 99 },
    { name: "Chef Special Sandwich", price: 129 },
    { name: "Cold Sandwich", price: 79 },
    { name: "Customization Availale at just", price: 25 }
  ],

  "CRAFTED SLICES": [
  { name: "Classic Pizza", price: 69 },
  { name: "Corn Pizza", price: 89 },
  { name: "Veg Loaded", price: 149 },
  {
    name: "TOP IT UP",
    isAddonSection: true,
    addons: [
      { name: "Onion", price: 25 },
      { name: "Capsicum", price: 25 },
      { name: "Paneer", price: 50 },
      { name: "Jalapeno", price: 40 },
      { name: "Chicken", price: 50 },
      { name: "Cheese Burst", price: 50 }
    ]
  }
],

  "CHEESY COMFORT": [
    { name: "Bread Roll", price: 59 },
    { name: "Paneer Hotdog", price: 75 },
    { name: "Cheese Chilli Toast", price: 99 },
    { name: "Garlic Bread", price: 99 },
    { name: "Pizza Pockets", price: 129 },
    { name: "Cheese & Paneer Pocket", price: 100 },
    { name: "White Sauce Pasta", price: 199 },
    { name: "Red Sauce Pasta", price: 199 },
    { name: "Mix Sauce Pasta", price: 199 },
    { name: "Cheese And Corn Nuggets", price: 129 }
  ]

};

let cart = {};
let total = 0;

/* Render Menu */
function renderMenu() {
  const container = document.getElementById("menu-container");

  for (let section in menu) {

    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";

    const title = document.createElement("h2");
    title.textContent = section;
    sectionDiv.appendChild(title);

    const divider = document.createElement("div");
    divider.className = "divider";
    sectionDiv.appendChild(divider);

    menu[section].forEach(item => {

      // Handle Addon Section
      if (item.isAddonSection) {

        const addonTitle = document.createElement("h3");
        addonTitle.textContent = item.name;
        addonTitle.className = "addon-title";
        sectionDiv.appendChild(addonTitle);

        item.addons.forEach(addon => {
          const addonDiv = document.createElement("div");
          addonDiv.className = "menu-item";

          addonDiv.innerHTML = `
            <div class="item-info">
              <strong>${addon.name}</strong>
              <span>+ ₹${addon.price}</span>
            </div>
            <button onclick="addToCart('${addon.name}', ${addon.price})">Add</button>
          `;

          sectionDiv.appendChild(addonDiv);
        });

        return;
      }

      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      itemDiv.innerHTML = `
        <div class="item-info">
          <strong>${item.name}</strong>
          <span>₹${item.price}</span>
          ${item.note ? `<small class="note">${item.note}</small>` : ""}
        </div>
        <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
      `;

      sectionDiv.appendChild(itemDiv);
    });

    container.appendChild(sectionDiv);
  }
}

renderMenu();

/* Cart Functions */
function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price, quantity: 1 };
  }
  updateCart();
}

function decreaseItem(name) {
  if (cart[name].quantity > 1) {
    cart[name].quantity -= 1;
  } else {
    delete cart[name];
  }
  updateCart();
}

function removeItem(name) {
  delete cart[name];
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  total = 0;

  for (let item in cart) {
    const li = document.createElement("li");
    const itemTotal = cart[item].price * cart[item].quantity;
    total += itemTotal;

    const label = document.createElement("span");
    label.textContent = `${item} x ${cart[item].quantity} = ₹${itemTotal}`;

    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.type = "button";
    decreaseBtn.onclick = () => decreaseItem(item);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.type = "button";
    removeBtn.onclick = () => removeItem(item);

    li.appendChild(label);
    li.appendChild(decreaseBtn);
    li.appendChild(removeBtn);
    list.appendChild(li);
  }

  document.getElementById("total").textContent = total;
}

/* Place Order */
async function placeOrder() {
  const name = document.getElementById("customer-name").value;
  const table = document.getElementById("table-number").value;
  const instructions = document.getElementById("order-instructions").value.trim();

  if (!name || !table) {
    alert("Enter Name & Table Number");
    return;
  }

  const itemsArray = Object.keys(cart).map(item => ({
    name: item,
    quantity: cart[item].quantity,
    price: cart[item].price
  }));

  const payload = {
    customerName: name,
    tableNumber: table,
    items: itemsArray,
    total
  };
  if (instructions) payload.instructions = instructions;

  try {
    await fetch("/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    alert("Order placed successfully!");

    cart = {};
    updateCart();
    document.getElementById("customer-name").value = "";
    document.getElementById("table-number").value = "";
    document.getElementById("order-instructions").value = "";

  } catch {
    alert("Failed to place order.");
  }
}