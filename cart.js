// cart open and close

let cart_btn = document.getElementById("cart_btn");
let close_btn = document.getElementById("close_btn");
let cartSidebar = document.getElementById("cartSidebar");

close_btn.addEventListener("click", function () {
    cartSidebar.classList.add("close-cart");
        document.body.style.overflow = "auto";

});

cart_btn.addEventListener("click", function (e) {

    console.log("open clicked");
    cartSidebar.classList.remove("close-cart");
        document.body.style.overflow = "hidden";

});


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
<div class="item-content">
<p class="itemName">${item.name}</p>
<p class="itemPrice">$${item.price}.00</p>

<span class="qty-control">
<button  class="minus" onclick="changeQty('${item.id}',-1)">-</button>
<span id="quantity">${item.qty}</span>
<button  class="plus" onclick="changeQty('${item.id}',1)">+</button>
</span>
<span class="stock itemstock ${item.qty <= 20 ? 'itemExceed' : ''} ">Only 20 left in stock</span>
</div>

<div class="item-total_delete">
<button onclick="removeItem('${item.id}' )"class="remove_item">
<img src="./img/extra images/delete.png" alt="delete">
</button>   
<p class="total">$${item.price * item.qty}.00</p>
</div>
</div> 
`;


    });
    document.getElementById("items").innerText = count;
    document.getElementById("estimatedTotal").innerText = `$${total}.00`

    if (cart.length > 0) {
        document.querySelector(".cartItemsContainer-inside").style.display = "none";
        document.querySelector(".cart_footer").style.display = "block";

    } else {
        document.querySelector(".cartItemsContainer-inside").style.display = "block";
        document.querySelector(".cart_footer").style.display = "none";
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
let cart_footer = document.querySelector(".cart_footer")
let productOrderId = document.getElementById("productOrder-id")
let cart_footerContentId = document.getElementById("cart_footerContent-id")


// checkoutBtn.addEventListener("click", () => {
//     if (cart.length > 0) {

//         cart_footerContentId.classList.add("cart_footer_content-hide");
//         document.getElementById("cartItemsContainer").style.visibility = "hidden";
//         productOrderId.classList.remove("productOrder-hide");

//         setTimeout(function () {
//             productOrderId.classList.add("productOrder-hide");

//             document.getElementById("cartItemsContainer").style.visibility = "visible";

//             cart = [];
//             localStorage.setItem("cart", JSON.stringify(cart));

//             updateCartUI();

//             cart_footerContentId.classList.remove("cart_footer_content-hide");
//         }, 7000);
//     }
// });

checkoutBtn.addEventListener("click", () => {

    if (cart.length > 0) {

        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();


        document.querySelector(".cartItemsContainer-inside").style.display = "none";

        cart_footerContentId.classList.add("cart_footer_content-hide");
        document.getElementById("cartItemsContainer").style.visibility = "hidden";
        productOrderId.classList.remove("productOrder-hide");

        setTimeout(function () {

            productOrderId.classList.add("productOrder-hide");

            document.querySelector(".cartItemsContainer-inside").style.display = "block";

            document.getElementById("cartItemsContainer").style.visibility = "visible";
            cart_footerContentId.classList.remove("cart_footer_content-hide");

        }, 4000);
    }
});


