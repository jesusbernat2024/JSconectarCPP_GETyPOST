

document.getElementById('registroUsuario').onsubmit = async function (e) {
    e.preventDefault();

    usuario = document.getElementById('usuario').value;
    contra =  document.getElementById('contra').value;
    
    response = await fetch(`/cgi-bin/funciones.cgi`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'u':usuario,
            'c':contra
        })
    });
    data = await response.text();
    document.getElementById('resultado').innerHTML = decodeURI(data);
};
