function calcularCuota() {
    const VF = parseFloat(document.getElementById('valor').value);
    const G = parseFloat(document.getElementById('gradient').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const n = parseInt(document.getElementById('periods').value);

    const term1 = (Math.pow(1 + i, n) - 1) / i;
    const term2 = ((Math.pow(1 + i, n) - 1) / i) - n;

    const A = (VF - (G / i) * term2) / term1;

    document.getElementById('result').textContent = `La cuota es: ${A.toFixed(2)}`;
}
