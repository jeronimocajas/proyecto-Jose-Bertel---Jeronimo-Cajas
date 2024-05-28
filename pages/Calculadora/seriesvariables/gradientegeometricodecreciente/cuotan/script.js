function calcularCn() {
    const A = parseFloat(document.getElementById('payment').value);
    const j = parseFloat(document.getElementById('growth-rate').value);
    const n = parseInt(document.getElementById('period').value);

    const Cn = A * Math.pow(1 - j, n - 1);

    document.getElementById('result').textContent = `El valor de la cuota n-ésima es: ${Cn.toFixed(2)}`;
}
 