class Productos {
    constructor(nombre, idnombre, prenda, precio, id, stock, imagen) {
        this.nombre = nombre,
        this.idnombre = idnombre,
        this.prenda = prenda,
        this.precio = precio,
        this.id = id,
        this.stock = stock,
        this.imagen = imagen
    }
    venta(cantidadVenta) {
        this.stock = this.stock - cantidadVenta;
    }
}

let camisa1 = new Productos('Blue Tribu', 'btribu', 'camisa', 2100, 1, 25, 'assets/blue_tribu.jpg');
let camisa2 = new Productos('Blue Marley', 'bmarley','camisa', 2500, 2, 30, 'assets/blue_marley.jpg');
let camisa3 = new Productos('Yellow Submarine', 'ysubmarine', 'camisa', 1950, 3, 25, 'assets/yellow_submarine.jpg');
let camisa4 = new Productos('Dylan', 'dylan', 'camisa', 2225, 4, 2, 'assets/dylan.jpg');
let camisa5 = new Productos('Malibu', 'malibu', 'camisa', 2675, 5, 10, 'assets/malibu.jpg');
let camisa6 = new Productos('Milo', 'milo', 'camisa', 2250, 6, 5, 'assets/milo.jpg');
let camisa7 = new Productos('New Hans', 'nhans', 'camisa', 2700, 7, 4, 'assets/new_hans.jpg');
let camisa8 = new Productos('Red Maui', 'rmaui', 'camisa', 2340, 8, 36, 'assets/red_maui.jpg');

const baseCamisas = [];
baseCamisas.push(camisa1);
baseCamisas.push(camisa2);
baseCamisas.push(camisa3);
baseCamisas.push(camisa4);
baseCamisas.push(camisa5);
baseCamisas.push(camisa6);
baseCamisas.push(camisa7);
baseCamisas.push(camisa8);

let remera1 = new Productos('Koi', 'koi', 'remera', 1750, 1, 10, 'assets/koi.jpg');
let remera2 = new Productos('Mostaza', 'mostaza', 'remera', 1600, 2, 2, 'assets/lisa_mostaza.jpg');
let remera3 = new Productos('Bordo', 'bordo', 'remera', 1600, 3, 30, 'assets/lisa_bordo.jpg');
let remera4 = new Productos('Verde Agua', 'verdeagua','remera', 1600, 4, 10, 'assets/lisa_verde_agua.jpg');

const baseRemeras = [];
baseRemeras.push(remera1);
baseRemeras.push(remera2);
baseRemeras.push(remera3);
baseRemeras.push(remera4);

let short1 = new Productos('Hans', 'hans', 'short', 2150, 1, 22, 'assets/short_hans.jpg');
let short2 = new Productos('Jail', 'jail', 'short', 2200, 2, 17, 'assets/short_jail.jpg');
let short3 = new Productos('Pierre', 'pierre', 'short', 2000, 3, 11, 'assets/short_pierre.jpg');
let short4 = new Productos('Rick', 'rick', 'short', 2350, 4, 3, 'assets/short_rick.jpg');

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

let d = /\d+/;
let compraTotal = 0;

for (const camisa of baseCamisas) {
    $('#rowCamisas').append(`<div class="col-lg-3 col-sm-12">
            <div id="compra-${camisa.idnombre}" class="item-card d-flex flex-column align-items-center">
            </div>
        </div>`);
    $(`#compra-${camisa.idnombre}`).append(`<div class="item-title">
        Camisa ${camisa.nombre}</div>
        <img class="item-img" src="${camisa.imagen}" alt="Camisa ${camisa.nombre}">
        <div id="${camisa.idnombre}-price" class="item-price">$${camisa.precio}</div>
        <div id="sellbox" class="d-flex justify-content-between">
            <input class="stock-camisas" id="cant-${camisa.idnombre}" type="number" min="1" max="${camisa.stock}">
            <button id="btn-${camisa.idnombre}" class="btn btn-primary">Agregar al carrito</button>
            <span class="span-stock" id="span-${camisa.idnombre}"></span>
        </div>
    `);
    $(`#btn-${camisa.idnombre}`).click(function () {
        if($("#span-alert")) {
            $("#span-alert").remove();
        }
        let cantidad = parseInt($(`#cant-${camisa.idnombre}`).val());
        if(cantidad >= 1) {
            let precio = $(`#${camisa.idnombre}-price`).text();
            precio = parseInt(precio.match(d));
            compraTotal = compraTotal + (precio * cantidad);
            camisa.venta(cantidad);
            $(`#cant-${camisa.idnombre}`).val("");
            $(`#cant-${camisa.idnombre}`).attr("max", camisa.stock);
            if (camisa.stock < 1) {
                $(`#cant-${camisa.idnombre}`).remove();
                $(`#btn-${camisa.idnombre}`).remove();
                $(`#span-${camisa.idnombre}`).text("Sin Stock!");
            }
            let nombreProducto = camisa.nombre;
            let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
            if (!nombreInCarrito) {
                nombresProductosCarrito.push(nombreProducto);
            }
        } else {
            $(`#compra-${camisa.idnombre}`).append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
        }
    });
};

for (const remera of baseRemeras) {
    $('#rowRemeras').append(`<div class="col-lg-3 col-sm-12">
            <div id="compra-${remera.idnombre}" class="item-card d-flex flex-column align-items-center">
            </div>
        </div>`);
    $(`#compra-${remera.idnombre}`).append(`<div class="item-title">
        Remera ${remera.nombre}</div>
        <img class="item-img" src="${remera.imagen}" alt="Remera ${remera.nombre}">
        <div id="${remera.idnombre}-price" class="item-price">$${remera.precio}</div>
        <div id="sellbox" class="d-flex justify-content-between">
            <input class="stock-remeras" id="cant-${remera.idnombre}" type="number" min="1" max="${remera.stock}">
            <button id="btn-${remera.idnombre}" class="btn btn-primary">Agregar al carrito</button>
            <span class="span-stock" id="span-${remera.idnombre}"></span>
        </div>
    `);
    $(`#btn-${remera.idnombre}`).click(function () {
        if($("#span-alert")) {
            $("#span-alert").remove();
        }
        let cantidad = parseInt($(`#cant-${remera.idnombre}`).val());
        if(cantidad >= 1) {
            let precio = $(`#${remera.idnombre}-price`).text();
            precio = parseInt(precio.match(d));
            compraTotal = compraTotal + (precio * cantidad);
            remera.venta(cantidad);
            $(`#cant-${remera.idnombre}`).val("");
            $(`#cant-${remera.idnombre}`).attr("max", remera.stock);
            if (remera.stock < 1) {
                $(`#cant-${remera.idnombre}`).remove();
                $(`#btn-${remera.idnombre}`).remove();
                $(`#span-${remera.idnombre}`).text("Sin Stock!");
            }
            let nombreProducto = remera.nombre;
            let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
            if (!nombreInCarrito) {
                nombresProductosCarrito.push(nombreProducto);
            }
        } else {
            $(`#compra-${remera.idnombre}`).append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
        }
    });
};

for (const short of baseShorts) {
    $('#rowShorts').append(`<div class="col-lg-3 col-sm-12">
            <div id="compra-${short.idnombre}" class="item-card d-flex flex-column align-items-center">
            </div>
        </div>`);
    $(`#compra-${short.idnombre}`).append(`<div class="item-title">
        Short ${short.nombre}</div>
        <img class="item-img" src="${short.imagen}" alt="Short ${short.nombre}">
        <div id="${short.idnombre}-price" class="item-price">$${short.precio}</div>
        <div id="sellbox" class="d-flex justify-content-between">
            <input class="stock-shorts" id="cant-${short.idnombre}" type="number" min="1" max="${short.stock}">
            <button id="btn-${short.idnombre}" class="btn btn-primary">Agregar al carrito</button>
            <span class="span-stock" id="span-${short.idnombre}"></span>
        </div>
    `);
    $(`#btn-${short.idnombre}`).click(function () {
        if($("#span-alert")) {
            $("#span-alert").remove();
        }
        let cantidad = parseInt($(`#cant-${short.idnombre}`).val());
        if(cantidad >= 1) {
            let precio = $(`#${short.idnombre}-price`).text();
            precio = parseInt(precio.match(d));
            compraTotal = compraTotal + (precio * cantidad);
            short.venta(cantidad);
            $(`#cant-${short.idnombre}`).val("");
            $(`#cant-${short.idnombre}`).attr("max", short.stock);
            if (short.stock < 1) {
                $(`#cant-${short.idnombre}`).remove();
                $(`#btn-${short.idnombre}`).remove();
                $(`#span-${short.idnombre}`).text("Sin Stock!");
            }
            let nombreProducto = short.nombre;
            let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
            if (!nombreInCarrito) {
                nombresProductosCarrito.push(nombreProducto);
            }
        } else {
            $(`#compra-${short.idnombre}`).append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
        }
    });
};

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

$("#ver-carrito").click(() => {
    $('#carritoContainer').toggle('fast');
});







