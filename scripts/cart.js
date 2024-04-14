back_to_home_btn = document.querySelector("#emptycart>button")

back_to_home_btn.addEventListener("click", function () {
    window.location.href = "index.html"
})

// Check if there are products in the cart



let cart_products = JSON.parse(localStorage.getItem("cart"))

cart_products.forEach(function (ele, i) {
    // console.log(ele)
    let product_card = document.createElement("div")
    product_card.setAttribute("class", "product_card")

    let prod_img = document.createElement("img")
    prod_img.src = ele.img

    let prod_name = document.createElement("p")
    prod_name.innerHTML = `${ele.prod_name}`

    let discount = document.createElement("p")
    discount.innerHTML = `MRP <del>${ele.discount}</del>`

    let price = document.createElement("p")
    price.innerHTML = `${ele.price}`

    let remove_from_cart_btn = document.createElement("button");
    remove_from_cart_btn.innerHTML = "Remove from cart"; // Change button text
    remove_from_cart_btn.addEventListener("click", function () {
        handleRemoveFromCart(ele); // Call function to remove from cart
        product_card.remove(); // Remove the product card from UI
        if (cart_products.length === 0) {
            document.getElementById("emptycart").style.display = "block"; // Show empty cart div if cart is empty
        }
    });



    product_card.append(prod_img, prod_name, discount, price, remove_from_cart_btn)
    main_container.append(product_card)
})


function handleRemoveFromCart(product) {
    let updated_cart_products = cart_products.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updated_cart_products));
}

if (cart_products.length > 0) {
    document.getElementById("emptycart").style.display = "none"; // Hide empty cart div
} else {
    document.getElementById("emptycart").style.display = "block"; // Show empty cart div
}