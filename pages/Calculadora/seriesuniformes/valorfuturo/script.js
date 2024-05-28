// script.js

function calcularFv() {
    const A = parseFloat(document.getElementById('payment').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const Fv = A * ((Math.pow(1 + i, n) - 1) / i);

    document.getElementById('result').textContent = `El valor final es: ${Fv.toFixed(2)}`;
}
