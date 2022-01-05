document.getElementById("_button")?.addEventListener("click",function(){
    const type = <HTMLInputElement> document.getElementById("_type");
    const type_1 = type.value;
    const montant = <HTMLInputElement> document.getElementById("_montant");
    const montant_1= montant.value
    const motif = <HTMLInputElement> document.getElementById("_motif");
    const motif_1 = motif.value;
    
    const p = document.createElement("ul");
    var elt = document.getElementById("division");
    
    elt?.appendChild(p);
    p.innerHTML = `<li>${type_1}</li>
    <li>${montant_1}</li>
    <li>${motif_1}</li><br>`;
    
    
    
});