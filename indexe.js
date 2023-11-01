class Personne{
    nom;
    prenom;
    age;
    sexe;
    salaire;
    nbreCharge;
}
 const ALLOCATION = 150
 const BONUS = 100
 const impot = 0,18
 var inputs = document.querySelectorAll("input")
 var select = document.querySelector("select")
 var btn = document.querySelector("#bbtn")
 var btnSave = document.querySelector("#save")
 var affiche = document.querySelector("#affiche")
 var personne = new Personne
 var save = ()=>{
    personne.nom = inputs[0].value
    personne.prenom = inputs[1].value
    personne.age = inputs[2].value
    personne.sexe = select.value
    personne.salaireBrut = inputs[3].value
    personne.nbreCharge = inputs[4].value
    affiche.innerHTML =
    "<p>Nom: " + personne.nom + "</p> <p> prenom: " + personne.prenom + "</p> <p> Age : " + personne.age +
    "</P> <p> Sexe: " + personne.sexe + "</p> <p> Salaire : " + personne.salaireBrut + "</P> <p> Nombre de charge :" +
    personne.nbreCharge + "</p>";
 };
 btnSave.addEventListener("click" , save);
 var calcul = () =>{
    var reductImpot = 0
    const addons = chechBonus()
    if (personne.sexe==="Femme"){
        reductImpot= 0.02
    }
    if(personne.nbreCharge===3){
        reductImpot =0.01
    } else if(personne.nbreCharge>= 4){
        reductImpot = 0.02
    }
    personne.salaireNet =
    personne.salaireBrut - personne.salaireBrut * (IMPOT- reductImpot) - personne.salaireBrut * ASSURANCE -
    personne.salaireBrut * PENSION;
    personne.salaireNet += addons

    affiche.appendChild() 
 }