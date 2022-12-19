// Variables provisionais (BORRAR MÁIS TARDE) - Inicio
/* let primeiro = parseInt("0")
let segundo = parseInt("-1")
let terceiro = parseInt("0")
let primeiro2 = parseInt("1")
let segundo2 = parseInt("0")
let terceiro2 = parseInt("-1") */
// Variables provisionais (BORRAR MÁIS TARDE) - Final

// Declaramos funcións - Inicio
function sumita(a, b) {
    return (a + b);
}
function restita(a, b) {
    return (a - b);
}
function multiplicacioncita(a, b) {
    return (a * b);
}
function pintar(a, b, c) {
    if (a >= 0) {
        a = "+" + a;
    };
    if (b >= 0) {
        b = "+" + b;
    };
    if (c >= 0) {
        c = "+" + c;
    };

    document.write(
        "O teu polinomio é: " + a + "x<sup>2</sup>" + b + "x" + c
    );
}
function pintardificil(a, b, c, d, e) {
    if (a >= 0) {
        a = "+" + a;
    };
    if (b >= 0) {
        b = "+" + b;
    };
    if (c >= 0) {
        c = "+" + c;
    };
    if (d >= 0) {
        d = "+" + d;
    };
    if (e >= 0) {
        e = "+" + e;
    };

    document.write(
        "O resultado da multiplicación é: " + a + "x<sup>4</sup>" +
        b + "x<sup>3</sup>" +
        c + "x<sup>2</sup>" +
        d + "x" +
        e
    );
}
// Declaramos funcións - Final

// Preguntamos o usuario as variables - Inicio
let primeiro = parseInt(prompt("Dame un coeficiente de segundo grado:" + "\n" + "(lembra poñer o signo)"));
let segundo = parseInt(prompt("Dame un coeficiente de primer grado:" + "\n" + "(lembra poñer o signo)"));
let terceiro = parseInt(prompt("Dame un termo independiente:" + "\n" + "(lembra poñer o signo)"));

let primeiro2 = parseInt(prompt("Dame outro coeficiente de segundo grado:" + "\n" + "(lembra poñer o signo)"));
let segundo2 = parseInt(prompt("Dame outro coeficiente de primer grado:" + "\n" + "(lembra poñer o signo)"));
let terceiro2 = parseInt(prompt("Dame outro termo independiente:" + "\n" + "(lembra poñer o signo)"));
// Preguntamos o usuario as variables - Final

// Presentar os polinomios introducidos polo usuario - Inicio
pintar(primeiro, segundo, terceiro);
document.write("<br>");
pintar(primeiro2, segundo2, terceiro2);
// Presentar os polinomios introducidos polo usuario - Final

// Resultados - Inicial
document.write("<h4>S U M A</h4>");
pintar(sumita(primeiro, primeiro2), sumita(segundo, segundo2), sumita(terceiro, terceiro2));
document.write("<h4>R E S T A</h4>");
pintar(restita(primeiro, primeiro2), restita(segundo, segundo2), restita(terceiro, terceiro2));
// Multiplicación - Inicio
/* Como el resultado de la multiplicación dará 9 valores, declaramos
una variable para cada uno y así poder operar con ellos más tarde */
document.write("<h4>M U L T I P L I C A C I Ó N</h4>");
let uno = multiplicacioncita(primeiro, primeiro2);
let dos = multiplicacioncita(primeiro, segundo2);
let tres = multiplicacioncita(primeiro, terceiro2);
let cuatro = multiplicacioncita(segundo, primeiro2);
let cinco = multiplicacioncita(segundo, segundo2);
let seis = multiplicacioncita(segundo, terceiro2);
let siete = multiplicacioncita(terceiro, primeiro2);
let ocho = multiplicacioncita(terceiro, segundo2);
let nueve = multiplicacioncita(terceiro, terceiro2);
pintardificil(uno, sumita(dos, cuatro), (tres + cinco + siete), sumita(seis, ocho), nueve);
// Multiplicación - Final
// Resultados - Final