let products = [
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg",
        prod_name: "Everherb Karela Jamun Juice-Blood Sugar Management",
        discount: "₹250",
        price: "₹150",
        category: "juice"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-2-1707378524.jpg",
        prod_name: "Pharmeasy Fish Oil Soft Gelatin Capsules",
        discount: "₹450",
        price: "₹300",
        category: "capsules"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg",
        prod_name: "Pharmeasy Pill Box Organizer-weekly organizer",
        discount: "₹250",
        price: "₹200",
        category: "tools"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg",
        prod_name: "Liveasy Foods Healthy Roasted Seed Mix",
        discount: "₹200",
        price: "₹150",
        category: "snacks"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/N70299/everherb-by-pharmeasy-shilajit-500mg-vigour-improvement-strength-stamina-for-men-bottle-of-60-6.1-1689585761.jpg",
        prod_name: "Everherb hilajit -Vigour Improvement",
        discount: "₹500",
        price: "₹450",
        category: "capsules"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/U97974/everherb-giloy-tulsi-juice-strengthens-body-defence-system-natural-immunity-booster-1-litre-2-1680172279.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Everherb Giloy Tulsi Juice-for Body Defence System ",
        discount: "₹200",
        price: "₹150",
        category: "juice"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/E07034/liveasy-wellness-diabetic-protein-blood-sugar-weight-management-french-vanilla-400g-jar-2-1698385317.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Wellness Diabetic Protein",
        discount: "₹600",
        price: "₹550",
        category: "protien"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/H28446/liveasy-ortho-care-cool-eye-mask-provides-relief-to-stressed-dry-eyes-reduces-dark-circles-2-1671742979.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Ortho Care Cool Eye Mask ",
        discount: "₹600",
        price: "₹550",
        category: "tools"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/P31771/liveasy-wellness-mosquito-repellent-cream-with-vitamin-e-and-almond-oil-tube-of-50gm-1-1671743553.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Wellness Mosquito Repellent Cream ",
        discount: "₹100",
        price: "₹50",
        category: "cream"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/C93509/liveasy-essential-pain-relief-balm-45gm-2-1659963202.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Wellness Pain Relief Balm 45gm",
        discount: "₹150",
        price: "₹100",
        category: "cream"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/A65047/liveasy-essentials-bamboo-cotton-buds-80-sticks-160-swabs-1-1705999231.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Essentials Bamboo Cotton Buds",
        discount: "₹100",
        price: "₹70",
        category: "tools"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/H14523/liveasy-wellness-diabetic-protein-powder-chocolate-flavour-400g-2-1671742949.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Wellness Diabetic Protein Powder-Chocolate",
        discount: "₹600",
        price: "₹570",
        category: "protien"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/N65859/liveasy-essentials-cleansing-aloe-vera-refreshing-lime-facial-wipes-20s-2-1697177802.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Essentials Aloe Vera Refreshing Lime Facial Wipes",
        discount: "₹100",
        price: "₹70",
        category: "tools"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/A25289/liveasy-wellness-pain-relief-gel-tube-of-30-g-1-1659962889.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Wellness Pain Relief Gel Tube Of 30 G",
        discount: "₹100",
        price: "₹90",
        category: "cream"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/V36025/liveasy-essentials-nail-cutter-2-1671742475.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Liveasy Essentials Nail Cutter-Hygiene essentials",
        discount: "₹110",
        price: "₹90",
        category: "tools"
    },
    {
        img: "https://cdn01.pharmeasy.in/dam/products_otc/N63105/pharmeasy-hot-water-bag-relieves-pain-relaxes-sore-muscles-improves-blood-supply-red-2l-2-1671777872.jpg?dim=700x0&dpr=1&q=100",
        prod_name: "Pharmeasy Hot Water Bag - Relieves Pain",
        discount: "₹210",
        price: "₹190",
        category: "tools"
    },


]


console.log(products.length)


auth_status = localStorage.getItem("isAuth")

if (auth_status == "Not Authenticated") {
    alert("you need to log in first")
    window.location.href = "index.html"

}

let main_container = document.getElementById("main_container")


function show_products(arr) {
    main_container.innerHTML = ""
    arr.forEach(function (ele, i) {
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

        let add_to_cart_btn = document.createElement("button")
        add_to_cart_btn.innerHTML = "Add to cart"
        add_to_cart_btn.addEventListener("click", function () {
            handleAddToCart(ele)
        })


        product_card.append(prod_img, prod_name, discount, price, add_to_cart_btn)
        main_container.append(product_card)
    })

}



function handleAddToCart(obj) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(obj)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("item added to cart")


}

let search = document.getElementById("search")
let search_btn = document.getElementById("search_btn")

search_btn.addEventListener("click", function () {
    handleSearch()
})

function handleSearch() {
    value = search.value
    results = products.filter(function (ele, i) {
        return ele.category.toLowerCase() === value.toLowerCase()

    })

    show_products(results)
}

show_products(products)
