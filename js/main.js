

document.getElementById('botonPrueba').onclick = async function (e) {
    nombre = "Juan";
    response = await fetch(`/cgi-bin/funciones.cgi?`);
    data = await response.text();
    document.getElementById('resultado').innerHTML = `Bienvenido, ${data}`;
};
