
//main Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartUI()



document.querySelectorAll(".add_to_cart_btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let card = btn.closest(".card");
        let quantityInput = card.querySelector(".num_cart")
        let qty = Number(quantityInput.value)

        let product = {

            id: btn.dataset.id,
            name: btn.dataset.name,
            price: Number(btn.dataset.price),
            image: btn.dataset.image,
            qty: qty
        }
        let existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty += qty
        } else {
            cart.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartUI();


        cartSidebar.classList.remove("close-cart");

    })
})

function updateCartUI() {

    let cartItemsContainer = document.getElementById("cartItemsContainer")
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.qty;
        count += item.qty;

        cartItemsContainer.innerHTML += `
<div class="cart-item">
<img   class="item-image" src="${item.image}"  alt="Item image">
<div class="cart-itemContents">

<span class="item">
<p class="itemName">${item.name}</p>
<p class="itemPrice">$${item.price}.00</p>
 <span class="stock itemstock ${item.qty <= 20 ? 'itemExceed' : ''} ">Only 20 left in stock</span>

</span></span>
<div class="second-half">
<span class="qty-control">
<button  class="minus" onclick="changeQty('${item.id}',-1)">-</button>
<span id="quantity">${item.qty}</span>
<button  class="plus" onclick="changeQty('${item.id}',1)">+</button>
</span>

<p class="totalPrice">$${item.price * item.qty}.00</p>
<span class="remove_item">
<button onclick="removeItem('${item.id}' )" >
<img src="./img/extra images/delete.png" alt="delete">
</button> </span>  
</div>

</div>
</div> 
`;


    });
    document.getElementById("estimatedTotal").innerText = `$${total}.00`
    document.getElementById("estimatedTotal--2").innerText = `$${total}.00`

    if (cart.length > 0) {
        document.querySelector(".cartItemsContainer-inside").style.display = "none";

    } else {
        setTimeout(() => {
            document.querySelector(".cartItemsContainer-inside").style.display = "block";
        }, 3000)
    }

    localStorage.setItem("cart", JSON.stringify(cart));

}

function changeQty(id, change) {
    let item = cart.find(i => i.id === id)
    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id)

    } updateCartUI();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}


let checkoutBtn = document.getElementById("checkoutBtn");
let OrdercontainerId = document.getElementById("Order-containerId")
let successContainerId = document.getElementById("successContainerId")
checkoutBtn.addEventListener("click", () => {
    if (cart.length > 0) {
    cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartUI();

        OrdercontainerId.classList.add("Order-container_hide")
        successContainerId.classList.remove("orderContainer_success_hide");

        setTimeout(function () {

            OrdercontainerId.classList.remove("Order-container_hide")
            successContainerId.classList.add("orderContainer_success_hide");





        }, 3000);
    }
});

