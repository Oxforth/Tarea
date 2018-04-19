var Producto = new Object();
Producto.nombre = "";
Producto.cantidad = 0;
Producto.precio = 0.0;

var i = 0, ri = 0;

function enviar() {

    var data = document.getElementById("data")
    var tot = document.getElementById("cant").value;
    var prod = document.getElementById("prod").value;

    var cant = tot;

    switch (prod) {
        case "Arroz":
            Producto.nombre = prod;
            Producto.cantidad = 50;
            Producto.precio = 3.0;
            crear(Producto, data, cant);
            break;
        case "Papa":
            Producto.nombre = prod;
            Producto.cantidad = 20;
            Producto.precio = 1.0;
            crear(Producto, data, cant);
            break;
        case "Azúcar":
            Producto.nombre = prod;
            Producto.cantidad = 100;
            Producto.precio = 2.0;
            crear(Producto, data, cant);
            break;
        case "Queso":
            Producto.nombre = prod;
            Producto.cantidad = 50;
            Producto.precio = 3.0;
            crear(Producto, data, cant);
            break;
        case "Sal":
            Producto.nombre = prod;
            Producto.cantidad = 50;
            Producto.precio = 3.0;
            crear(Producto, data, cant);
            break;
    }

}

function crear(prd, dat, cnt) {
    if (cnt >= 1) {
        
        i++;
        
        var total = prd.precio * cnt;
        
        var fila = "<tr><td>" + prd.nombre + "</td><td>" + cnt + "</td><td>" + prd.precio + "</td><td>" + total + "</td><td><a href='#' onclick='editar(this)'><div id='edit'></div></td><td><a href='#' onclick='delets(this)'><div id='delet'></div></td></tr>";

        var fil = document.createElement("tr");
        fil.innerHTML = fila;
        dat.appendChild(fil);

        limpiar();

    } else if (cnt < 1) {
        alert("Debe agregar la cantidad");
    }
}

function delets(p) {

    var opcion = confirm("¿Desea Eliminar?");
    if (opcion == true) {
        var y = p.parentNode.parentNode.rowIndex;
        for (var j = y + 1; j < document.getElementById("data").rows.length; j++) {
            data.rows[j].cells[0].innerText = j - 1;
        }
        document.getElementById("data").deleteRow(y);
        i--;
        mensaje("Registro Eliminado correctamente");
    } else {
        mensaje("Registro no se eliminó");
    }
}


function limpiar() {
    document.getElementById("cant").value = "";
}

function editar(p) {
    ri = p.parentNode.parentNode.rowIndex;
    document.getElementById("prod").value = document.getElementById("data").rows[ri].cells[0].innerText;
    document.getElementById("data").rows[ri].cells[0].innerText = "";
    document.getElementById("cant").value = document.getElementById("data").rows[ri].cells[1].innerText;
    document.getElementById("data").rows[ri].cells[1].innerText = "";
    document.getElementById("data").rows[ri].cells[2].innerText = "";
    document.getElementById("data").rows[ri].cells[3].innerText = "";
}