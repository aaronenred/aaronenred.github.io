/* // Variables provisionais (BORRAR MÁIS TARDE) - Inicio
var primeiro = parseInt("0")
var segundo = parseInt("-1")
var terceiro = parseInt("0")
var primeiro2 = parseInt("1")
var segundo2 = parseInt("0")
var terceiro2 = parseInt("-1")
// Variables provisionais (BORRAR MÁIS TARDE) - Final */

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
function pintar(a, b, c, d) {
    if (a >= 0) {
        a = "+" + a;
    };
    if (b >= 0) {
        b = "+" + b;
    };
    if (c >= 0) {
        c = "+" + c;
    };

    document.getElementById(d).innerHTML = "O teu polinomio é: " + a + "x<sup>2</sup>" + b + "x" + c;
}
function pintardificil(a, b, c, d, e, z) {
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

    document.getElementById(z).innerHTML =
        "O resultado da multiplicación é: " + a + "x<sup>4</sup>" +
        b + "x<sup>3</sup>" +
        c + "x<sup>2</sup>" +
        d + "x" +
        e;
}
// Declaramos funcións - Final

// Preguntamos o usuario as variables - Inicio
/* var primeiro = parseInt(prompt("Dame un coeficiente de segundo grado:"));
var segundo = parseInt(prompt("Dame un coeficiente de primer grado:"));
var terceiro = parseInt(prompt("Dame un termo independiente:"));

var primeiro2 = parseInt(prompt("Dame outro coeficiente de segundo grado:"));
var segundo2 = parseInt(prompt("Dame outro coeficiente de primer grado:"));
var terceiro2 = parseInt(prompt("Dame outro termo independiente:")); */
// Preguntamos o usuario as variables - Final
function todo() {

    var primeiro = parseInt(document.getElementById("1pol1").value);
    var segundo = parseInt(document.getElementById("1pol2").value);
    var terceiro = parseInt(document.getElementById("1pol3").value);

    var primeiro2 = parseInt(document.getElementById("2pol1").value);
    var segundo2 = parseInt(document.getElementById("2pol2").value);
    var terceiro2 = parseInt(document.getElementById("2pol3").value);

    // Presentar os polinomios introducidos polo usuario - Inicio
    pintar(primeiro, segundo, terceiro, "presenta1pol");
    /* document.getElementById("pausita").innerHTML = "<br>" ; */
    pintar(primeiro2, segundo2, terceiro2, "presenta2pol");
    // Presentar os polinomios introducidos polo usuario - Final

    // Resultados - Inicial
    pintar(sumita(primeiro, primeiro2), sumita(segundo, segundo2), sumita(terceiro, terceiro2), "sumita");
    pintar(restita(primeiro, primeiro2), restita(segundo, segundo2), restita(terceiro, terceiro2), "restita");
    // Multiplicación - Inicio
    /* Como el resultado de la multiplicación dará 9 valores, declaramos
    una variable para cada uno y así poder operar con ellos más tarde */
    var uno = multiplicacioncita(primeiro, primeiro2);
    var dos = multiplicacioncita(primeiro, segundo2);
    var tres = multiplicacioncita(primeiro, terceiro2);
    var cuatro = multiplicacioncita(segundo, primeiro2);
    var cinco = multiplicacioncita(segundo, segundo2);
    var seis = multiplicacioncita(segundo, terceiro2);
    var siete = multiplicacioncita(terceiro, primeiro2);
    var ocho = multiplicacioncita(terceiro, segundo2);
    var nueve = multiplicacioncita(terceiro, terceiro2);
    pintardificil(uno, sumita(dos, cuatro), (tres + cinco + siete), sumita(seis, ocho), nueve, "multiplicacioncita");
    // Multiplicación - Final
    // Resultados - Final
}