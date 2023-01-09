console.log("hello")

let bouton = document.querySelector("#bouton")
let motSaisie = document.querySelector("#texte")
let lettreDiv = document.querySelectorAll("#lettreDiv")
let lettre = document.querySelectorAll("#lettre")


const bdd = 
    ["pomme","homme","femme","prout","sapin","jouet","chien","sexes","route","neige"]

console.log(bdd)

function motAleatoire(){
    const rdm = Math.floor(Math.random()*bdd.length)
    console.log(rdm)
    return bdd[rdm]
}
const motGenere = motAleatoire()
console.log(motGenere)

bouton.addEventListener("click",valideSaisie)

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        console.log('Enter is pressed!');
    }
});
 
document.getElementById("submit").onclick = function() {
    alert('Clicked!');
}

function valideSaisie(){
    motSaisie.value = lettre[0].textContent
}


const newd = bdd.map(x => x.split(''));
console.log(newd)


function remplissage(){

}
