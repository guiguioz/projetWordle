console.log("hello")

let bouton = document.querySelector("button")
let motSaisie = document.querySelector("#texte")
let lettreDiv = document.querySelectorAll(".lettreDiv")
let lettre = document.querySelectorAll(".lettre")
let lettre1 = document.querySelector("#lettre1")

const bdd = 
    ["pomme","homme","femme","prout","sapin","jouet","chien","sexes","route","neige"]

console.log(bdd)

function motAleatoire(){
    const rdm = Math.floor(Math.random()*bdd.length)
    console.log(rdm)
    return bdd[rdm]
}
let motGenere = motAleatoire()
console.log(motGenere)

bouton.addEventListener("click",valideSaisie)


function valideSaisie(){
    let motSaisieA = motSaisie.value.split('')
    for(let i=0; i<motSaisieA.length; i++){
   console.log(motSaisieA)
   lettre[i].value = motSaisieA[i]
    } 
 
}

let splitBdd = bdd.map(x => x.split(''));
motGenere = splitBdd
console.log(motGenere)

function comparateur(){
    motGenere[1] = motSaisie[1]
}


