//LOCAL DE COMPONENTES HARDWARE PHP

//En un nuevo local de computacion, entra el primer cargamento de mercaderia, se desea saber el stock total, el precio y la cantidad de cada producto que ingreso, luego se desea guardar en el deposito 4 de cada uno y dejar el resto a la venta
// y luego crear un mini-sistema que permita a las buscar el componente que quiere y saber los detalles, stock marca y precio o si prefiere ver todo, tambien pueda hacerlo.

class stockVenta{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    guardadoDeMercaderia (){
        this.cantidad -= 4
    }
    colocadoMercaderiaEnVenta (){
        this.cantidad -= 6
    }
}

const gabinete = new stockVenta ("Gabinete Aorus", 70000, 10);
const mouse1 = new stockVenta ("Mouse Razer", 30000, 10);
// const mouse2 = new stockVenta ("mouse logitech", 20000, 10);
const pad1 = new stockVenta ("Pad Logitech", 10000, 10);
// const pad2 = new stockVenta ("Pad Red Dragon", 8000, 10);
const auriculares1 = new stockVenta ("Auricular HyperX", 95000, 10);
// const auriculares2 = new stockVenta ("Auricular Noganet", 30000, 10);

class stockDeposito{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const mercaderiaDeposito = [];

function guardarMercaderia (){
    mercaderiaDeposito.push(new stockDeposito("Gabinete Aorus", 70000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Mouse Razer", 30000, 4));
    // mercaderiaDeposito.push(new stockDeposito ("mouse logitech", 20000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Pad Logitech", 10000, 4));
    // mercaderiaDeposito.push(new stockDeposito ("Pad Red Dragon", 8000, 4));
    mercaderiaDeposito.push(new stockDeposito ("Auricular HyperX", 95000, 4));
    // mercaderiaDeposito.push(new stockDeposito ("Auricular Noganet", 30000, 4));
    gabinete.guardadoDeMercaderia();
    mouse1.guardadoDeMercaderia();
    // mouse2.guardadoDeMercaderia();
    pad1.guardadoDeMercaderia();
    // pad2.guardadoDeMercaderia();
    auriculares1.guardadoDeMercaderia();
    // auriculares2.guardadoDeMercaderia();
}

guardarMercaderia();

const mercaderiaVenta = [];

function ponerMercaderiaEnVenta (){
    mercaderiaVenta.push(new stockVenta("Gabinete Aorus", 70000, 6));
    mercaderiaVenta.push(new stockVenta ("Mouse Razer", 30000, 6));
    // mercaderiaVenta.push(new stockVenta ("mouse logitech", 20000, 6));
    mercaderiaVenta.push(new stockVenta ("Pad Logitech", 10000, 6));
    // mercaderiaVenta.push(new stockVenta ("Pad Red Dragon", 8000, 6));
    mercaderiaVenta.push(new stockVenta ("Auricular HyperX", 95000, 6));
    // mercaderiaVenta.push(new stockVenta ("Auricular Noganet", 30000, 6));
    gabinete.colocadoMercaderiaEnVenta();
    mouse1.colocadoMercaderiaEnVenta();
    // mouse2.colocadoMercaderiaEnVenta();
    pad1.colocadoMercaderiaEnVenta();
    // pad2.colocadoMercaderiaEnVenta();
    auriculares1.colocadoMercaderiaEnVenta();
    // auriculares2.colocadoMercaderiaEnVenta();
}

ponerMercaderiaEnVenta();

alert ("Bienvenido a PHP Hardware");

let usuario = prompt("Ingrese su Nombre")

alert (`excelente ${usuario} ahora por favor ingrese lo que esta buscando`);

let mercaderia = prompt("Gabinete - Mouse - Pad - Auricular - Toda la mercaderia (escriba TODO)");

if (mercaderia === "gabinete" || mercaderia == "Gabinete" || mercaderia == "gabinetes" || mercaderia == "Gabinetes"){

    const encontrar = mercaderiaVenta.find ((producto) => producto.nombre === "Gabinete Aorus"); 

        document.write(`<b>Nombre:</b> ${encontrar.nombre} <br>`);
        document.write(`<b>Precio: </b>   ${encontrar.precio}  <br>`);
        document.write(`<b>Cantidad:</b>  ${encontrar.cantidad} <br><br>`);

    }

else if (mercaderia === "mouse" || mercaderia == "Mouse") {

    const encontrar = mercaderiaVenta.find ((producto) => producto.nombre === "Mouse Razer" );

    document.write(`<b>Nombre:</b> ${encontrar.nombre} <br>`);
    document.write(`<b>Precio: </b>   ${encontrar.precio}  <br>`);
    document.write(`<b>Cantidad:</b>  ${encontrar.cantidad} <br><br>`);

}
else if (mercaderia === "pad" || mercaderia == "Pad" || mercaderia === "pads" || mercaderia == "Pads") {

    const encontrar = mercaderiaVenta.find ((producto) => producto.nombre === "Pad Logitech" );

    document.write(`<b>Nombre:</b> ${encontrar.nombre} <br>`);
    document.write(`<b>Precio: </b>   ${encontrar.precio}  <br>`);
    document.write(`<b>Cantidad:</b>  ${encontrar.cantidad} <br><br>`);

}
else if (mercaderia === "auricular" || mercaderia == "auriculares" || mercaderia === "Auricular" || mercaderia == "Auriculares") {

    const encontrar = mercaderiaVenta.find ((producto) => producto.nombre === "Auricular HyperX" );

    document.write(`<b>Nombre:</b> ${encontrar.nombre} <br>`);
    document.write(`<b>Precio: </b>   ${encontrar.precio}  <br>`);
    document.write(`<b>Cantidad:</b>  ${encontrar.cantidad} <br><br>`);

}

else if (mercaderia === "todo" || mercaderia == "Todo" || mercaderia === "TODO" || mercaderia === "toda" || mercaderia === "todas" || mercaderia === "TODAS") {

    document.write("<b>MERCADERIA EN VENTA</b> <br><br>");
    mercaderiaVenta.forEach (productos1 => { 
    document.write("<b>Nombre:</b>  " + productos1["nombre"] + "<br>");
    document.write("<b>Precio: </b>  " + productos1["precio"] + "<br>");
    document.write("<b>Cantidad:</b>  " + productos1["cantidad"] + "<br><br>");

    })
}





