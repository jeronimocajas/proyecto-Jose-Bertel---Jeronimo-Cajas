// script.js

function calcularCuota() {
    const valor = parseFloat(document.getElementById('valor').value);
    const i = parseFloat(document.getElementById('interest-rate').value);
    const n = parseInt(document.getElementById('periods').value);
    const tipo = document.getElementById('type').value;

    let A;

    if (tipo === 'vp') {
        // Cuota usando el Valor Presente (Vp)
        A = valor * (i / (1 - Math.pow(1 + i, -n)));
    } else if (tipo === 'fv') {
        // Cuota usando el Valor Final (Fv)
        A = valor * (i / (Math.pow(1 + i, n) - 1));
    }

    document.getElementById('result').textContent = `La cuota es: ${A.toFixed(2)}`;
}
