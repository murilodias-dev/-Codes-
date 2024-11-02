const restart = document.getElementById('restart-b');
const play = document.getElementById('start-b'); 
const num = document.getElementById('tim-t'); 
const dplay = document.getElementById('start'); 
const drestart = document.getElementById('restart'); 
const dtim = document.getElementById('tim'); 


document.getElementById('open_btn').addEventListener('click', function () { 
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});  

let timer; 
let tim = false;  


function atualizarDisplay(value) {
    num.value = value.toFixed(1);
}


function startTimer(){  
    if (!tim) {
        let number = parseFloat(num.value);
        

        if (isNaN(number) || number <= 0) {
            alert("Por favor, insira um valor válido no timer.");
            return;
        } 
        
        if(num.value >= 99999){
            num.style.fontSize = "25px";
        }
        if (num.value >= 99999999999999999 ) {
            alert("Limite de caracteres alcançado!");
            num.value = "" ;
            num.style.fontSize = "50px"
            return; 
        }

        if(num.value >= 99999999999){
            num.style.fontSize = "20px";
        }
        
      
    tim = true; 
    atualizarDisplay(number); 

    timer = setInterval(() => {
        number -= 0.1;
        if (number <= 0){
            clearInterval(timer);
            tim = false;
            number = 0;
            atualizarDisplay(number);
            alert("Tempo esgotado!"); 
            play.innerHTML = '<i class="fa-solid fa-play"></i>'; 
            return;
        }
        atualizarDisplay(number);}, 100);
        tim = true;
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        clearInterval(timer);
        tim = false;
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}


function restartTimer(){
    clearInterval(timer);
    tim = false;
    num.value = 0;  
    num.style.fontSize = "50px"
    play.innerHTML = '<i class="fa-solid fa-play"></i>'; 
}

play.addEventListener('click', startTimer); 
restart.addEventListener('click', restartTimer); 

////////////////////////////////////////////////////////////////////////////////////////////////// 

function prim(){
    document.body.style.background = 'linear-gradient(to bottom, #E59728, #AC137E)';
    sidebar.style.background = '#AA235E'; 
    dplay.style.background = '#AA235E'; 
    drestart.style.background = '#AA235E'; 
    dtim.style.background = '#831618'; 
    num.style.border = '10px solid #AA235E';  
    num.style.color = '#000000' 
    num.style.background = '#FFFFFF'
} 

function vera(){
    document.body.style.background = 'linear-gradient(to bottom, #5CAEF1, #D9AD82)';
    sidebar.style.background = '#E1B629'; 
    dplay.style.background = '#E1B629'; 
    drestart.style.background = '#E1B629'; 
    dtim.style.background = '#FFE8B8'; 
    num.style.border = '10px solid #E1B629'; 
    num.style.color = '#000000' 
    num.style.background = '#FFFFFF'
} 

function outo(){
    document.body.style.background = 'linear-gradient(to bottom, #DE1F1F, #BE721B)';
    sidebar.style.background = '#FFF8AE'; 
    dplay.style.background = '#CB5050'; 
    drestart.style.background = '#CB5050'; 
    dtim.style.background = '#FFE8B8'; 
    num.style.border = '10px solid #FFFFFF';  
    num.style.color = '#FFFFFF' 
    num.style.background = '#CB5050'
} 

function inve(){
    document.body.style.background = 'linear-gradient(to bottom, #7FC2F9, #C9E0F3)';
    sidebar.style.background = '#22A3FF'; 
    dplay.style.background = '#22A3FF'; 
    drestart.style.background = '#22A3FF'; 
    dtim.style.background = '#D7FFFF'; 
    num.style.border = '10px solid #22A3FF';  
    num.style.color = '#22A3FF' 
    num.style.background = '#FFFFFF'
}
