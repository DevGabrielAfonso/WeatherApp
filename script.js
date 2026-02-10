document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
})

async function getWeather() {
    const cidade = document.getElementById("cidade").value;
    if (cidade.trim() == ""){
    } else {
    const url = `https://weatherapp-backend-ursz.onrender.com/clima?cidade=${cidade}`;

    const response = await fetch(url);
    const data = await response.json();

    const hora = new Date()

    const resultadoCidade = document.getElementById("resultado_head");
    const resultadoTemp = document.getElementById("temperatura");
    const resultadoSens = document.getElementById("sensacao");
    const resultadoVento = document.getElementById("vento");
    const resultadoClima = document.getElementById("clima");
    const resultadoHumidade = document.getElementById("umidade");

        if (response.ok == true){
            resultadoCidade.innerHTML = `Exibindo resultados para: ${data.name}`;
            resultadoTemp.innerHTML = `Temperatura: ${data.main.temp}°C`
            resultadoSens.innerHTML = `Sensação térmica: ${data.main.feels_like}°C`
            resultadoVento.innerHTML = `Vento: ${data.wind.speed} Km/h`
            resultadoClima.innerHTML = `Clima: ${data.weather[0].description}`
            resultadoHumidade.innerHTML = `Umidade: ${data.main.humidity}%`
            
            console.log(data.name)
        } else {
            resultadoCidade.innerHTML = "Cidade não encontrada."
            resultadoTemp.innerHTML = ``
            resultadoSens.innerHTML = ``
            resultadoVento.innerHTML = ``
            resultadoClima.innerHTML = ``
            resultadoHumidade.innerHTML = ``
        }
    }

}

