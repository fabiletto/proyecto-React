const products = [
    {
   id:'1',
   name:'moschino',
   price: 1300,
   category:'perfume',
   img:'https://i.pinimg.com/564x/4d/00/c5/4d00c5cb7f17e579b2e5ec3a70a98da0.jpg',
   stock:30,
   description:'Descripcion de moschino'
    },
    {id: '2', name: 'versace', price: 1000, category: 'perfume', img: 'https://i.pinimg.com/564x/8e/0e/75/8e0e75303bc62fe59abc9076e5780798.jpg', stock: 40, description: 'Descripcion de versace'},
    {id: '3', name: 'acqua di Gio', price: 1200, category: 'perfume', img: 'https://i.pinimg.com/564x/6e/0d/a5/6e0da59b6725329c919f2b9c27ba8488.jpg', stock: 40, description: 'Descripcion de acqua di Gio' }
]
export const getProducts = ()  => {
    return new Promise((resolve)  => {
       setTimeout(()  => {
      resolve(products)
       },500)
    })
}
export const getProductById = (productId) =>{
   return new Promise((resolve) => {
    setTimeout(( ) => {
        resolve(products.find(prod =>prod.id === productId))
    },500)
   })
}