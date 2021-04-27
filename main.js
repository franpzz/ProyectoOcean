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
    $('#productos').append('<div id="filtros" class="d-flex justify-content-around"></div>');
    $('#filtros').append('<button class="btn-filtro" id="no-filtro">Todo</button>');
    $('#filtros').append('<button class="btn-filtro" id="filtro-cam">Camisas</button>');
    $('#filtros').append('<button class="btn-filtro" id="filtro-rem">Remeras</button>');
    $('#filtros').append('<button class="btn-filtro" id="filtro-sh">Shorts</button>');
    $('#productos').append('<div class="container"><div id="articulos" class="row"></div></div>');
};

// funcion para filtrar productos
function botonesFiltro (idtodo, idcam, idrem, idsh) {
    $(`#${idtodo}`).click(()=>{
        $('.camisa').fadeIn();
        $('.remera').fadeIn();
        $('.short').fadeIn();
    });
    $(`#${idcam}`).click(()=>{
        $('.camisa').fadeIn();
        $('.remera').fadeOut();
        $('.short').fadeOut();
    });
    $(`#${idrem}`).click(()=>{
        $('.camisa').fadeOut();
        $('.remera').fadeIn();
        $('.short').fadeOut();
    });
    $(`#${idsh}`).click(()=>{
        $('.camisa').fadeOut();
        $('.remera').fadeOut();
        $('.short').fadeIn();
    });
}

// agregar cada tarjeta de producto
function listarProductos (base) {
    for (const p in base) {
        $('#articulos').append(`
            <div class="col-lg-3 col-sm-12 mt-5 ${base[p].prenda}">
                <div id="compra-${base[p].idnombre}" class="item-card d-flex flex-column align-items-center">
                </div>
            </div>`
        );
        $(`#compra-${base[p].idnombre}`).append(`
            <div class="item-title">
                ${base[p].prenda} ${base[p].nombre}</div>
                <img class="item-img" src="${base[p].imagen}" alt="${base[p].prenda} ${base[p].nombre}">
                <div id="${base[p].idnombre}-price" class="item-price">$${base[p].precio}</div>
                <div id="sellbox-${base[p].idnombre}" class="d-flex justify-content-between">
                <input class="stock-${base[p].prenda}s" id="cant-${base[p].idnombre}" type="number" min="1" max="${base[p].stock}">
                <button id="btn-${base[p].idnombre}" class="btn btn-primary">Agregar al carrito</button>
                <span class="span-stock" id="span-${base[p].idnombre}" style="display: none;">Sin Stock!</span>
            </div>
        `);
    };
};

// módulos función botonesCarrito
    // actualizar stock luego de agregar al carro
function actualizarStock (producto, base, cantidad) {
    base[producto].venta(cantidad);
        $(`#cant-${base[producto].idnombre}`).val("");
        $(`#cant-${base[producto].idnombre}`).attr("max", base[producto].stock);
        if (base[producto].stock < 1) {
            $(`#cant-${base[producto].idnombre}`).hide();
            $(`#btn-${base[producto].idnombre}`).hide();
            $(`#span-${base[producto].idnombre}`).show();
        }
}

    // añadir a array de carrito
function actualizarListaCarro (baseCarro, producto, baseProductos, precio, cantidad) {
    let enCarroSi = baseCarro.find(articulo => articulo.nombre == baseProductos[producto].nombre);
    if (!enCarroSi) {
        baseCarro.push(new EnCarro(`${baseProductos[producto].nombre}`, `${baseProductos[producto].imagen}`, cantidad, parseInt(`${precio * cantidad}`), `${baseProductos[producto].idnombre}`));
    } else {
        for (let art of baseCarro) {
            if (art.nombre == baseProductos[producto].nombre) {
                art.cantidad = art.cantidad + cantidad;
                art.precioTotal = art.precioTotal + (precio * cantidad);
            }
        }
    }
}

    // crear y actualizar carrito de compras en HTML
function carroAhtml (baseCarro) {
    $('#carrito').remove();
    $('#tabla-carro').append('<tbody id="carrito"><tr style="font-size: 2rem;" class="mt-5 d-flex justify-content-evenly"><td>Total</td><td id="checkout"></td></tr></tbody>');
    for (let articulo of baseCarro) {
        $('#carrito').prepend(`
            <tr class="fila-carro mt-3" id="carro-${articulo.idnombre}">
                <td><img style="height: 80px" src="${articulo.imagen}"></td>
                <td>x ${articulo.cantidad}</td>
                <td>$ ${articulo.precioTotal}</td>
                <td><button style="border: 0; background-color: red;" id="remover-${articulo.idnombre}"><i class="fas fa-trash-alt"></i></button></td>
            </tr>
        `);
        $(`#remover-${articulo.idnombre}`).click(function () {
            $(`#carro-${articulo.idnombre}`).remove();
            let cantidadVendida = articulo.cantidad;
            let idArticulo = articulo.idnombre;
            enCarrito = $.grep(enCarrito, (e) => {
                return e.idnombre != `${articulo.idnombre}`;
            })
            compraTotal = compraTotal - `${articulo.precioTotal}`;
            $('#checkout').text(`$ ${compraTotal}`);
            for (let stock of baseProductos) {
                if (stock.idnombre == idArticulo) {
                    stock.venta(-cantidadVendida);
                    $(`#cant-${idArticulo}`).attr("max", stock.stock);
                }
                if ($(`#cant-${idArticulo}`).css('display') == 'none') {
                    $(`#cant-${idArticulo}`).show();
                    $(`#btn-${idArticulo}`).show();
                    $(`#span-${idArticulo}`).hide();
                }
            }
        });
    };
    
}

// funcion de los botones de compra
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

                actualizarListaCarro (enCarrito, p, base, precio, cantidad);
                /*
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
*/
                actualizarStock (p, base, cantidad);
                /*
                base[p].venta(cantidad);
                $(`#cant-${base[p].idnombre}`).val("");
                $(`#cant-${base[p].idnombre}`).attr("max", base[p].stock);
                if (base[p].stock < 1) {
                    $(`#cant-${base[p].idnombre}`).hide();
                    $(`#btn-${base[p].idnombre}`).hide();
                    $(`#span-${base[p].idnombre}`).show();
                }
                */
            } else {
                $(`#compra-${base[p].idnombre}`).append("<span class='span-cant' id='span-alert'>No seleccionaste cantidad</span>");
            }
            console.log(compraTotal);
            carroAhtml(enCarrito);
            $('#checkout').text(`$ ${compraTotal}`);
            /*
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
                    let cantidadVendida = articulo.cantidad;
                    let idArticulo = articulo.idnombre;
                    enCarrito = $.grep(enCarrito, (e) => {
                        return e.idnombre != `${articulo.idnombre}`;
                    })
                    compraTotal = compraTotal - `${articulo.precioTotal}`;
                    for (let stock of baseProductos) {
                        if (stock.idnombre == idArticulo) {
                            stock.venta(-cantidadVendida);
                            $(`#cant-${idArticulo}`).attr("max", stock.stock);
                        }
                        
                        if ($(`#cant-${idArticulo}`).css('display') == 'none') {
                            $(`#cant-${idArticulo}`).show();
                            $(`#btn-${idArticulo}`).show();
                            $(`#span-${idArticulo}`).hide();
                        }
                    }
                });
            }*/
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
        botonesFiltro('no-filtro', 'filtro-cam', 'filtro-rem', 'filtro-sh')
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

$("#formulario").on("submit", function (e) {
    e.preventDefault();
    let datos = e.target;
    console.log(`${datos.children[0].children[0].textContent}: ${datos.children[0].children[1].value}`);
    console.log(`${datos.children[1].children[0].textContent}: ${datos.children[1].children[1].value}`);
});

$('#carrito-compra').click(()=>{
    $('#carrito-container').fadeIn();
})