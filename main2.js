let btnBtribu = document.getElementById('btn-btribu');
let btnBmarley = document.getElementById('btn-bmarley');
let btnYsubmarine = document.getElementById('btn-ysubmarine');
let btnDylan = document.getElementById('btn-dylan');
let btnMalibu = document.getElementById('btn-malibu');
let btnMilo = document.getElementById('btn-milo');
let btnNhans = document.getElementById('btn-nhans');
let btnRmaui = document.getElementById('btn-rmaui');
let btnKoi = document.getElementById('btn-koi');
let btnMostaza = document.getElementById('btn-mostaza');
let btnBordo = document.getElementById('btn-bordo');
let btnVerdeagua = document.getElementById('btn-verdeagua');
let btnHans = document.getElementById('btn-hans');
let btnJail = document.getElementById('btn-jail');
let btnPierre = document.getElementById('btn-pierre');
let btnRick = document.getElementById('btn-rick');

let d = /\d+/;
let compraTotal = 0;
let muestraCompra = document.createElement('div');
document.getElementById('main').appendChild(muestraCompra);
muestraCompra.className = 'muestraCompra mt-4'
btnBtribu.addEventListener('click', respuestaBtribu);
function respuestaBtribu () {
    let cantidad = parseInt(document.getElementById('cant-btribu').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('btribu-price').textContent;
        let precioBtribu = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioBtribu * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnBmarley.addEventListener('click', respuestaBmarley);
function respuestaBmarley () {
    let cantidad = parseInt(document.getElementById('cant-bmarley').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('bmarley-price').textContent;
        let precioBmarley = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioBmarley * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnYsubmarine.addEventListener('click', respuestaYsubmarine);
function respuestaYsubmarine () {
    let cantidad = parseInt(document.getElementById('cant-ysubmarine').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('ysubmarine-price').textContent;
        let precioYsubmarine = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioYsubmarine * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnDylan.addEventListener('click', respuestaDylan);
function respuestaDylan () {
    let cantidad = parseInt(document.getElementById('cant-dylan').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('dylan-price').textContent;
        let precioDylan = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioDylan * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnMalibu.addEventListener('click', respuestaMalibu);
function respuestaMalibu () {
    let cantidad = parseInt(document.getElementById('cant-malibu').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('malibu-price').textContent;
        let precioMalibu = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioMalibu * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnMilo.addEventListener('click', respuestaMilo);
function respuestaMilo () {
    let cantidad = parseInt(document.getElementById('cant-milo').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('milo-price').textContent;
        let precioMilo = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioMilo * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnNhans.addEventListener('click', respuestaNhans);
function respuestaNhans () {
    let cantidad = parseInt(document.getElementById('cant-nhans').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('nhans-price').textContent;
        let precioNhans = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioNhans * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnRmaui.addEventListener('click', respuestaRmaui);
function respuestaRmaui () {
    let cantidad = parseInt(document.getElementById('cant-rmaui').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('rmaui-price').textContent;
        let precioRmaui = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioRmaui * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnKoi.addEventListener('click', respuestaKoi);
function respuestaKoi () {
    let cantidad = parseInt(document.getElementById('cant-koi').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('koi-price').textContent;
        let precioKoi = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioKoi * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnMostaza.addEventListener('click', respuestaMostaza);
function respuestaMostaza () {
    let cantidad = parseInt(document.getElementById('cant-mostaza').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('mostaza-price').textContent;
        let precioMostaza = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioMostaza * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnBordo.addEventListener('click', respuestaBordo);
function respuestaBordo () {
    let cantidad = parseInt(document.getElementById('cant-bordo').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('bordo-price').textContent;
        let precioBordo = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioBordo * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnVerdeagua.addEventListener('click', respuestaVerdeagua);
function respuestaVerdeagua () {
    let cantidad = parseInt(document.getElementById('cant-verdeagua').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('verdeagua-price').textContent;
        let precioVerdeagua = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioVerdeagua * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnHans.addEventListener('click', respuestaHans);
function respuestaHans () {
    let cantidad = parseInt(document.getElementById('cant-hans').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('hans-price').textContent;
        let precioHans = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioHans * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnJail.addEventListener('click', respuestaJail);
function respuestaJail () {
    let cantidad = parseInt(document.getElementById('cant-jail').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('jail-price').textContent;
        let precioJail = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioJail * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnPierre.addEventListener('click', respuestaPierre);
function respuestaPierre () {
    let cantidad = parseInt(document.getElementById('cant-pierre').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('pierre-price').textContent;
        let precioPierre = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioPierre * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

btnRick.addEventListener('click', respuestaRick);
function respuestaRick () {
    let cantidad = parseInt(document.getElementById('cant-rick').value);
    if (cantidad >= 1) {
        let precio = document.getElementById('rick-price').textContent;
        let precioRick = parseInt(precio.match(d));
        compraTotal = compraTotal + (precioRick * cantidad);
        console.log(compraTotal);
        muestraCompra.innerHTML = `<h3>El valor de su compra es de $${compraTotal}</h3>`;
    } else {
        alert('Debes seleccionar la cantidad');
    }
};

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', capturarDatos);
function capturarDatos (e) {
    e.preventDefault();
    let datos = e.target;
    console.log(`${datos.children[0].children[0].textContent}: ${datos.children[0].children[1].value}`)
    console.log(`${datos.children[1].children[0].textContent}: ${datos.children[1].children[1].value}`);
}
