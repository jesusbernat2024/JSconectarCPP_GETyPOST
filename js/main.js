

document.getElementById('botonPrueba').onclick = async function (e) {
    nombre = "Juan";
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'n':nombre
        })
    });
    data = await response.text();
    document.getElementById('resultado').innerHTML = data;
};
