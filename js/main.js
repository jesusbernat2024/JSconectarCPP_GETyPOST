

document.getElementById('botonPrueba').onclick = async function (e) {
    nombre = "Juan";
    apellido = "Pérez";
    edad = 38;
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'n':nombre,
            'a':apellido,
            'e':edad
        })
    });
    data = await response.text();
    document.getElementById('resultado').innerHTML = decodeURI(data);
};
