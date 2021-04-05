class Productos {
    constructor(nombre, prenda, precio, id, stock) {
        this.nombre = nombre,
        this.prenda = prenda,
        this.precio = precio,
        this.id = id
        this.stock = stock
    }
    venta(cantidadVenta) {
        this.stock = this.stock - cantidadVenta;
    }
}

let camisa1 = new Productos('Blue Tribu', 'camisa', 2100, 1, 25);
let camisa2 = new Productos('Blue Marley', 'camisa', 2500, 2, 30);
let camisa3 = new Productos('Yellow Submarine', 'camisa', 1950, 3, 25);
let camisa4 = new Productos('Dylan', 'camisa', 2225, 4, 2);
let camisa5 = new Productos('Malibu', 'camisa', 2675, 5, 10);
let camisa6 = new Productos('Milo', 'camisa', 2250, 6, 5);
let camisa7 = new Productos('New Hans', 'camisa', 2700, 7, 4);
let camisa8 = new Productos('Red Maui', 'camisa', 2340, 8, 36);

const baseCamisas = [];
baseCamisas.push(camisa1);
baseCamisas.push(camisa2);
baseCamisas.push(camisa3);
baseCamisas.push(camisa4);
baseCamisas.push(camisa5);
baseCamisas.push(camisa6);
baseCamisas.push(camisa7);
baseCamisas.push(camisa8);

let remera1 = new Productos('Koi', 'remera', 1750, 1, 10);
let remera2 = new Productos('Mostaza', 'remera', 1600, 2, 2);
let remera3 = new Productos('Bordo', 'remera', 1600, 3, 30);
let remera4 = new Productos('Verde Agua', 'remera', 1600, 4, 10);

const baseRemeras = [];
baseRemeras.push(remera1);
baseRemeras.push(remera2);
baseRemeras.push(remera3);
baseRemeras.push(remera4);

let short1 = new Productos('Hans', 'short', 2150, 1, 22);
let short2 = new Productos('Jail', 'short', 2200, 2, 17);
let short3 = new Productos('Pierre', 'short', 2000, 3, 11);
let short4 = new Productos('Rick', 'short', 2350, 4, 3);

const baseShorts = [];
baseShorts.push(short1);
baseShorts.push(short2);
baseShorts.push(short3);
baseShorts.push(short4);

const nombresProductosCarrito = [];

$('#btn-usuario').on('click', function () {
    let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioGuardado) {
        $('#btn-usuario').text(`Bienvenido, ${usuarioGuardado.nombre}`);
    } else {
        let username = prompt('Elija un nombre de usuario');
        let contraseña = prompt('Elija su contraseña');
        usuarioNuevo = {
            nombre: username,
            password: contraseña
        }
        let usuarioNuevoJSON = JSON.stringify(usuarioNuevo);
        localStorage.setItem('usuario', usuarioNuevoJSON);
        $('#btn-usuario').text(`Bienvenido, ${usuarioNuevo.nombre}`);
    }
});

let inputsCamisas = $('.stock-camisas');
let c = 0;
for (let input1 of inputsCamisas) {
    let stockCam = baseCamisas[c].stock;
    input1.setAttribute('max', `${stockCam}`);
    c++;
}

let inputsRemeras = $('.stock-remeras');
let r = 0;
for (let input2 of inputsRemeras) {
    let stockRem = baseRemeras[r].stock;
    input2.setAttribute('max', `${stockRem}`);
    r++;
}

let inputsShorts = $('.stock-shorts');
let s = 0;
for (let input3 of inputsShorts) {
    let stockShort = baseShorts[s].stock;
    input3.setAttribute('max', `${stockShort}`);
    s++;
}

let d = /\d+/;
let compraTotal = 0;

$("#btn-btribu").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-btribu").val());
    if(cantidad >= 1) {
        let precio = $("#btribu-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[0].venta(cantidad);
        $("#cant-btribu").val("");
        $("#cant-btribu").attr("max", `${baseCamisas[0].stock}`);
        if (baseCamisas[0].stock < 1) {
            $("#cant-btribu").remove();
            $("#btn-btribu").remove();
            $("#span-btribu").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[0].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-btribu").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-bmarley").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-bmarley").val());
    if(cantidad >= 1) {
        let precio = $("#bmarley-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[1].venta(cantidad);
        $("#cant-bmarley").val("");
        $("#cant-bmarley").attr("max", `${baseCamisas[1].stock}`);
        if (baseCamisas[1].stock < 1) {
            $("#cant-bmarley").remove();
            $("#btn-bmarley").remove();
            $("#span-bmarley").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[1].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-bmarley").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-ysubmarine").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-ysubmarine").val());
    if(cantidad >= 1) {
        let precio = $("#ysubmarine-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[2].venta(cantidad);
        $("#cant-ysubmarine").val("");
        $("#cant-ysubmarine").attr("max", `${baseCamisas[2].stock}`);
        if (baseCamisas[2].stock < 1) {
            $("#cant-ysubmarine").remove();
            $("#btn-ysubmarine").remove();
            $("#span-ysubmarine").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[2].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-ysubmarine").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-dylan").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-dylan").val());
    if(cantidad >= 1) {
        let precio = $("#dylan-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[3].venta(cantidad);
        $("#cant-dylan").val("");
        $("#cant-dylan").attr("max", `${baseCamisas[3].stock}`);
        if (baseCamisas[3].stock < 1) {
            $("#cant-dylan").remove();
            $("#btn-dylan").remove();
            $("#span-dylan").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[3].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-dylan").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-malibu").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-malibu").val());
    if(cantidad >= 1) {
        let precio = $("#malibu-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[4].venta(cantidad);
        $("#cant-malibu").val("");
        $("#cant-malibu").attr("max", `${baseCamisas[4].stock}`);
        if (baseCamisas[4].stock < 1) {
            $("#cant-malibu").remove();
            $("#btn-malibu").remove();
            $("#span-malibu").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[4].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-malibu").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-milo").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-milo").val());
    if(cantidad >= 1) {
        let precio = $("#milo-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[5].venta(cantidad);
        $("#cant-milo").val("");
        $("#cant-milo").attr("max", `${baseCamisas[5].stock}`);
        if (baseCamisas[5].stock < 1) {
            $("#cant-milo").remove();
            $("#btn-milo").remove();
            $("#span-milo").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[5].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-milo").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-nhans").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-nhans").val());
    if(cantidad >= 1) {
        let precio = $("#nhans-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[6].venta(cantidad);
        $("#cant-nhans").val("");
        $("#cant-nhans").attr("max", `${baseCamisas[6].stock}`);
        if (baseCamisas[6].stock < 1) {
            $("#cant-nhans").remove();
            $("#btn-nhans").remove();
            $("#span-nhans").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[6].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-nhans").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-rmaui").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-rmaui").val());
    if(cantidad >= 1) {
        let precio = $("#rmaui-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseCamisas[7].venta(cantidad);
        $("#cant-rmaui").val("");
        $("#cant-rmaui").attr("max", `${baseCamisas[7].stock}`);
        if (baseCamisas[7].stock < 1) {
            $("#cant-rmaui").remove();
            $("#btn-rmaui").remove();
            $("#span-rmaui").text("Sin Stock!");
        }
        let nombreProducto = baseCamisas[7].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-rmaui").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-koi").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-koi").val());
    if(cantidad >= 1) {
        let precio = $("#koi-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseRemeras[0].venta(cantidad);
        $("#cant-koi").val("");
        $("#cant-koi").attr("max", `${baseRemeras[0].stock}`);
        if (baseRemeras[0].stock < 1) {
            $("#cant-koi").remove();
            $("#btn-koi").remove();
            $("#span-koi").text("Sin Stock!");
        }
        let nombreProducto = baseRemeras[0].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-koi").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-mostaza").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-mostaza").val());
    if(cantidad >= 1) {
        let precio = $("#mostaza-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseRemeras[1].venta(cantidad);
        $("#cant-mostaza").val("");
        $("#cant-mostaza").attr("max", `${baseRemeras[1].stock}`);
        if (baseRemeras[1].stock < 1) {
            $("#cant-mostaza").remove();
            $("#btn-mostaza").remove();
            $("#span-mostaza").text("Sin Stock!");
        }
        let nombreProducto = baseRemeras[1].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-mostaza").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-bordo").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-bordo").val());
    if(cantidad >= 1) {
        let precio = $("#bordo-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseRemeras[2].venta(cantidad);
        $("#cant-bordo").val("");
        $("#cant-bordo").attr("max", `${baseRemeras[2].stock}`);
        if (baseRemeras[2].stock < 1) {
            $("#cant-bordo").remove();
            $("#btn-bordo").remove();
            $("#span-bordo").text("Sin Stock!");
        }
        let nombreProducto = baseRemeras[2].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-bordo").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-verdeagua").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-verdeagua").val());
    if(cantidad >= 1) {
        let precio = $("#verdeagua-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseRemeras[3].venta(cantidad);
        $("#cant-verdeagua").val("");
        $("#cant-verdeagua").attr("max", `${baseRemeras[3].stock}`);
        if (baseRemeras[3].stock < 1) {
            $("#cant-verdeagua").remove();
            $("#btn-verdeagua").remove();
            $("#span-verdeagua").text("Sin Stock!");
        }
        let nombreProducto = baseRemeras[3].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-verdeagua").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-hans").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-hans").val());
    if(cantidad >= 1) {
        let precio = $("#hans-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseShorts[0].venta(cantidad);
        $("#cant-hans").val("");
        $("#cant-hans").attr("max", `${baseShorts[0].stock}`);
        if (baseShorts[0].stock < 1) {
            $("#cant-hans").remove();
            $("#btn-hans").remove();
            $("#span-hans").text("Sin Stock!");
        }
        let nombreProducto = baseShorts[0].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-hans").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-jail").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-jail").val());
    if(cantidad >= 1) {
        let precio = $("#jail-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseShorts[1].venta(cantidad);
        $("#cant-jail").val("");
        $("#cant-jail").attr("max", `${baseShorts[1].stock}`);
        if (baseShorts[1].stock < 1) {
            $("#cant-jail").remove();
            $("#btn-jail").remove();
            $("#span-jail").text("Sin Stock!");
        }
        let nombreProducto = baseShorts[1].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-jail").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-pierre").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-pierre").val());
    if(cantidad >= 1) {
        let precio = $("#pierre-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseShorts[2].venta(cantidad);
        $("#cant-pierre").val("");
        $("#cant-pierre").attr("max", `${baseShorts[2].stock}`);
        if (baseShorts[2].stock < 1) {
            $("#cant-pierre").remove();
            $("#btn-pierre").remove();
            $("#span-pierre").text("Sin Stock!");
        }
        let nombreProducto = baseShorts[2].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-pierre").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#btn-rick").click(function () {
    if($("#span-alert")) {
        $("#span-alert").remove();
    }
    let cantidad = parseInt($("#cant-rick").val());
    if(cantidad >= 1) {
        let precio = $("#rick-price").text();
        precio = parseInt(precio.match(d));
        compraTotal = compraTotal + (precio * cantidad);
        baseShorts[3].venta(cantidad);
        $("#cant-rick").val("");
        $("#cant-rick").attr("max", `${baseShorts[3].stock}`);
        if (baseShorts[3].stock < 1) {
            $("#cant-rick").remove();
            $("#btn-rick").remove();
            $("#span-rick").text("Sin Stock!");
        }
        let nombreProducto = baseShorts[3].nombre;
        let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
        if (!nombreInCarrito) {
            nombresProductosCarrito.push(nombreProducto);
        }
    } else {
        $("#compra-rick").append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
    }
});

$("#ver-carrito").click(function () {
    if ($("#productos-carrito") && $("#precio-carrito")) {
        $("#productos-carrito").remove();
        $("#precio-carrito").remove();
    }
    $("#carritoContainer").append("<div id='productos-carrito' class='col-lg-6 col-sm-12 text-center'></div>");
    $("#productos-carrito").append("<h1 class='titulo-carrito'>Productos</h1>");
    $("#productos-carrito").append("<ul id='lista-carrito'></ul>");
    $("#carritoContainer").append("<div id='precio-carrito' class='col-lg-6 col-sm-12 text-center'></div>");
    for (const x of nombresProductosCarrito) {
        $("#lista-carrito").append(`<li>${x}</li>`);
    }
    $("#precio-carrito").append("<h1 class='titulo-carrito'>Precio</h1>");
    $("#precio-carrito").append(`<p class='precio-final'>${compraTotal}</p>`);
});

$("#formulario").on("submit", function (e) {
    e.preventDefault();
    let datos = e.target;
    console.log(`${datos.children[0].children[0].textContent}: ${datos.children[0].children[1].value}`);
    console.log(`${datos.children[1].children[0].textContent}: ${datos.children[1].children[1].value}`);
});