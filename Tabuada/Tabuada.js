function tabuada(){ 
let ium = document.getElementById("tbt1") 
let tab = document.getElementById("tabset")

if(ium.value.length == 0){
   window.alert("[ERROR] tente novamente.") 
}else{ 
   let i = Number(ium.value) 
   let n = 1   
   tab.innerHTML = ""
   
   while(n <= 10){ 
    let item = document.createElement('option')
    item.value = "" 
    item.text = `${i} x ${n} = ${i*n}` 
    tab.appendChild(item) 
    n++
   }
}
}  

function enter(){
let a = document.getElementById("btab") 
a.style.backgroundColor = 'white'; 
a.style.borderColor = "black"; 
a.style.color = "black";

} 

function leave(){
    var a = document.getElementById("btab") 
    a.style.backgroundColor = '#312e37';
    a.style.borderColor = 'white'; 
    a.style.color = 'white'; 
}
