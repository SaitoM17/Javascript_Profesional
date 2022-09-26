console.log('Hola mundo')

function suma(a:number, b:number){
    return a + b;
}

const sum = suma(3,4)


interface rectangulo{
    ancho: number
    alto: number
}

let rec: rectangulo = {
    ancho: 4,
    alto: 7
}

function area(r:rectangulo){
    return r.alto * r.ancho;
}

const arearet = area(rec);
console.log(arearet)