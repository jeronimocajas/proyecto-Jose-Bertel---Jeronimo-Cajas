// script.js

function calcularVp() {
    const A = parseFloat(document.getElementById('payment').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    let Vp;

    Vp = A * ((1 - Math.pow(1 + i, -n)) / i);

    document.getElementById('result').textContent = `El valor presente es: ${Vp.toFixed(2)}`;
}
