const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};

document.addEventListener('DOMContentLoaded', () => {
    const liste = document.querySelector('#liste-ateliers');

config.ateliers.forEach((atelier)=>{
if(atelier.places>0){
    const label = document.createElement('label')
  label.className="carte-choix";
    const input=document.createElement('input');
    input.type="radio";
    input.name="atelier"
    input.value = atelier.id; 
     const spanT = document.createElement('span');
    const strong=document.createElement('strong')
    strong.className='atelier-titre';
    strong.textContent=atelier.titre;
    const span=document.createElement('span')
    span.className='atelier-places detail';
   span.textContent= `${atelier.places} places disponibles`;

spanT.appendChild(strong)
spanT.appendChild(span)
label.appendChild(input)
label.appendChild(spanT)

   liste.appendChild(label) 
 } 
}); 
 const champ = document.querySelector('#champ-campus');
const champmail = document.querySelector('#champ-email');
const email = document.querySelector('#email');
 const liste1=docement.querySelector('#liste-modes')
config.modes.forEach((mode)=>{
  const lebal1=document.createElement('lebal');
  lebal1.className="carte-choix";
  const input2=document.createElement('input')
  input2.type = "radio"; 
  input2.name = "mode";

  const span1 = document.createElement('span');
  span1.className = "mode-libelle";
  
  lebal1.appendChild(input2);
  lebal1.appendChild(span1);
  liste1.appendChild(lebal1);
});

 })