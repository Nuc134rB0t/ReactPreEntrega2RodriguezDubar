const inventory = [
    {
        id: "1",
        idCategory: "1",
        title: "Taza Super Mario Bros",
        description: "Toma tu café con estilo en esta taza de Super Mario Bros.",
        img: "/media/img/gallery/mug1.jpg",
        price: 9,
        stock: 5
    },
    {
        id: "2",
        idCategory: "1",
        title: "Taza Super Mario Bros y Luigi",
        description: "Disfruta de las aventuras de Mario y Luigi con esta taza.",
        img: "/media/img/gallery/mug2.jpg",
        price: 12,
        stock: 3
    },
    {
        id: "3",
        idCategory: "1",
        title: "Taza Multiverso Mario Bros",
        description: "Reúne a todos los Mario y compañía en tu taza de colección.",
        img: "/media/img/gallery/mug3.jpg",
        price: 7,
        stock: 7
    },
    {
        id: "4",
        idCategory: "2",
        title: "Paraban Super Mario Bros",
        description: "Añade un toque de Mario a tu espacio con este paraban.",
        img: "/media/img/gallery/room1.jpg",
        price: 6,
        stock: 2
    },
    {
        id: "5",
        idCategory: "2",
        title: "Pintura 3D Luigi de Super Mario",
        description: "Decora tu habitación con una pintura 3D de Luigi.",
        img: "/media/img/gallery/room2.jpg",
        price: 8,
        stock: 4
    },
    {
        id: "6",
        idCategory: "2",
        title: "Cuadro de pared Luigi Super Mario",
        description: "Embellece tu hogar con un cuadro de pared de Luigi.",
        img: "/media/img/gallery/room3.jpg",
        price: 14,
        stock: 6
    },
    {
        id: "7",
        idCategory: "3",
        title: "Franela para niños Mario Bros",
        description: "Viste a tus hijos con esta divertida franela de Mario Bros.",
        img: "/media/img/gallery/tshirt1.jpg",
        price: 4,
        stock: 1
    },
    {
        id: "8",
        idCategory: "3",
        title: "Franela adultos Mario Bros",
        description: "Muestra tu amor por Mario con esta franela para adultos.",
        img: "/media/img/gallery/tshirt2.jpg",
        price: 11,
        stock: 5
    },
    {
        id: "9",
        idCategory: "3",
        title: "Franela para bebés Mario Bros",
        description: "Viste a tu bebé con esta linda franela de Mario Bros.",
        img: "/media/img/gallery/tshirt3.jpg",
        price: 10,
        stock: 3
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inventory);
        }, 100)
    })
}

export const getProduct = (idFound) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = inventory.find(prod=> prod.id === idFound);
            resolve(producto);
        }, 100)
    })
}

export const getProductsCategory = (idFound) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productsCategory = inventory.filter(prod => prod.idCategory === idFound);
            resolve(productsCategory);
        }, 100 )
    })
}