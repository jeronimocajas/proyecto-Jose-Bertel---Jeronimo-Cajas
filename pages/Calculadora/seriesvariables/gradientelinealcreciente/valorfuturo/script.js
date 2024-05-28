function calcularVF() {
    const A = parseFloat(document.getElementById('payment').value);
    const G = parseFloat(document.getElementById('gradient').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const term1 = (Math.pow(1 + i, n) - 1) / i;
    const term2 = ((Math.pow(1 + i, n) - 1) / i) - n;

    const VF = A * term1 + (G / i) * term2;

    document.getElementById('result').textContent = `El valor futuro es: ${VF.toFixed(2)}`;
}
