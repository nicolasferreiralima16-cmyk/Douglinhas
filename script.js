
// Configurar a data da abertura (Exemplo: 11 de Junho de 2026)
const worldCupDate = new Date("June 11, 2026 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = worldCupDate - now;

    // Cálculos de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inserir nos elementos HTML
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Se a data já passou
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "A COPA COMEÇOU!";
    }
}

// Atualiza a cada 1 segundo
setInterval(updateCountdown, 1000);

// Iniciar ao carregar
updateCountdown();
