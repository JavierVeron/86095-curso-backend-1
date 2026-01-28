const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

//console.log(objetos);

/* Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values) */

//console.log(Object.keys(objetos[0]));
/* let claves1 = Object.keys(objetos[0]);
let claves2 = Object.keys(objetos[1]);

claves1.forEach(item => {
    arrayProductos.push(item);
})

claves2.forEach(item => {
    arrayProductos.push(item);
}) */

const arrayProductos = [];
let total = 0;

objetos.forEach(item => { // 2 iteraciones
    Object.keys(item).forEach(item2 => { // Obtener las "claves" del objeto
        if (!arrayProductos.includes(item2)) {
            arrayProductos.push(item2);
        }
    })

    Object.values(item).forEach(item2 => { // Obtener los valores del objeto
        total += item2;
    })
})

console.log(arrayProductos);
console.log("Total", total);