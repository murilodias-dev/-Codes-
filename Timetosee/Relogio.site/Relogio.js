let h = document.getElementById("clch");
let m = document.getElementById("clcm");
let s = document.getElementById("clcs");
let ch = document.getElementById("circle1");
let cm = document.getElementById("circle2");
let cs = document.getElementById("circle3");

const relogio = setInterval(function time() {
    let data = new Date();
    let hora = data.getHours();
    let minu = data.getMinutes();
    let segu = data.getSeconds();

    h.innerHTML = hora;
    m.innerHTML = minu;
    s.innerHTML = segu;

    if(hora >= 0 && hora <= 4){
        document.body.style.background = "#00BFFF"; 
        ch.style.boxShadow = "0 0 0 10px #00BFFF, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cm.style.boxShadow = "0 0 0 10px #00BFFF, 0 0 0 20px rgb(255, 255, 255)"; 
        
        cs.style.boxShadow = "0 0 0 10px #00BFFF, 0 0 0 20px rgb(255, 255, 255)";
    } 
    else if (hora >= 4 && hora <= 8){
        document.body.style.background = "#4169E1"; 
        ch.style.boxShadow = "0 0 0 10px #4169E1, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cm.style.boxShadow = "0 0 0 10px #4169E1, 0 0 0 20px rgb(255, 255, 255)"; 
        
        cs.style.boxShadow = "0 0 0 10px #4169E1, 0 0 0 20px rgb(255, 255, 255)";
    } 
    else if (hora >= 8 && hora <= 12){
        document.body.style.background = "#4682B4"; 
       
        ch.style.boxShadow = "0 0 0 10px #4682B4, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cm.style.boxShadow = "0 0 0 10px #4682B4, 0 0 0 20px rgb(255, 255, 255)"; 
        
        cs.style.boxShadow = "0 0 0 10px #4682B4, 0 0 0 20px rgb(255, 255, 255)";
    } 
    else if (hora >= 12 && hora <= 16){
        document.body.style.background = "#00008B";
        ch.style.boxShadow = "0 0 0 10px #00008B, 0 0 0 20px rgb(255, 255, 255)"; 
        
        cm.style.boxShadow = "0 0 0 10px #00008B, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cs.style.boxShadow = "0 0 0 10px #00008B, 0 0 0 20px rgb(255, 255, 255)";
    } 
    else if (hora >= 16 && hora < 20){
        document.body.style.background = "#191970";  
        ch.style.boxShadow = "0 0 0 10px #191975, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cm.style.boxShadow = "0 0 0 10px #191970, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cs.style.boxShadow = "0 0 0 10px #191970, 0 0 0 20px rgb(255, 255, 255)";
    } 
    else {
        document.body.style.background = "#000000";  
        ch.style.boxShadow = "0 0 0 10px #000000, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cm.style.boxShadow = "0 0 0 10px #000000, 0 0 0 20px rgb(255, 255, 255)"; 
       
        cs.style.boxShadow = "0 0 0 10px #000000, 0 0 0 20px rgb(255, 255, 255)"; 
    }
})  

document.getElementById('open_btn').addEventListener('click', function () { 
    document.getElementById('sidebar').classList.toggle('open-sidebar');
}); 

document.getElementById('open_btn').addEventListener('click', function () { 
    document.getElementById('relogio').classList.toggle('open-relogio');
});  

