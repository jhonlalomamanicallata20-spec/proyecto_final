// REGISTRAR CLIENTES
document.getElementById("formCliente").addEventListener("submit", function(e){
    e.preventDefault();

    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    let tabla = document.querySelector("#tablaClientes tbody");

    let fila = `
        <tr>
            <td>${dni}</td>
            <td>${nombre}</td>
            <td>${correo}</td>
        </tr>
    `;

    tabla.innerHTML += fila;

    // limpiar
    document.getElementById("formCliente").reset();
});


// SIMULADOR DE PRÉSTAMO
function simular() {
    let monto = parseFloat(document.getElementById("monto").value);
    let interes = parseFloat(document.getElementById("interes").value);
    let meses = parseInt(document.getElementById("meses").value);

    if (!monto || !interes || !meses) {
        document.getElementById("resultado").innerText = "Completa todos los campos.";
        return;
    }

    let tasaMensual = interes / 100 / 12;

    let cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));

    document.getElementById("resultado").innerHTML = `
        <strong>Cuota mensual:</strong> S/ ${cuota.toFixed(2)}
    `;
}
