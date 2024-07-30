const products = [
{
id: "01",
name: "xiaomi",
description: "",
price: 300,
category: "smartphone",
stock: 20,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNeFAyz8hGevkTiWBWxtc1u-X7IlEffDdtA&s"
},

{
    id: "02",
    name: "apple",
    description: "",
    price: 300,
    category: "ipad",
    stock: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjphYxaQ5zKsigNmMV7xbYymWeXVYV3U4_DA&s"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    });
};

export default getProducts