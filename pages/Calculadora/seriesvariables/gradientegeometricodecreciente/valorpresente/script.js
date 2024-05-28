function calcularVP() {
    const A = parseFloat(document.getElementById('payment').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const j = parseFloat(document.getElementById('growth-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const VP = A * ((Math.pow(1 + i, n) - Math.pow(1 - j, n)) / ((j + i) * Math.pow(1 + i, n)));

    document.getElementById('result').textContent = `El valor presente es: ${VP.toFixed(2)}`;
}
