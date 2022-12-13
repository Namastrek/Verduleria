const productos = [
    {nombre: "manzana", precio: 200},
    {nombre: "pera", precio: 150},
    {nombre: "naranja", precio: 120},
    {nombre: "banana", precio: 180},
]

let carrito = []

let seleccion = prompt("¿Qué tal?, ¿Desea comprar algo?").toLowerCase()

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese que si o no")
    seleccion = prompt("¿Qué tal?, ¿Desea comprar algo?")
}

if(seleccion === "si"){
    alert("Estos son nuestros productos")
    let losProductos = productos.map((producto) => ` ${producto.nombre} ${producto.precio} $`)
    alert(losProductos.join(" - "))
}else if(seleccion === "no"){
    alert("Gracias por venir, que vuelva pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("Agregá tu producto al carrito")
    let precio = 0
    if(producto === "manzana" || producto === "pera" || producto === "naranja" || producto === "banana"){
        switch(producto){
            case "manzana":
                precio = 200
                break
            case "pera":
                precio = 150
                break
            case "naranja":
                precio = 120
                break
            case "banana":
                precio = 180
                break
            default:
                break
        }
        let unidades = parseInt(prompt("¿Cuántas unidades va a llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("No tenemos ese producto")
    }
    seleccion = prompt("¿Desea seguir comprando?")
    while(seleccion === "no"){
        carrito.forEach((carritoFinal) => {
           alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: $${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break
    }
}

const total = carrito.reduce((acu, e) => acu + e.precio * e.unidades, 0)
alert(`El total a pagar por su compra es: $${total}`)