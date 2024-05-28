// script.js

function calcularPeriodos() {
    const A = parseFloat(document.getElementById('payment').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('type').value;

    let n;

    if (tipo === 'vp') {
        // Número de periodos usando el Valor Presente (Vp)
        n = Math.log(A / (A - valor * i)) / Math.log(1 + i);
    } else if (tipo === 'fv') {
        // Número de periodos usando el Valor Final (Fv)
        n = Math.log((valor * i / A) + 1) / Math.log(1 + i);
    }

    document.getElementById('result').textContent = `El número de periodos es: ${n.toFixed(2)}`;
}
