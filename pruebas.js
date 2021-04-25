let productos = [
    {
        nombre: "franco",
        edad: 17,
        club: "River"
    },
    {
        nombre: "juan",
        edad: 19,
        club: "River"
    },
    {
        nombre: "pedro",
        edad: 21,
        club: "River"
    }
];

console.log(productos[0].edad);

numero = 19;

productos = $.grep(productos, (e) => {
    return e.edad != numero;
});

console.log(productos[0].edad);

nombres = "franco";
masedad = 10;

for (let p of productos) {
    if (p.nombre === nombres) {
        p.edad = p.edad + masedad;
    }
}

console.log(productos[0].edad);
