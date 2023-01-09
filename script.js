console.log("hello")

let bouton = document.querySelector("#bouton")
let motSaisie = document.querySelector("#texte")
let lettreDiv = document.querySelectorAll(".lettreDiv")


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
            lettreMorte.push(motSaisieA[i])
            console.log(lettreMorte)
        }else{
            let goodLettre = splitMotGenere.indexOf(motSaisieA[i])
            if(goodLettre===motSaisieA.indexOf(motSaisieA[i])){
                console.warn(motSaisieA[i],"est dans le mot")
                lettreDiv[i].style.backgroundColor = "green"  
            }else{
                console.warn(motSaisieA[i],"n'est pas bien placé")
                lettreDiv[i].style.backgroundColor = "yellow"
            }
        }
        
    }
}



/*function separateur (){
    let splitBddA
    //let splitBddB
    for(let i=0; i<splitBdd.length; i++){
    splitBddA = splitBdd[i]
    console.log(splitBddA)
        /*for(let j=0; j<splitBddA.length; j++){
            let splitBddB= splitBddA[j]
        console.log(splitBddB)
        
        }
    }
    return splitBddA
}

let motGenereSplit = separateur()
console.log(motGenereSplit)*/
