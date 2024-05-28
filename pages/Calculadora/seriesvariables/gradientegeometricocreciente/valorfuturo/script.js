function calcularVF() {
    const A = parseFloat(document.getElementById('payment').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const j = parseFloat(document.getElementById('growth-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const VF = A * ((Math.pow(1 + i, n) - Math.pow(1 + j, n)) / (i - j));

    document.getElementById('result').textContent = `El valor futuro es: ${VF.toFixed(2)}`;
}
