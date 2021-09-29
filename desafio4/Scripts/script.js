// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

//Crianças valem por 0,5


function calcular(){
    var n_adultos = document.getElementById("numeroA").value;
    var n_criancas = document.getElementById("numeroC").value;
    var n_duracao = document.getElementById("duracao").value;
    var n_carne;
    var n_cerveja;
    var n_ra;

    if (n_duracao >= 6){
        n_carne= n_duracao * (n_adultos * 650 ) + (n_duracao / 2) * (n_criancas * 650);
        n_cerveja = n_duracao * (n_adultos * 2000);
        n_ra = (n_adultos * 1500) +(n_criancas * 1500 * 0.5);
    }
    else{
        n_carne= n_duracao * (n_adultos * 400 ) + (n_duracao / 2) * (n_criancas * 400);
        n_cerveja = n_duracao *(n_adultos * 1200);
        n_ra = n_duracao *(n_adultos * 1000) + (n_duracao / 2) * (n_criancas * 1000);
    }

    document.getElementById('carne').innerHTML = n_carne + "gr de carne"
    document.getElementById('cerveja').innerHTML = n_cerveja + "ml de cerveja"
    document.getElementById('ra').innerHTML = n_ra + "ml de refrigerante/agua"

}