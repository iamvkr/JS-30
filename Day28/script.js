const products_view = document.getElementById("products_view");
const cart_view = document.getElementById("cart_view");
const cart_length_view = document.getElementById("cart_length_view");
const nav_add_cart_btn = document.getElementById("nav_add_cart_btn");
const close_cart_page_btn = document.querySelector(".close_cart_page_btn");
const close_order_page_btn = document.querySelector(".close_order_page_btn");
const order_form = document.querySelector("#order-form");
let products = [];
let cart = [];
console.log(cart);
let isCartPageVisible = false;

window.onload = () => {
    fetch("./products.json")
        .then(res => res.json())
        .then(data => {
            products = data;
            displayProducts();
        })
}

function displayProducts() {
    let s = ""
    products.forEach(item => {
        s += `<div class="product-card border border-slate-600 rounded-md shadow-md px-2">
                <div class="product_image">
                    <img src="${item.images}"
                    class="h-28 md:h-40 w-full object-contain object-center"
                    alt="thimbnail">
                </div>
                <div class="product_title text-sm font-bold h-8">${item.title}</div>
                <div class="product_price text-sm mt-2">Rs. ${item.price}</div>
                <div class="product_description text-xs text-nowrap text-ellipsis overflow-hidden">
                ${item.description} ` +
            /** item.description.length > 40 ? item.description.substring(0,40)+"..." : item.description */
            `</div>
                <button class="add_cart_btn w-full border border-slate-600 rounded-md py-1 my-2 hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:bg-transparent disabled:text-gray-400"
                name="add_cart_btn_${item.id}">Add to cart</button>
            </div>`
    });
    products_view.innerHTML = s;

    document.querySelectorAll(".add_cart_btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.name.split("_")[3];
            // disable that btn:
            e.target.disabled = true;
            addToCart(id);
        })
    })
}


function addToCart(id) {
    // alert(id)
    // get the object whose id is equal to recieved id:
    const objArr = products.filter((product) => product.id == id)
    cart.push({ ...objArr[0], qty: 1 })
    // update the cart value on ui:
    cart_length_view.innerText = cart.length;
    console.log(cart);
    // update cart view page on ui
    displayCartItems()
}

nav_add_cart_btn.addEventListener("click", () => {
    // make cart page visible:
    showElement(document.querySelector(".cart_page"))
    // hide products page:
    hideElement(document.querySelector(".products_page"))
})

close_cart_page_btn.addEventListener("click", () => {
    // make products page visible:
    showElement(document.querySelector(".products_page"))
    // hide cart page:
    hideElement(document.querySelector(".cart_page"))
})

close_order_page_btn.addEventListener("click", () => {
    // make products page visible:
    showElement(document.querySelector(".cart_page"))
    // hide cart page:
    hideElement(document.querySelector(".order_page"))
})



function displayCartItems() {
    let s = ""
    cart.forEach((cartitem, indx) => {
        s += `<div class="cart_item bg-gray-200  w-full md:w-2/3 mx-auto mb-2">
                    <div class="flex w-full">
                        <div class="image w-[20%] bg-gray-600">
                            <img src="${cartitem.images}"
                             class="h-28 w-full object-contain object-center" alt="Thumb">
                        </div>
                        <div class="details flex justify-evenly w-[80%] items-center">
                            <div class="title text-sm w-[40%]">${cartitem.title} @ Rs. ${cartitem.price}</div>
                            <div class="qty flex gap-x-2 items-center">
                                <div class="border rounded-md border-black px-2 py-1" ><button class="decrease_cart_btn" name="dec_cart_btn_${indx}">-</button></div>
                                <div class=""><button>${cartitem.qty}</button></div>
                                <div class="border rounded-md border-black px-2 py-1" ><button class="increase_cart_btn" name="inc_cart_btn_${indx}">+</button></div>
                            </div>
                            <div class="qty">Rs. ${cartitem.price * cartitem.qty}</div>
                        </div>
                    </div>
                </div>`
    });
    cart_view.innerHTML = s;
    cart_view.innerHTML += `
    <div class="cart_item bg-gray-200  w-full md:w-2/3 mx-auto mb-2">
        <div class="flex w-full justify-end gap-x-2">
            <h5>Total</h5>
            <h5 id="total_amt_cart_page">${cart.map((elem) => (elem.price * elem.qty)).reduce((prev, curr) => { return (prev + curr) }, 0)}</h5>
        </div>
    </div>
    <div class="cart_item bg-gray-200  w-full md:w-2/3 mx-auto mb-2">
        <div class="flex w-full justify-center gap-x-2">
                <button class="checkout_cart_btn w-1/2 border border-slate-600 rounded-md py-1 my-2 hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:bg-transparent disabled:text-gray-400"
                name="checkout_cart_btn">Checkout</button>
        </div>
    </div>`;

    // add event to above checkout_cart_btn
    document.querySelector(".checkout_cart_btn").addEventListener("click", () => {
        // make order page visible:
        showElement(document.querySelector(".order_page"))
        // hide cart page page:
        hideElement(document.querySelector(".cart_page"))

        // update amt in checkout page
        document.getElementById("total_amt_order_page").innerText = document.getElementById("total_amt_cart_page").innerText;
    })


    // map the buttons:
    document.querySelectorAll(".increase_cart_btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const idx = e.target.name.split("_")[3];
            increaseItemInCart(idx)
        })
    });
    document.querySelectorAll(".decrease_cart_btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const idx = e.target.name.split("_")[3];
            decreaseItemInCart(idx)
        })
    });
}

function increaseItemInCart(idx) {
    // just increase the qty field of that cart item using the index
    cart[idx].qty += 1;
    // update the cart view page on ui:
    displayCartItems();
}
function decreaseItemInCart(idx) {
    // decrease the qty field of that cart item using the index
    // but check if there's only 1 qty, if so, then delete from cart else decrease qty:
    if (cart[idx].qty === 1) {
        if (window.confirm("Are You sure to Remove this item?")) {
            // find id of product:
            const i = cart[idx].id;
            // enable the add to cart btn in product view page:
            const btns = document.querySelectorAll(".add_cart_btn ");
            btns[i - 1].disabled = false;
            // actual deletion
            cart.splice(idx, 1);
            // update cart on navbar view
            cart_length_view.innerText = cart.length;
        }
    } else {
        cart[idx].qty -= 1;
    }
    // update the cart view page on ui:
    displayCartItems();
}


// order:
order_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Order placed Successfully!!")
})

// utility fucntion:
function showElement(elem) {
    elem.classList.remove("hidden")
}
function hideElement(elem) {
    elem.classList.add("hidden")
}