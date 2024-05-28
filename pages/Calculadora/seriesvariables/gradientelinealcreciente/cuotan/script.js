function calcularCn() {
    const A = parseFloat(document.getElementById('first-payment').value);
    const G = parseFloat(document.getElementById('variation').value);
    const n = parseInt(document.getElementById('period').value);

    const Cn = A + (n - 1) * G;

    document.getElementById('result').textContent = `El valor de la cuota n-ésima es: ${Cn.toFixed(2)}`;
}
