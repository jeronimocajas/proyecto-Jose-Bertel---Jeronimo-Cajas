function calcularVP() {
    const A = parseFloat(document.getElementById('payment').value);
    const G = parseFloat(document.getElementById('gradient').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const term1 = (Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n));
    const term2 = ((Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n))) - (n / (Math.pow(1 + i, n)));

    const VP = A * term1 - (G / i) * term2;

    document.getElementById('result').textContent = `El valor presente es: ${VP.toFixed(2)}`;
}
