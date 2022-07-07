export const products = [
    {id:'01', marca:'Marca01', category: 'cat01', modelo:'Modelo01', img:"fakeProducts/imagen-001.jpg", price: 13.83,  subtitle: "sarasa", stock: 3,  description: "detalle de la card numero 01"},
    {id:'02', marca:'Marca02', category: 'cat01', modelo:'Modelo02', img:"fakeProducts/imagen-002.jpg", price: 11.22,  subtitle: "sarasa", stock: 5,  description: "detalle de la card numero 02"},
    {id:'03', marca:'Marca03', category: 'cat02', modelo:'Modelo03', img:"fakeProducts/imagen-003.jpg", price: 115.02,  subtitle: "sarasa", stock: 7,  description: "detalle de la card numero 03"},
    {id:'04', marca:'Marca04', category: 'cat02', modelo:'Modelo04', img:"fakeProducts/imagen-004.jpg", price: 31.28,  subtitle: "sarasa", stock: 9,  description: "detalle de la card numero 04"},
    {id:'05', marca:'Marca05', category: 'cat03', modelo:'Modelo05', img:"fakeProducts/imagen-005.jpg", price: 15.01,  subtitle: "sarasa", stock: 0,  description: "detalle de la card numero 05"},
    {id:'06', marca:'Marca06', category: 'cat03', modelo:'Modelo06', img:"fakeProducts/imagen-006.jpg", price: 90.63,  subtitle: "sarasa", stock: 1,  description: "detalle de la card numero 06"},
    {id:'07', marca:'Marca07', category: 'cat04', modelo:'Modelo07', img:"fakeProducts/imagen-007.jpg", price: 90.63,  subtitle: "sarasa", stock: 4,  description: "detalle de la card numero 07"},
    {id:'08', marca:'Marca08', category: 'cat04', modelo:'Modelo08', img:"fakeProducts/imagen-008.jpg", price: 90.63,  subtitle: "sarasa", stock: 8,  description: "detalle de la card numero 08"}
]

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(products)
        }else{
            reject('salio mal:(')
        }
    }, 3000)
})

export const getProds = (categoryId) =>{
    return new Promise((resolve, reject) =>{
        const productsFiltrados = products.filter(
            prod => prod.category === categoryId)
        setTimeout(()=>{
            categoryId
            ?resolve(productsFiltrados)
            :resolve(products);
        }, 1000)
    })
}

export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = products.find(
            (prod) => prod.id === id)
        setTimeout(() => {
            resolve(productoEncontrado);
        },1000);
    })
}