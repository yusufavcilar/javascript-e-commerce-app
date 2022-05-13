const shopMenu = document.querySelector(".shop-menu")
const cart = document.querySelector('.cart')
const cartMenu = document.querySelector(".cart-menu")
const clearBtn = document.querySelector(".clear-btn")

const products = [{
        id: 1,
        name: "Refrigator",
        description: "Samsung RT46K6000S8 No-Frost ",
        image: "./assets/refrigator.jpeg",
        price: 8799,
        priceUnit: 'TL'
    },
    {
        id: 2,
        name: "Household Appliances",
        description: "Philips PowerPro Compact FC9323/07 Süpürge",
        image: "./assets/süpürge.jpeg",
        price: 1299,
        priceUnit: 'TL'
    },
    {
        id: 3,
        name: "Phone",
        description: "Huawei P50 Pro 256 GB",
        image: "./assets/huawei.jpeg",
        price: 18799,
        priceUnit: 'TL'

    },
    {
        id: 4,
        name: "Household Appliances",
        description: "İpek Mobilya",
        image: "./assets/koltuk.jpeg",
        price: 2399,
        priceUnit: 'TL'

    }, {
        id: 5,
        name: "Clothes",
        description: "Black Steel 9175 Modelli Fermuarlı Eşortman",
        image: "./assets/eşortman.jpeg",
        price: 399,
        priceUnit: 'TL'

    }, {
        id: 6,
        name: "PC",
        description: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13",
        image: "./assets/macbook.jpeg",
        price: 15799,
        priceUnit: 'TL'

    }, {
        id: 7,
        name: "Phone",
        description: "Xiaomi Mi 11T 256 GB 8 GB Ram ",
        image: "./assets/xiaomi.jpeg",
        price: 10799,
        priceUnit: 'TL'
    }, {
        id: 8,
        name: "Refrigator",
        description: "Profilo BD2043WFNN 328 Lt No-Frost ",
        image: "./assets/profilo.jpeg",
        price: 5799,
        priceUnit: 'TL'

    }, {
        id: 9,
        name: "Phone",
        description: "Samsung Galaxy S21 5G 128 GB",
        image: "./assets/samsung s21.jpeg",
        price: 9799,
        priceUnit: 'TL'

    },
    {
        id: 10,
        name: "PC",
        description: "Monster Tulpar T7 V25.1.2 Intel Core I7 11800H 16GB 1TB",
        image: "./assets/monster.jpeg",
        price: 28799,
        priceUnit: 'TL'
    },
    {
        id: 11,
        name: "Clothes",
        description: "Adidas Superstar",
        image: "./assets/adidas.jpeg",
        price: 6499,
        priceUnit: 'TL'
    },
    {
        id: 12,
        name: "Phone",
        description: "İphone 13 Pro Max",
        image: "./assets/iphone13.jpeg",
        price: 28799,
        priceUnit: 'TL'

    },
    {
        id: 13,
        name: "Refrigator",
        description: "Bosch KGN86AID1N No-Frost",
        image: "./assets/bosch.jpeg",
        price: 12799,
        priceUnit: 'TL'
    },
    {
        id: 14,
        name: "Household Appliances",
        description: "Philips GC5037/80 Azur Elite Buharlı Ütü",
        image: "./assets/ütü.jpeg",
        price: 1699,
        priceUnit: 'TL'
    },
    {
        id: 15,
        name: "Phone",
        description: "İphone 11",
        image: "./assets/iphone11.jpeg",
        price: 12799,
        priceUnit: 'TL',
        categoryID: 1

    },
];

const categories = [{
    id: 1,
    name: "Mobile Phone"
}]

let basket = JSON.parse(localStorage.getItem('cart')) || [];


function shopItems() {
    shopMenu.innerHTML = ""
    products.forEach(item => {
        shopMenu.innerHTML += `
         <div class="shop-menu__item" data-id="${item.id}">
            <img width="75" height="75" src="${item.image}" alt="${item.name}">
            <div class="shop-menu__information">
                <h2 class="shop-menu__text">${item.description}</h2>
                <p class="shop-menu__price">${item.price} ${item.priceUnit}</p>
                <button class="shop-menu__button">Add To Basket</button>
            </div>
        </div>`
    })

    const addToBasketButtons = document.querySelectorAll('.shop-menu__button');

    addToBasketButtons.forEach((btn) => {
        btn.addEventListener('click', addToBasketClickHandler)

    })
}

shopItems()

function addToBasketClickHandler(event) {
    const target = event.target.parentElement.parentElement;
    const productID = Number(target.getAttribute('data-id'));
    const product = products.find((product) => product.id === productID);
    basket.push(product);
    localStorage.setItem('cart', JSON.stringify(basket));
    cart.setAttribute('data-products', basket.length);
}