function calcularCuotaVP() {
    const VP = parseFloat(document.getElementById('present-value').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const j = parseFloat(document.getElementById('growth-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const A = VP * ((1 - j) / ((1 - (1 + j)) / Math.pow(1 + i, n)));

    document.getElementById('result').textContent = `La cuota es: ${A.toFixed(2)}`;
}
