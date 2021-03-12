class Productos {
    constructor(nombre, prenda, precio, id, stock) {
        this.nombre = nombre, 
        this.prenda = prenda,
        this.precio = precio, 
        this.id = id
        this.stock = stock
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

let remera1 = new Productos('koi', 'remera', 1752, 1, 10); 
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

