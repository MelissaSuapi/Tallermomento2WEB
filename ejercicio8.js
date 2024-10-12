const productos = [
    {nombre: 'Laptop', categoria: 'tecnologia', precio: 1000},
    {nombre: 'Smartphone', categoria: 'tecnologia', precio: 600},
    {nombre: 'camisa', categoria: 'ropa', precio: 30},
    {nombre: 'teclado', categoria: 'tecnologia', precio: 50},
    {nombre: 'zapatillas', categoria: 'ropa', precio: 80},
]

const categoriaTecnologia = productos.filter(productos => productos.categoria === 'tecnologia');
console.log("productos de la categoria tecnologia:", categoriaTecnologia);


const productosConDescuento = categoriaTecnologia.map(producto => {
    const descuento = producto.precio * 0.1;
    return {...producto, precio: producto.precio - descuento};
});

console.log(productosConDescuento);