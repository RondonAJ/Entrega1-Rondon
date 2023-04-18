const products = [
    {
        id: '1',
        name: 'Whiskas',
        price: 9300,
        category: 'comida',
        img: '/img/whiskas.png',
        stock: 25,
        description: 'Alimento para gatos, contiene 3 kg'
    },
    {
        id: '2',
        name: 'Dispensador de agua',
        price: 19300,
        category: 'accesorio',
        img: '/img/dispensador.png',
        stock: 20,
        description: 'Dispensador de agua para gatos, contiene 3 kg'
    },
    {
        id: '3',
        name: 'Pescado Interactivo',
        price: 12900,
        category: 'juguete',
        img: '/img/pez.png',
        stock: 5,
        description: 'Pescado interactivo para gatos'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}