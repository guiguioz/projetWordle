console.log("hello")

let bouton = document.querySelector("#bouton")
let motSaisie = document.querySelector("#texte")
let lettreDiv = document.querySelectorAll(".lettreDiv")
let mot = document.querySelector("#mot")


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
        lettreDiv[i].textContent = motSaisieA[i]

        } 
    comparateur(motSaisieA)
}

let splitMotGenere = motGenere.split('')
console.log(splitMotGenere)

let lettreMorte =[]



function comparateur(motSaisieA){
    for(let i=0 ; i<motSaisieA.length; i++){

        if(!splitMotGenere.includes(motSaisieA[i])){
            console.warn(motSaisieA[i],"n'est pas dans le mot")
            lettreDiv[i].style.backgroundColor = "red"
            console.log(motSaisieA[i])
        
            if(lettreMorte.includes(motSaisieA[i])){
                const id = lettreMorte.indexOf(motSaisieA[i]);
                lettreMorte.splice(id, 1)
            }
            if(!lettreMorte.includes(motSaisieA[i])){
                lettreMorte.push(motSaisieA[i])
            }
        }
        if(splitMotGenere.includes(motSaisieA[i])){
            let goodLettre = splitMotGenere.indexOf(motSaisieA[i])
            if(goodLettre===motSaisieA.indexOf(motSaisieA[i])){
                console.warn(motSaisieA[i],"est dans le mot et bien placé")
                lettreDiv[i].style.backgroundColor = "green"  
            }else{
                console.warn(motSaisieA[i],"est dans le mot mais pas bien placé")
                lettreDiv[i].style.backgroundColor = "yellow"
            }
        }
     
    }

    
    lettreFail()
    lettreMorte = [];
}

function lettreFail (){
    let lettreMorteDiv = document.createElement("div")
    mot.appendChild(lettreMorteDiv)
    lettreMorteDiv.style.display = "block"
    lettreMorteDiv.style.borderRadius = "5px"
    lettreMorteDiv.style.border = "1px solid black"
    lettreMorteDiv.style.backgroundColor = "red"
    lettreMorteDiv.textContent = lettreMorte
}

