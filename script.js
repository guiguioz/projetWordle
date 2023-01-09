console.log("hello")

let bouton = document.querySelector("#bouton")
let motSaisie = document.querySelector("#texte")
let lettreDiv = document.querySelectorAll("#lettreDiv")
let lettre = document.querySelectorAll("#lettre")
let valider = document.querySelector("#boutonValider")

const bdd =
    ["pomme", "homme", "femme", "prout", "sapin", "jouet", "chien", "sexes", "route", "neige"]

console.log(bdd)

function motAleatoire() {
    const rdm = Math.floor(Math.random() * bdd.length)
    console.log(rdm)
    return bdd[rdm]
}
const motGenere = motAleatoire()
console.log(motGenere)

// bouton.addEventListener("click", valideSaisie)

const newd = bdd.map(x => x.split(''));
console.log(newd)


let input = document.querySelector("#boutonValider");
motSaisie.addEventListener("keypress", function (event) {
    if (event.key === 13) {
        document.getElementById("boutonValider").click()
        console.log("enter",event.key)
        // event.preventDefault();
        // document.querySelector("#boutonValider").click();
    }
})