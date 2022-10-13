const products = [
    {
        id: '0',
        category: "Nike",
        name: "Dunk Parra",
        price: 110,
        stock: 10,
        img: "/resources/imagenes/zapa1.jpg"
    },
    {
        id: '1',
        category: "Nike",
        name: "Strawberry Cough",
        price: 120,
        stock: 15,
        img: "/resources/imagenes/zapa2.jpg"
    },
    {
        id: '2',
        category: "Nike",
        name: "Cliver",
        price: 110,
        stock: 6,
        img: "/resources/imagenes/zapa3.jpg"
    },
    {
        id: '3',
        category: "Nike",
        name: "Carpet",
        price: 120,
        stock: 8,
        img: "/resources/imagenes/zapa4.jpg"
    },
    {
        id: '4',
        category: "Nike",
        name: "Habibi",
        price: 110,
        stock: 6,
        img: "/resources/imagenes/zapa5.jpg"
    },
    {
        id: '5',
        category: "Nike",
        name: "VX 1000",
        price: 100,
        stock: 7,
        img: "/resources/imagenes/zapa6.jpg"
    },
    {
        id: '6',
        category: "Nike",
        name: "Gulf 58",
        price: 110,
        stock: 10,
        img: "/resources/imagenes/zapa7.jpg"
    },
    {
        id: '7',
        category: "Nike",
        name: "Chicago",
        price: 100,
        stock: 10,
        img: "/resources/imagenes/zapa8.jpg"
    },
    {
        id: '8',
        category: "Nike",
        name: "Instant",
        price: 115,
        stock: 6,
        img: "/resources/imagenes/zapa9.jpg"
    },
    {
        id: '9',
        category: "Jordan",
        name: "J Balvin",
        price: 180,
        stock: 5,
        img: "/resources/imagenes/zapa10.webp"
    },
    {
        id: '10',
        category: "Jordan",
        name: "University Blue",
        price: 185,
        stock: 16,
        img: "/resources/imagenes/zapa11.jpg"
    },
    {
        id: '11',
        category: "Jordan",
        name: "Millitary Black",
        price: 220,
        stock: 15,
        img: "/resources/imagenes/zapa12.webp"
    },
    {
        id: '12',
        category: "Adidas",
        name: "Yeezy 350v2",
        price: 200,
        stock: 26,
        img: "/resources/imagenes/zapa13.webp"
    },
    {
        id: '13',
        category: "Adidas",
        name: "Yeezy 700",
        price: 300,
        stock: 15,
        img: "/resources/imagenes/zapa14.webp"
    },
    {
        id: '14',
        category: "Adidas",
        name: "Forum Bad Bunny",
        price: 160,
        stock: 3,
        img: "/resources/imagenes/zapa15.jpg"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}