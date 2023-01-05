console.log("hello")

let instruction = document.querySelector("#instruction")
let bouton = document.querySelector("#bouton")
let motSaisie = document.querySelector("#mot")
let lettreDiv = document.querySelectorAll("#lettreDiv")
let lettre = document.querySelectorAll("#lettre")

const bdd = 
    "pomme,homme,femme,prout,sapin,jouet,chien,sexes,route,neige"

console.log(bdd)

let dico = bdd.split(',')

console.log(dico[3])


for (let i = 0; i < dico.length; i++) {
    Math.floor(Math.random()*dico[i])
    }




