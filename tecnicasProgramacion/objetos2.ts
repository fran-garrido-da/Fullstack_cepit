// import * as rlSync from "readline-sync"

// const alienware = {
//     nombre: "Alienware",
//     precio: 2000000,
//     stock: 2
// }
// //Object.keys() retorna un array de las keys del objeto
// //Uso: acceder o iterar sobre las keys del objeto
// const keys = Object.keys(alienware)
// console.log(keys)

// //Object.values() retorna un array del valor de las keys
// //Uso: acceder a los valores sin las keys
// const values = Object.values(alienware)
// console.log(values)

// //Object.entries() retorna matriz key x value
// //Uso: iterar sobre keys y values al mismo tiempo
// const entries = Object.entries(alienware)
// console.log(entries)

// //Destructuring : Extrae valores y los asigna a variables
// //key:(nombre nuevo de la variable) = le pones un nuevo nombre a la variable, sin cambiar el valor qie viene de la key
// const {nombre, precio, stock:cantidad} = alienware
// console.log("destructuring " + nombre, precio, cantidad)

// //Metodos de arrays
// const productos = ["Laptop ASUS", "Teclado Cougar", "Mouse Genius", "SSD 10tb"]

// //Destructuring de array
// //para omitir un index, lo pones vacio, ej: [laptop,teclado, ,disco]
// const [laptop,teclado,mouse,disco] = productos
// console.log(laptop,teclado,mouse,disco)

// //forEach()
// // Ejecuta una funcion para cada elemento de un array
// // No devuelve un nuevo array, sino lo que contenga la funcion
// // No modifica el array original
// productos.forEach(producto => {
//     console.log(producto)
// })

// //map() retorna un array nuevo, con los resultados de aplicar una funcion a cada item del array original
// //No modifica el original
// //Uso: transformar los elementos de un array
// const precios = [100,150,200,250,300,350,400,450,1000]
// const descuentos = precios.map(precio => (precio -= precio * 0.20))
// console.log(descuentos)

// const frutas = ["manzana", "pera", "uva", "naranja", "papaya"]
// const frutasMayus = frutas.map(fruta => fruta.toUpperCase())
// console.log(frutasMayus)

// //filter()
// //retorna un nuevo array, elementos que cumplen con una condicion
// //filtra elementos si cumplen un criterio

// const stock = [
//     {nombre: "Zapatillas Nike",precio: 105000},
//     {nombre: "Zapatillas Adibas",precio: 5000},
//     {nombre: "Zapatillas Topper",precio: 20000},
//     {nombre: "Zapatillas Lecock",precio: 50000}
// ]
// const filtered = stock.filter(item =>(item.precio <= 20000))
// const antiFiltered = stock.filter(item =>!(item.precio <= 20000))
// console.log(filtered)

// //find()
// //retorna el primer elemento que cumpla con una condicion
// //si no encuentra, retorna undefined
// const itemFound = stock.find(item => item.nombre === "Zapatillas Topper")
// console.log(itemFound)

// //includes() busca dentro de un string, un substring que cumpla con la busqueda
// const item =stock.find(item => item.nombre.includes("Nike",10))
// console.log(item)

// //reduce()
// //Aplica una funcion a un acum ulador
// //Acumulador tiene el rol de guardar el resultado de operaciones
// //Uso: ideal para sumar, concatenar o calculos acumulativos sobre arrays
// const precios2 = [10,15,20,30,50]
// const resultadoAcc = precios2.reduce((acc,precio) => acc+precio,0)
// console.log(resultadoAcc)

interface Producto {
  //tipado de producto
  nombre: string;
  precio: number;
  stock: number;
}
interface Tienda {
  //tipado de la tienda
  productos: Producto[]; // array de productos
  crearProducto: (
    nombreProducto: string,
    precio: number,
    stock: number
  ) => void; //metodo para crear producto nuevo
  actualizarPrecio: (nombreProducto: string, nuevoPrecio: number) => void; // metodo para actualizar el precio de un producto
  venderProducto: (nombreProducto: string, cantidad: number) => void; // metodo para vender un producto
  productosEnOferta:(precioMaximo:number) => void
  mostarInventario:() => void
  valorTotalInventario:() => void
}
const tienda: Tienda = {
  productos: [
    { nombre: "laptop", precio: 900, stock: 7 },
    { nombre: "mouse", precio: 50, stock: 16 },
    { nombre: "keyboard", precio: 60, stock: 20 },
    { nombre: "hdd", precio: 70, stock: 15 },
    { nombre: "ssd", precio: 100, stock: 9 },
    { nombre: "nvme", precio: 150, stock: 8 },
    { nombre: "graphicscard", precio: 500, stock: 5 },
    { nombre: "cpu", precio: 300, stock: 12 },
    { nombre: "motherboard", precio: 150, stock: 10 },
  ],
  crearProducto(nombreProducto, precio, stock): void {
    const nuevoProducto = {
      //Crea una const de tipo Producto, con los datos parametrizados en el metodo
      nombre: nombreProducto.toLowerCase().trim(),
      precio,
      stock,
    };
    if (nuevoProducto) {
      //valida si  existe nuevoProducto
      this.productos.push(nuevoProducto); //pushea el nuevoProducto a productos dentro del objeto
      console.log(`Producto ${nombreProducto} añadido`); //muestra en pantalla
    }
  },
  actualizarPrecio(nombre, precioNuevo) {
    let productoEncontrado = this.productos.find(
      (producto) => producto.nombre === nombre.toLowerCase().trim()
    ); //busca entre los productos el que valide el nombre, transformado a lowercase y sin espacios
    if (productoEncontrado) {
      let precioViejo = productoEncontrado.precio; //guarda el precio original
      productoEncontrado.precio = precioNuevo; //cambia el precio por el precio nuevo
      console.log(
        `Producto ${nombre} actualizado de $${precioViejo} => $${precioNuevo}`
      ); //muestra los cambios
    } else {
      console.log(`Producto ${nombre} no encontrado`); //muestra de error de encontrado
    }
  },
  venderProducto(nombreProducto, cantidad) {
    let productoEncontrado = this.productos.find(
      (producto) => producto.nombre === nombreProducto.toLowerCase().trim()
    );
    if (productoEncontrado) {
      if (cantidad >= 1) {
        let stockViejo = productoEncontrado.stock;
        if (stockViejo >= cantidad) {
          //valida si hay stock para realizar la venta segun la cantidad a vender
          productoEncontrado.stock = stockViejo - cantidad; //resta en el stock la cantidad vendida
          console.log(
            `${cantidad} ${nombreProducto} vendidos, ${productoEncontrado.stock} en stock`
          );
        } else {
          console.log(`Producto ${nombreProducto} sin stock para esa compra`);
        }
      } else {
        console.log("volve a intentar");
      }
    } else {
      console.log(`Producto ${nombreProducto} no encontrado`);
    }
  },
  productosEnOferta(precioMaximo:number){
    const filtered = this.productos.filter(item =>(item.precio <= precioMaximo))
    console.log(filtered)
  },
  mostarInventario(){
    const keys = Object.keys(tienda.productos)
    keys.forEach((key) => console.log(`${this.productos[Number(key)].nombre}: ${this.productos[Number(key)].precio}`))
  },
  valorTotalInventario(){
    const values:Producto[]= Object.values(this.productos)
    let resultAcc = values.reduce((acc,precio)=> acc+precio.precio*precio.stock,0)
    console.log(resultAcc)
  }
};

// console.log(tienda.productos);
// tienda.crearProducto("i7", 320, 3);
// tienda.actualizarPrecio("HdD", 65);
// tienda.venderProducto("laptop", 3);
// tienda.productosEnOferta(-1);
//console.log(tienda.productos);
//tienda.mostarInventario();
//tienda.valorTotalInventario();