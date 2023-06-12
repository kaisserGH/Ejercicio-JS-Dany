//Reto 1
const filaBanco = ["Sofia", "David", "Juan"];

console.log(filaBanco);

{
    let filaBanco = ["Sofia", "David", "Juan"];
    filaBanco.push("Sara", "Agustin");
    filaBanco.shift("Sofia")
    //filaBanco.push("Agustin");

    console.log(filaBanco)
}

{
    let filaBanco = ['David', 'Juan', 'Sara', 'Agustin'];
    //filaBanco.remplaced(2, 1, "Renata"),
    filaBanco.push("Elena")

    console.log(filaBanco)
}

// Reto 2
let xValue = 5;
for (xValue; xValue > 1; xValue--) {
    let resultado = xValue - .5;
    if (xValue === xValue) {
        console.log(xValue);
    }

    console.log(resultado);
}

//Reto 3
let nm = 0;
let num = 20;
while (nm <= num - 1) {
    nm++
    console.log(`[` + nm + `]`);

}

// Reto 4
// Crear una funcion general y una flecha con un bucle while que calcule la suma de los primeros n numeros enteros positivos:
// suma = 1 + 2 + 3 + .. + n
// Ejemplo
//      n = 5, suma = 15
//      n = 19, suma = 190

//Funcion general
function sumaNumeros() {
    let suma = 5;
    let inicial = 1;
    let sumafinal = 0;
    while (suma >= inicial) {
        sumafinal += inicial;
        inicial++;
    } console.log(sumafinal);
}
console.log(sumaNumeros());

//Funcion flecha
const sumaNumerosFlecha = (suma) => {
    let inicial = 1;
    let sumafinal = 0;
    while (suma >= inicial) {
        sumafinal += inicial;
        inicial++;
    } console.log(sumafinal);
}
console.log(sumaNumerosFlecha(9));