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

let camisa1 = new Productos('btribu', 'camisa', 2100, 1, 25);
let camisa2 = new Productos('bmarley', 'camisa', 2500, 2, 30);
let camisa3 = new Productos('ysubmarine', 'camisa', 1950, 3, 25);
let camisa4 = new Productos('dylan', 'camisa', 2225, 4, 2);
let camisa5 = new Productos('malibu', 'camisa', 2675, 5, 10);
let camisa6 = new Productos('milo', 'camisa', 2250, 6, 5);
let camisa7 = new Productos('nhans', 'camisa', 2700, 7, 4);
let camisa8 = new Productos('rmaui', 'camisa', 2340, 8, 36);

baseCamisas = [];
baseCamisas.push(camisa1);
baseCamisas.push(camisa2);
baseCamisas.push(camisa3);
baseCamisas.push(camisa4);
baseCamisas.push(camisa5);
baseCamisas.push(camisa6);
baseCamisas.push(camisa7);
baseCamisas.push(camisa8);

let remera1 = new Productos('koi', 'remera', 1750, 1, 10);
let remera2 = new Productos('mostaza', 'remera', 1600, 2, 2);
let remera3 = new Productos('bordo', 'remera', 1600, 3, 30);
let remera4 = new Productos('verdeagua', 'remera', 1600, 4, 10);

baseRemeras = [];
baseRemeras.push(remera1);
baseRemeras.push(remera2);
baseRemeras.push(remera3);
baseRemeras.push(remera4);

let short1 = new Productos('harris', 'short', 2150, 1, 22);
let short2 = new Productos('jail', 'short', 2200, 2, 17);
let short3 = new Productos('pierre', 'short', 2000, 3, 11);
let short4 = new Productos('rick', 'short', 2350, 4, 3);

baseShorts = [];
baseShorts.push(short1);
baseShorts.push(short2);
baseShorts.push(short3);
baseShorts.push(short4);

const inicioSesion = document.getElementById('btn-usuario');
inicioSesion.addEventListener('click', iniciarSesion);
function iniciarSesion () {
    let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioGuardado) {
        inicioSesion.textContent = `Bienvenido, ${usuarioGuardado.nombre}`;
    } else {
        let username = prompt('Elija un nombre de usuario');
        let contraseña = prompt('Elija su contraseña');
        usuarioNuevo = {
            nombre: username,
            password: contraseña
        }
        let usuarioNuevoJSON = JSON.stringify(usuarioNuevo);
        localStorage.setItem('usuario', usuarioNuevoJSON);
        inicioSesion.textContent = `Bienvenido, ${usuarioNuevo.nombre}`;
    }
}

let inputsCamisas = document.getElementsByClassName('stock-camisas');
let c = 0;
for (let input1 of inputsCamisas) {
    let stockCam = baseCamisas[c].stock;
    input1.setAttribute('max', `${stockCam}`);
    c++;
}

let inputsRemeras = document.getElementsByClassName('stock-remeras');
let r = 0;
for (let input2 of inputsRemeras) {
    let stockRem = baseRemeras[r].stock;
    input2.setAttribute('max', `${stockRem}`);
    r++;
}

let inputsShorts = document.getElementsByClassName('stock-shorts');
let s = 0;
for (let input3 of inputsShorts) {
    let stockShort = baseShorts[s].stock;
    input3.setAttribute('max', `${stockShort}`);
    s++;
}

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
        baseCamisas[0].venta(cantidad);
        let inputTribu = document.getElementById('cant-btribu');
        document.getElementById('cant-btribu').value = "";
        inputTribu.setAttribute('max', `${baseCamisas[0].stock}`);
        if (baseCamisas[0].stock < 1){
            inputTribu.parentNode.removeChild(inputTribu);
            btnBtribu.parentNode.removeChild(btnBtribu);
            let spanBtribu = document.getElementById('span-btribu').textContent = 'Sin Stock!';
        }
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
        baseCamisas[1].venta(cantidad);
        let inputMarley = document.getElementById('cant-bmarley');
        document.getElementById('cant-bamrley').value = "";
        inputMarley.setAttribute('max', `${baseCamisas[1].stock}`);
        if (baseCamisas[1].stock < 1){
            inputMarley.parentNode.removeChild(inputMarley);
            btnBmarley.parentNode.removeChild(btnBmarley);
            let spanBmarley = document.getElementById('span-bmarley').textContent = 'Sin Stock!';
        }
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
        baseCamisas[2].venta(cantidad);
        let inputYsubmarine = document.getElementById('cant-ysubmarine');
        document.getElementById('cant-ysubmarine').value = "";
        inputYsubmarine.setAttribute('max', `${baseCamisas[2].stock}`);
        if (baseCamisas[2].stock < 1){
            inputYsubmarine.parentNode.removeChild(inputYsubmarine);
            btnYsubmarine.parentNode.removeChild(btnYsubmarine);
            let spanYsubmarine = document.getElementById('span-ysubmarine').textContent = 'Sin Stock!';
        }
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
        baseCamisas[3].venta(cantidad);
        let inputDylan = document.getElementById('cant-dylan');
        document.getElementById('cant-dylan').value = "";
        inputDylan.setAttribute('max', `${baseCamisas[3].stock}`);
        if (baseCamisas[3].stock < 1){
            inputDylan.parentNode.removeChild(inputDylan);
            btnDylan.parentNode.removeChild(btnDylan);
            let spanDylan = document.getElementById('span-dylan').textContent = 'Sin Stock!';
        }
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
        baseCamisas[4].venta(cantidad);
        let inputMalibu = document.getElementById('cant-malibu');
        document.getElementById('cant-malibu').value = "";
        inputMalibu.setAttribute('max', `${baseCamisas[4].stock}`);
        if (baseCamisas[4].stock < 1){
            inputMalibu.parentNode.removeChild(inputMalibu);
            btnMalibu.parentNode.removeChild(btnMalibu);
            let spanMalibu = document.getElementById('span-malibu').textContent = 'Sin Stock!';
        }
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
        baseCamisas[5].venta(cantidad);
        let inputMilo = document.getElementById('cant-milo');
        document.getElementById('cant-milo').value = "";
        inputMilo.setAttribute('max', `${baseCamisas[5].stock}`);
        if (baseCamisas[5].stock < 1){
            inputMilo.parentNode.removeChild(inputMilo);
            btnMilo.parentNode.removeChild(btnMilo);
            let spanMilo = document.getElementById('span-milo').textContent = 'Sin Stock!';
        }
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
        baseCamisas[6].venta(cantidad);
        let inputNhans = document.getElementById('cant-nhans');
        document.getElementById('cant-nhans').value = "";
        inputNhans.setAttribute('max', `${baseCamisas[6].stock}`);
        if (baseCamisas[6].stock < 1){
            inputNhans.parentNode.removeChild(inputNhans);
            btnNhans.parentNode.removeChild(btnNhans);
            let spanNhans = document.getElementById('span-nhans').textContent = 'Sin Stock!';
        }
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
        baseCamisas[7].venta(cantidad);
        let inputRmaui = document.getElementById('cant-rmaui');
        document.getElementById('cant-rmaui').value = "";
        inputRmaui.setAttribute('max', `${baseCamisas[7].stock}`);
        if (baseCamisas[7].stock < 1){
            inputRmaui.parentNode.removeChild(inputRmaui);
            btnRmaui.parentNode.removeChild(btnRmaui);
            let spanRmaui = document.getElementById('span-rmaui').textContent = 'Sin Stock!';
        }
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
        baseRemeras[0].venta(cantidad);
        let inputKoi = document.getElementById('cant-koi');
        document.getElementById('cant-koi').value = "";
        inputKoi.setAttribute('max', `${baseRemeras[0].stock}`);
        if (baseRemeras[0].stock < 1){
            inputKoi.parentNode.removeChild(inputKoi);
            btnKoi.parentNode.removeChild(btnKoi);
            let spanKoi = document.getElementById('span-koi').textContent = 'Sin Stock!';
        }
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
        baseRemeras[1].venta(cantidad);
        let inputMostaza = document.getElementById('cant-mostaza');
        document.getElementById('cant-mostaza').value = "";
        inputMostaza.setAttribute('max', `${baseRemeras[1].stock}`);
        if (baseRemeras[1].stock < 1){
            inputMostaza.parentNode.removeChild(inputMostaza);
            btnMostaza.parentNode.removeChild(btnMostaza);
            let spanMostaza = document.getElementById('span-mostaza').textContent = 'Sin Stock!';
        }
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
        baseRemeras[2].venta(cantidad);
        let inputBordo = document.getElementById('cant-bordo');
        document.getElementById('cant-bordo').value = "";
        inputBordo.setAttribute('max', `${baseRemeras[2].stock}`);
        if (baseRemeras[2].stock < 1){
            inputBordo.parentNode.removeChild(inputBordo);
            btnBordo.parentNode.removeChild(btnBordo);
            let spanBordo = document.getElementById('span-bordo').textContent = 'Sin Stock!';
        }
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
        baseRemeras[3].venta(cantidad);
        let inputVerdeagua = document.getElementById('cant-verdeagua');
        document.getElementById('cant-verdeagua').value = "";
        inputVerdeagua.setAttribute('max', `${baseRemeras[3].stock}`);
        if (baseRemeras[3].stock < 1){
            inputVerdeagua.parentNode.removeChild(inputVerdeagua);
            btnVerdeagua.parentNode.removeChild(btnVerdeagua);
            let spanVerdeagua = document.getElementById('span-verdeagua').textContent = 'Sin Stock!';
        }
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
        baseShorts[0].venta(cantidad);
        let inputHans = document.getElementById('cant-hans');
        document.getElementById('cant-hans').value = "";
        inputHans.setAttribute('max', `${baseShorts[0].stock}`);
        if (baseShorts[0].stock < 1){
            inputHans.parentNode.removeChild(inputHans);
            btnHans.parentNode.removeChild(btnHans);
            let spanHans = document.getElementById('span-hans').textContent = 'Sin Stock!';
        }
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
        baseShorts[1].venta(cantidad);
        let inputJail = document.getElementById('cant-jail');
        document.getElementById('cant-jail').value = "";
        inputJail.setAttribute('max', `${baseShorts[1].stock}`);
        if (baseShorts[1].stock < 1){
            inputJail.parentNode.removeChild(inputJail);
            btnJail.parentNode.removeChild(btnJail);
            let spanJail = document.getElementById('span-jail').textContent = 'Sin Stock!';
        }
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
        baseShorts[2].venta(cantidad);
        let inputPierre = document.getElementById('cant-pierre');
        document.getElementById('cant-pierre').value = "";
        inputPierre.setAttribute('max', `${baseShorts[2].stock}`);
        if (baseShorts[2].stock < 1){
            inputPierre.parentNode.removeChild(inputPierre);
            btnPierre.parentNode.removeChild(btnPierre);
            let spanPierre = document.getElementById('span-pierre').textContent = 'Sin Stock!';
        }
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
        baseShorts[3].venta(cantidad);
        let inputRick = document.getElementById('cant-rick');
        document.getElementById('cant-rick').value = "";
        inputRick.setAttribute('max', `${baseShorts[3].stock}`);
        if (baseShorts[3].stock < 1){
            inputRick.parentNode.removeChild(inputRick);
            btnRick.parentNode.removeChild(btnRick);
            let spanRick = document.getElementById('span-rick').textContent = 'Sin Stock!';
        }
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

