let price1 = 70;
let price2 = 100;
let price3 = 80;
let price4 = 120;

const cart = document.getElementById("cart");
const items = cart.querySelectorAll(".item");
const total = cart.querySelector("#total");

items.forEach(item => {
  const plusButton = item.querySelector(".plus-btn");
  const minusButton = item.querySelector(".minus-btn");
  const deleteButton = item.querySelector(".delete-btn");
  const likeButton = item.querySelector(".like-btn");

  plusButton.addEventListener("click", incrementQuantity);
  minusButton.addEventListener("click", decrementQuantity);
  deleteButton.addEventListener("click", deleteItem);
  likeButton.addEventListener("click", toggleLike);
});

function incrementQuantity(event) {
  const button = event.target;
  const item = button.parentNode.parentNode;
  const quantity = item.querySelector(".quantity");
  quantity.value = parseInt(quantity.value) + 1;
  updateTotal();
}

function decrementQuantity(event) {
  const button = event.target;
  const item = button.parentNode.parentNode;
  const quantity = item.querySelector(".quantity");
  if (quantity.value > 0) {
    quantity.value = parseInt(quantity.value) - 1;
  }
  updateTotal();
}

function deleteItem(event) {
  const button = event.target;
  const item = button.parentNode;
  item.classList.add("deleted");
  item.style.display = "none";
  updateTotal();
}

function toggleLike(event) {
  const button = event.target;
  button.classList.toggle("liked");
}

function updateTotal() {
  let totalPrice = 0;
  items.forEach(item => {
    if (!item.classList.contains("deleted")) {
      let price;
      if(item.id === "item1") price = price1;
      else if(item.id === "item2") price = price2;
      else if(item.id === "item3") price = price3;
      else if(item.id === "item4") price = price4;
      const quantity = parseInt(item.querySelector(".quantity").value);
      totalPrice += price * quantity;
    }
  });
  total.innerHTML = `Total: ${totalPrice} TND`;
}

updateTotal();
