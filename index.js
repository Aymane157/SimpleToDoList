let tab=[];
function fun(){
    let s=document.getElementById("Add");
    let l=document.getElementById("list");
    const n=document.createElement('li');


    n.innerHTML=`<span>${s.value}</span>
<button class="c">Delete</button>

<input class="d" type="checkbox" ><hr>`;
    l.appendChild(n);
    let deleteButton = n.querySelector('.c');
    deleteButton.addEventListener('click', function () {
        n.remove(); // Supprimer l'élément <li> actuel
        let p = n.querySelector('span').innerText;
        for(let i in tab) {
            if (tab[i] === p) {
                tab.splice(i, 1); // Supprimer l'élément du tableau car c un string sinn tab.remove pr un int
            }
        }
    });

    // Réinitialiser le champ de saisie
    s.value = "";
}

document.getElementById("but").addEventListener("click", function(){
    let s=document.getElementById("Add")
    if(s.value===""){
        alert("Please enter a valid task");

    }
    else{
        let p=check(s.value);
        if(p===true) return;
        tab.push(s.value);

        fun();
    }
});
function check(val){
    let d=false;
  for(let i in tab){
      if(tab[i]===val){
          alert("ya deja la valeur");
          d=true;
          break;

      }
  }
  return d;
}
