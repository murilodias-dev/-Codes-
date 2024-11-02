document.getElementById('open_btn').addEventListener('click', function () { 
    document.getElementById('sidebar').classList.toggle('open-sidebar');
}); 

window.addEventListener('scroll', function() {
    if (window.scrollY > 700) { 
        window.scrollTo(0, 700); 
    }
}); 
