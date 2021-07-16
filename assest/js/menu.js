const menu = document.querySelector('.menu');
const bars = document.querySelector('.bars');
const times = document.querySelector('.times');


function ocultaMenu (){
    menu.style.display = 'none';   
}

function abreMenu () {
    menu.style.display = 'flex';   
}


bars.addEventListener ('click', function (e) {
    abreMenu();
    bars.style.display = "none";
    times.style.display = "flex";
});

times.addEventListener ('click' , function (e) {
    ocultaMenu();
    times.style.display = 'none';
    bars.style.display = 'flex';
    document.location.reload(true);
    times.style.display = 'none';
});