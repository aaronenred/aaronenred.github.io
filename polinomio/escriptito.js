// Inicio de funcións.
// O 'if' no interior das funcións e para por signos se o resultado e '0' ou maior, do contrario, da erro.
function suma(a, b) {
    if (a + b >= 0) {
        return "+" + (a + b);
    } else {
    return (a + b);
    }
}
function resta(a, b) {
    if (a - b >= 0) {
        return "+" + (a - b);
    } else {
    return (a - b);
    }
}
function multiplicar(a, b) {
    if (a * b >= 0) {
        return "+" + (a * b)
    } else {
    return (a * b);
    }
}
// Fin de funcións.

// Inicio de declaración de variables que o usuario introduce.
let primeiro = parseInt(prompt("Dame un coeficiente de segundo grado:" + "\n" + "(lembra poñer o signo)"));
let segundo = parseInt(prompt("Dame un coeficiente de primer grado:" + "\n" + "(lembra poñer o signo)"));
let terceiro = parseInt(prompt("Dame un termo independiente:" + "\n" + "(lembra poñer o signo)"));

let primeiro2 = parseInt(prompt("Dame outro coeficiente de segundo grado:" + "\n" + "(lembra poñer o signo)"));
let segundo2 = parseInt(prompt("Dame outro coeficiente de primer grado:" + "\n" + "(lembra poñer o signo)"));
let terceiro2 = parseInt(prompt("Dame outro termo independiente:" + "\n" + "(lembra poñer o signo)"));
// Fin de declaración de variables que o usuario introduce


function pintar(p, s, t) {
    if (p > 0) {
        p = "+", p
    }
    if (s > 0) {
        p = "+", p
    }
    if (t > 0) {
        p = "+", p
    }

    document.write(
        "O teu polinomio é: " + p + "x<sup>2</sup>" + s + "x"  + t
    );
}

pintar(primeiro, segundo, terceiro);
document.write("<br>")
pintar(primeiro2, segundo2, terceiro2);

document.write(
    "<h4> S U M A </h4>"
)
pintar(suma(primeiro, primeiro2), suma(segundo, segundo2), suma(terceiro, terceiro2));

document.write(
    "<h4> R E S T A </h4>"
)
pintar(resta(primeiro, primeiro2), resta(segundo, segundo2), resta(terceiro, terceiro2));

document.write(
    "<h4> M U L T I P L I C A C I Ó N </h4>"
)
pintar(multiplicar(primeiro, primeiro2), multiplicar(segundo, segundo2), multiplicar(terceiro, terceiro2));