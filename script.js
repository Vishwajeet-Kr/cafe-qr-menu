let cart = {};
let total = 0;

function addToCart(itemName, price) {

  if (cart[itemName]) {
    cart[itemName].quantity += 1;
  } else {
    cart[itemName] = {
      price: price,
      quantity: 1
    };
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  total = 0;

  for (let item in cart) {
    const li = document.createElement("li");

    const itemTotal = cart[item].price * cart[item].quantity;
    total += itemTotal;

    li.textContent = `${item} x ${cart[item].quantity} = ₹${itemTotal}`;
    cartList.appendChild(li);
  }

  totalDisplay.textContent = total;
}

// function placeOrder() {

//   const name = document.getElementById("customer-name").value;
//   const table = document.getElementById("table-number").value;

//   if (!name || !table) {
//     alert("Please enter your name and table number");
//     return;
//   }

//   if (Object.keys(cart).length === 0) {
//     alert("Your cart is empty");
//     return;
//   }

//   let itemsSummary = "";

//   for (let item in cart) {
//     itemsSummary += `${item} x ${cart[item].quantity}, `;
//   }

//   alert(
//     `Order Placed!\n\nName: ${name}\nTable: ${table}\nItems: ${itemsSummary}\nTotal: ₹${total}`
//   );

//   // Reset cart after order
//   cart = {};
//   updateCart();
//   document.getElementById("customer-name").value = "";
//   document.getElementById("table-number").value = "";
// }

async function placeOrder() {

  const name = document.getElementById("customer-name").value;
  const table = document.getElementById("table-number").value;

  if (!name || !table) {
    alert("Please enter your name and table number");
    return;
  }

  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty");
    return;
  }

  let itemsArray = [];

  for (let item in cart) {
    itemsArray.push({
      name: item,
      quantity: cart[item].quantity,
      price: cart[item].price
    });
  }

  const orderData = {
    customerName: name,
    tableNumber: table,
    items: itemsArray,
    total: total
  };

  try {
    const response = await fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();

    alert("Order placed successfully!");

    // Reset cart
    cart = {};
    updateCart();
    document.getElementById("customer-name").value = "";
    document.getElementById("table-number").value = "";

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to place order.");
  }
}