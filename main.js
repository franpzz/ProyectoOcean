// constructuror de clase para los articulos
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

// constructor de clase para cada articulo en el carro

class EnCarro {
    constructor(nombre, imagen, cantidad, precioTotal, idnombre ) {
        this.nombre = nombre,
        this.imagen = imagen,
        this.cantidad = cantidad,
        this.precioTotal = precioTotal,
        this.idnombre = idnombre
    }
}

// crear estructura principal de seccion productos
function estructuraProductos () {
    $('#mainProductos').append('<section id="productos"></section>');
    $('#mainProductos').css({"margin-top": "30px"});
    $('#productos').append('<h1 id="tituloProductos">¡HEY, WOLF! BIENVENIDO A NUESTRA TIENDA</h1><p id="subtituloProductos">Compra desde la comodidad de tu casa, nosotros hacemos el resto</p>');
    $('#tituloProductos').css({
        "text-align": "center",
        "font-family": "'Lato', sans-serif",
        "font-size": "4rem",
        "font-weight": "900"
    });
    $('#subtituloProductos').css({
        "text-align": "center",
        "font-family": "'Lato', sans-serif",
        "font-size": "2rem",
        "font-weight": "600",
        "margin-top": "20px"
    });
    $('#productos').append('<div class="container"><div id="articulos" class="row"></div></div>');
    $('#mainProductos').append('<button id="ver-carrito">Ver Carrito</button>');
    $('#ver-carrito').click(function () {
        $('#carrito-container').fadeIn();
    });
};

// agregar cada tarjeta de producto
function listarProductos (base) {
    for (const p in base) {
        $('#articulos').append(`
            <div class="col-lg-3 col-sm-12">
                <div id="compra-${base[p].idnombre}" class="item-card d-flex flex-column align-items-center">
                </div>
            </div>`
        );
        $(`#compra-${base[p].idnombre}`).append(`
            <div class="item-title">
                ${base[p].prenda} ${base[p].nombre}</div>
                <img class="item-img" src="${base[p].imagen}" alt="${base[p].prenda} ${base[p].nombre}">
                <div id="${base[p].idnombre}-price" class="item-price">$${base[p].precio}</div>
                <div id="sellbox" class="d-flex justify-content-between">
                <input class="stock-${base[p].prenda}s" id="cant-${base[p].idnombre}" type="number" min="1" max="${base[p].stock}">
                <button id="btn-${base[p].idnombre}" class="btn btn-primary">Agregar al carrito</button>
                <span class="span-stock" id="span-${base[p].idnombre}"></span>
            </div>
        `);
    }
};

// funcion de los botones de compra
/*
function botonesCarrito (base) {
    for (const p in base) {
        $(`#btn-${base[p].idnombre}`).click(function () {
            if($("#span-alert")) {
                $("#span-alert").remove();
            }
            let cantidad = parseInt($(`#cant-${base[p].idnombre}`).val());
            if(cantidad >= 1) {
                let precio = $(`#${base[p].idnombre}-price`).text();
                precio = parseInt(precio.match(d));
                compraTotal = compraTotal + (precio * cantidad);
                base[p].venta(cantidad);
                $(`#cant-${base[p].idnombre}`).val("");
                $(`#cant-${base[p].idnombre}`).attr("max", base[p].stock);
                if (base[p].stock < 1) {
                    $(`#cant-${base[p].idnombre}`).remove();
                    $(`#btn-${base[p].idnombre}`).remove();
                    $(`#span-${base[p].idnombre}`).text("Sin Stock!");
                }
                let nombreProducto = base[p].nombre;
                let nombreInCarrito = nombresProductosCarrito.find(n => n == nombreProducto);
                if (!nombreInCarrito) {
                    nombresProductosCarrito.push(nombreProducto);
                }
            } else {
                $(`#compra-${base[p].idnombre}`).append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
            }
        });
    };
}
*/
function botonesCarrito (base) {
    for (const p in base) {
        $(`#btn-${base[p].idnombre}`).click(function () {

            if($("#span-alert")) {
                $("#span-alert").remove();
            }
            let cantidad = parseInt($(`#cant-${base[p].idnombre}`).val());
            if(cantidad >= 1) {
                let precio = $(`#${base[p].idnombre}-price`).text();
                precio = parseInt(precio.match(d));
                compraTotal = compraTotal + (precio * cantidad);

                if (!enCarrito.find(a => a.nombre == base[p].nombre)){
                    enCarrito.push(new EnCarro (`${base[p].nombre}`, `${base[p].imagen}`, cantidad, parseInt(`${precio * cantidad}`), `${base[p].idnombre}`));
                } else {
                    for (let a of enCarrito) {
                        if (a.nombre == base[p].nombre) {
                            a.cantidad = a.cantidad + cantidad;
                            a.precioTotal = a.precioTotal + (precio * cantidad);
                        }
                    }
                }
                
                base[p].venta(cantidad);
                $(`#cant-${base[p].idnombre}`).val("");
                $(`#cant-${base[p].idnombre}`).attr("max", base[p].stock);
                if (base[p].stock < 1) {
                    $(`#cant-${base[p].idnombre}`).remove();
                    $(`#btn-${base[p].idnombre}`).remove();
                    $(`#span-${base[p].idnombre}`).text("Sin Stock!");
                }

            } else {
                $(`#compra-${base[p].idnombre}`).append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
            }
            console.log(compraTotal);
            $('#carrito').remove();
            $('#tabla-carro').append('<tbody id="carrito"></tbody>');
            for (let articulo of enCarrito) {
                $('#carrito').append(`
                    <tr id="carro-${articulo.idnombre}">
                        <td><img style="height: 80px" src="${articulo.imagen}"></td>
                        <td>x ${articulo.cantidad}</td>
                        <td>$ ${articulo.precioTotal}</td>
                        <td><button id="remover-${articulo.idnombre}">Quitar</button></td>
                    </tr>
                `);
                $(`#remover-${articulo.idnombre}`).click(function () {
                    $(`#carro-${articulo.idnombre}`).remove();
                    enCarrito = $.grep(enCarrito, (e) => {
                        return e.idnombre != `${articulo.idnombre}`;
                    })
                    compraTotal = compraTotal - `${articulo.precioTotal}`;
                });
            }
        });
    };

}

// arrays para la base de datos y carrito
var baseProductos = [];
/*const nombresProductosCarrito = [];*/
var enCarrito = [];

// llamada de obtención de los productos de un JSON local
$.ajax ({
    method: "GET",
    url: "productos.json",
    dataType: "json",
    success: (res) => {
        res.map(prod => baseProductos.push(new Productos(prod.nombre, prod.idnombre, prod.prenda, prod.precio, prod.id, prod.stock, prod.imagen)));
        estructuraProductos ();
        listarProductos (baseProductos);
        botonesCarrito (baseProductos);
    }
});

// comprobar si el usuario tiene usuario creado en la pagina
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


