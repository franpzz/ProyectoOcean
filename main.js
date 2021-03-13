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

function compraShort () {
    alert('A continuación verá los productos por su nombre y precio.')
    alert(short1.nombre.toUpperCase() + ': ' + '$' + short1.precio + '\n' + short2.nombre.toUpperCase() + ': ' + '$' + short2.precio + '\n' + short3.nombre.toUpperCase() + ': ' + '$' + short3.precio + '\n' + short4.nombre.toUpperCase() + ': ' + '$' + short4.precio + '\n' );
    let quiereShort = prompt('Quiere alguno de estos?').toLowerCase();
    let precioShortTotal = 0;
    if (quiereShort != 'si' && quiereShort != 'no'){
        quiereShort = prompt('Por favor, ingrese si o no');
    }   
    while (quiereShort == 'si') {
        let cualShort = prompt('Cual short desea comprar? Ingrese el nombre del producto').toLowerCase();
        if (!baseShorts.find(f => f.nombre == cualShort)) {
            quiereShort = prompt('Ese no lo tenemos, querés otro?'); 
        } else {
            let elShort = baseShorts.find(f => f.nombre == cualShort);
            let cuantosShorts = parseInt(prompt('Cuántos quiere comprar?'));
            if (cuantosShorts > elShort.stock) {
                alert('No tenemos esa cantidad, solo tenemos ' + elShort.stock + ' unidades');
            } else {
                precioShortTotal = precioShortTotal + (elShort.precio * cuantosShorts);
                alert('Son $' + precioShortTotal);
                elShort.venta(cuantasCamisas);
            }
            quiereShort = prompt('Quiere comprar otro short?');
        }
    }
    return precioShortTotal; 
}

function compraRemera () {
    alert('A continuación verá los productos por su nombre y precio.')
    alert(remera1.nombre.toUpperCase() + ': ' + '$' + remera1.precio + '\n' + remera2.nombre.toUpperCase() + ': ' + '$' + remera2.precio + '\n' + remera3.nombre.toUpperCase() + ': ' + '$' + remera3.precio + '\n' + remera4.nombre.toUpperCase() + ': ' + '$' + remera4.precio + '\n' );
    let quiereRemera = prompt('Quiere alguna de estas?').toLowerCase(); 
    let precioRemeraTotal = 0; 
    if (quiereRemera != 'si' && quiereRemera != 'no'){
        quiereRemera = prompt('Por favor, ingrese si o no');
    } 
    while (quiereRemera == 'si') {
        let cualRemera = prompt('Cuál remera quiere comprar? Ingrese el nombre del producto').toLowerCase();
        if (!baseRemeras.find(r => r.nombre == cualRemera)) {
            quiereRemera = prompt('Esa no la tenemos, querés otra?');
        } else {
            let laRemera = baseRemeras.find(r => r.nombre == cualRemera); 
            let cuantasRemeras = parseInt(prompt('Cuántas quiere comprar?'));
            if (cuantasRemeras > laRemera.stock) {
                alert('No tenemos esa cantidad, solo tenemos ' + laRemera.stock + ' unidades');
            } else {
                precioRemeraTotal = precioRemeraTotal + (laRemera.precio * cuantasRemeras); 
                alert('Son $' + precioRemeraTotal); 
                laRemera.venta(cuantasCamisas);
            }
            quiereRemera = prompt('Quiere comprar otra remera?'); 
        }
    }
    return precioRemeraTotal; 
}

function compraCamisa () {
    alert('A continuación verá los productos por su nombre y precio.')
    alert(camisa1.nombre.toUpperCase() + ': ' + '$' + camisa1.precio + '\n' + camisa2.nombre.toUpperCase() + ': ' + '$' + camisa2.precio + '\n' + camisa3.nombre.toUpperCase() + ': ' + '$' + camisa3.precio + '\n' + camisa4.nombre.toUpperCase() + ': ' + '$' + camisa4.precio + '\n' + camisa5.nombre.toUpperCase() + ': ' + '$' + camisa5.precio + '\n' + camisa6.nombre.toUpperCase() + ': ' + '$' + camisa6.precio + '\n' + camisa7.nombre.toUpperCase() + ': ' + '$' + camisa7.precio + '\n' + camisa8.nombre.toUpperCase() + ': ' + '$' + camisa8.precio);
    let quiereCamisa = prompt('Quiere alguna de estas?').toLowerCase(); 
    let precioCamisaTotal = 0;
    if (quiereCamisa != 'si' && quiereCamisa != 'no'){
        quiereCamisa = prompt('Por favor, ingrese si o no');
    } 
    while (quiereCamisa == 'si') {
        let cualCamisa = prompt('Cual camisa quiere comprar? Ingrese el nombre del producto').toLowerCase(); 
        if (!baseCamisas.find(c => c.nombre == cualCamisa)) {
            quiereCamisa = prompt('Esa no la tenemos, querés otra?'); 
        } else {
            let laCamisa = baseCamisas.find(c => c.nombre == cualCamisa); 
            let cuantasCamisas = parseInt(prompt('Cuántas quiere comprar?')); 
            if (cuantasCamisas > laCamisa.stock) {
                alert('No tenemos esa cantidad, solo tenemos ' + laCamisa.stock + ' unidades'); 
            } else {
                precioCamisaTotal = precioCamisaTotal + (laCamisa.precio * cuantasCamisas); 
                alert('Son $' + precioCamisaTotal); 
                laCamisa.venta(cuantasCamisas);  
        }
        quiereCamisa = prompt('Quiere comprar otra camisa?');
        }   
    }
    return precioCamisaTotal; 
}

let quiereComprar = prompt('Quiere realizar alguna compra?').toLowerCase(); 
let valorCompra = 0; 
while (quiereComprar == 'si') {
    let productoDeseado = prompt('Quiere short, camisa o remera?').toLowerCase(); 
    switch(productoDeseado) {
        case 'short': 
            let precioCompraShort = compraShort(); 
            valorCompra = valorCompra + precioCompraShort; 
            break; 
        case 'remera': 
            let precioCompraRemera = compraRemera(); 
            valorCompra = valorCompra + precioCompraRemera; 
            break; 
        case 'camisa': 
            let precioCompraCamisa = compraCamisa(); 
            valorCompra = valorCompra + precioCompraCamisa; 
            break; 
        default: 
            alert('No tenemos ese producto'); 
            break;  
    }
    alert('El valor de su compra es de $' + valorCompra); 
    quiereComprar = prompt('Quiere seguir comprando?'); 
}
