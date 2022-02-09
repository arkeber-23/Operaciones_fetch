const formulario = document.getElementById('datos')
const p = document.getElementById('p')


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    //creo un json con los datos que necesito
    const dt = {
        num1: datos.get('num1'),
        num2: datos.get('num2'),
        selector: datos.get('selector')
    }
    const url = 'https://ebercabezas.000webhostapp.com/htdocs/server/servidor.php'
    const fetc = async() => {
        try {
            const data = await fetch(url, {
                method: 'POST',
                //transformo la variable en json
                body: JSON.stringify(dt),
            })
            const res = await data.json()
            if (res != null) {
                p.textContent = `El resultado es: ${res['datos']}`
            }

        } catch (error) {
            console.log(error)
        }


    }
    fetc()
})