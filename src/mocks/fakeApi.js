export const products = [
    {id:'01', marca:'random01', modelo:'random01', img:"fakeProducts/imagen-001.jpg", price: 13.83,  subtitle: "sarasa", stock: 3,  description: "detalle de la card numero 01"},
    {id:'02', marca:'random02', modelo:'random02', img:"fakeProducts/imagen-002.jpg", price: 11.22,  subtitle: "sarasa", stock: 5,  description: "detalle de la card numero 02"},
    {id:'03', marca:'random03', modelo:'random03', img:"fakeProducts/imagen-003.jpg", price: 115.02,  subtitle: "sarasa", stock: 7,  description: "detalle de la card numero 03"},
    {id:'04', marca:'random04', modelo:'random04', img:"fakeProducts/imagen-004.jpg", price: 31.28,  subtitle: "sarasa", stock: 9,  description: "detalle de la card numero 04"},
    {id:'05', marca:'random05', modelo:'random05', img:"fakeProducts/imagen-005.jpg", price: 15.01,  subtitle: "sarasa", stock: 0,  description: "detalle de la card numero 05"},
    {id:'06', marca:'random06', modelo:'random06', img:"fakeProducts/imagen-006.jpg", price: 90.63,  subtitle: "sarasa", stock: 1,  description: "detalle de la card numero 06"}
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

