const inicio = new Date(2022, 5, 4, 0, 0);
function atualizarContador() {

    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

   
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    
    if (horas < 0) {
        horas += 24;
        dias--;
    }

    // Ajusta dias
    if (dias < 0) {
        const ultimoDiaMesAnterior =
            new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();

        dias += ultimoDiaMesAnterior;
        meses--;
    }

    
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("years").textContent = anos;
    document.getElementById("months").textContent = meses;
    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);


const heartsContainer = document.getElementById("hearts");

function criarCoracao() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "♥";


    heart.style.left = Math.random() * 100 + "vw";

   
    const tamanho = Math.random() * 25 + 15;
    heart.style.fontSize = tamanho + "px";

   
    const duracao = Math.random() * 5 + 5;
    heart.style.animationDuration = duracao + "s";


    const cores = [
        "#ff1744",
        "#ff3158",
        "#ff4d6d",
        "#ff6b81",
        "#e60026"
    ];

    heart.style.color =
        cores[Math.floor(Math.random() * cores.length)];

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duracao * 1000);
}

setInterval(criarCoracao, 250);


for (let i = 0; i < 25; i++) {

    setTimeout(() => {
        criarCoracao();
    }, i * 100);
}
