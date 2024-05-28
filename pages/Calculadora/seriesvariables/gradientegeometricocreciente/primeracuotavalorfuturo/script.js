function calcularCuotaVF() {
    const VF = parseFloat(document.getElementById('future-value').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const j = parseFloat(document.getElementById('growth-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const A = VF * ((i - j) / (Math.pow(1 + i, n) - Math.pow(1 + j, n)));

    document.getElementById('result').textContent = `La cuota es: ${A.toFixed(2)}`;
}
