const sidebar = document.getElementById('sidebar');
const relogio = document.getElementById('relogio');
const cronDisplay = document.getElementById('Cron-p');
const playBtn = document.getElementById('play_btn');
const resetBtn = document.getElementById('reset_btn');
const cronContainer = document.getElementById('Cron-d');
const btnP = document.getElementById('btn-p');
const btnB = document.getElementById('btn-b');

document.getElementById('open_btn').addEventListener('click', function () {
    sidebar.classList.toggle('open-sidebar');
    relogio.classList.toggle('open-relogio');
});

let cronometro;
let tempo = 0;
let ativo = false;

// Função para atualizar o display
function atualizarDisplay() {
    cronDisplay.textContent = tempo.toFixed(1);
}

// Função para mudança de cor de fundo.
function aplicarEstiloCronometro(ativo) {
    if (ativo) {
        cronContainer.style.border = '5px solid #426B36';
        cronContainer.style.backgroundColor = '#81D169';
        document.body.style.background = '#E5F4C1';
        sidebar.style.background = '#0DA128';
        btnP.style.background = '#81D169';
        btnB.style.background = '#81D169';
    } else {
        cronContainer.style.border = '5px solid #c7804d';
        cronContainer.style.backgroundColor = '#E19055';
        document.body.style.background = '#F4E1C1';
        sidebar.style.background = '#e49921';
        btnP.style.background = '#E19055';
        btnB.style.background = '#E19055';
    }
}

function iniPasCronometro() {
    if (!ativo) {
        cronometro = setInterval(() => {
            tempo += 0.1;
            atualizarDisplay();
        }, 100);
        ativo = true;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        clearInterval(cronometro);
        ativo = false;
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    
    // Chama a função de estilo, nesse caso quando ativo.
    aplicarEstiloCronometro(ativo);
}

function resetarCronometro() {
    clearInterval(cronometro);
    tempo = 0;
    ativo = false;
    atualizarDisplay();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    
    // Chama a função de estilo, nesse caso quando pausado.
    aplicarEstiloCronometro(ativo);
}

// Eventos
playBtn.addEventListener('click', iniPasCronometro);
resetBtn.addEventListener('click', resetarCronometro);
