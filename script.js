console.log("hello")

let bouton = document.querySelector("#bouton")
let motSaisie = document.querySelector("#texte")
let lettreDiv = document.querySelectorAll(".lettreDiv")
let mot = document.querySelector("#mot")
let image = document.querySelector("#success")
let lettre = document.querySelectorAll("#lettre")
let conteneur = document.querySelector("#conteneur")


const bdd =
    ["pomme", "homme", "femme", "prout", "sapin", "jouet", "chien", "sexes", "route", "neige"]

console.log(bdd)

function motAleatoire() {
    const rdm = Math.floor(Math.random() * bdd.length)
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
let compteur = 6



function comparateur(motSaisieA){
    for(let i=0 ; i<motSaisieA.length; i++){

        if(!splitMotGenere.includes(motSaisieA[i])){
            console.warn(motSaisieA[i],"n'est pas dans le mot")
            lettreDiv[i].style.backgroundColor = "red"
            if(!lettreMorte.includes(motSaisieA[i])){
                lettreMorte.push(motSaisieA[i])
            }console.log(lettreMorte)
        }
        if(splitMotGenere.includes(motSaisieA[i])){
            let goodLettre = splitMotGenere.indexOf(motSaisieA[i])
            if(goodLettre===motSaisieA.indexOf(motSaisieA[i])){
                console.warn(motSaisieA[i],"est dans le mot et bien placé")
                lettreDiv[i].style.backgroundColor = "green"  
            }
            else{
                console.warn(motSaisieA[i],"est dans le mot mais pas bien placé")
                lettreDiv[i].style.backgroundColor = "yellow"
            }
        }
    }
    nbTentatives()
    lettreFail()
    success()
}

function lettreFail (){
    // si la div existe déjà, je la supprime pour ne pas additioner les lettres
    const lettreMorteExistante = document.querySelector('.lettre-morte')
    if(lettreMorteExistante){
        conteneur.removeChild(lettreMorteExistante)
    }
    let lettreMorteDiv = document.createElement("div")
    conteneur.appendChild(lettreMorteDiv)
    lettreMorteDiv.classList.add('lettre-morte')
    lettreMorteDiv.style.display = "flex"
    lettreMorteDiv.style.justifyContent = "center"
    lettreMorteDiv.style.alignSelf = "center"
    lettreMorteDiv.style.borderRadius = "5px"
    lettreMorteDiv.style.border = "1px solid black"
    lettreMorteDiv.style.backgroundColor = "red"
    lettreMorteDiv.style.margin = "100px"
    lettreMorteDiv.style.textAlign = "center"
    lettreMorteDiv.style.width = "300px"
    lettreMorteDiv.style.fontSize = "X-large"
    lettreMorteDiv.textContent = lettreMorte
}

// bouton.addEventListener("click", valideSaisie)



function nbTentatives(){
    compteur--
    bouton.textContent="plus que "+compteur+" tentatives !!"
    if(compteur==0){
        bouton.textContent="you lose try again??"
    }
    
}    

function success(){
    if(motSaisie.value==motGenere){
        image.src="img/gifsuccess.gif"
        let lettreMorteDiv2 = document.querySelector(".lettre-morte") 
        conteneur.removeChild(lettreMorteDiv2)
        bouton.textContent = "yes zir!!"
        bouton.style.backgroundColor = "#6b9080"
        bouton.style.color ="white"
        
    }
}


function reset(){
        compteur=0
        motAleatoire()
        valideSaisie()
        comparateur(motSaisieA)
    
}

function verifMot(mot){
    let regex = /[aA-zZ]/g
    if(mot.match(regex)==null){
        console.log("veuillez saisir un mot valide")
    }
}

verifMot("coucoé")

/*let input = document.querySelector("#boutonValider");

motSaisie.addEventListener("keypress", function (event) {
    if (event.key === 13) {
        document.getElementById("bouton").click()
        console.log("enter",event.key)
        event.preventDefault();
    }
})*/
