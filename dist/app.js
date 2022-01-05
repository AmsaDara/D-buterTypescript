"use strict";
var _a;
(_a = document.getElementById("_button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const type = document.getElementById("_type");
    const type_1 = type.value;
    const montant = document.getElementById("_montant");
    const montant_1 = montant.value;
    const motif = document.getElementById("_motif");
    const motif_1 = motif.value;
    const p = document.createElement("ul");
    var elt = document.getElementById("division");
    elt === null || elt === void 0 ? void 0 : elt.appendChild(p);
    p.innerHTML = `<li>${type_1}</li>
    <li>${montant_1}</li>
    <li>${motif_1}</li><br>`;
});
