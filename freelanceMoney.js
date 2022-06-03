function CalculGain() {
  //on récupère le formulaire dans html

  let myForm = document.getElementById("FormCalculGain");

  //on transform en objet form datqa

  let formObj = new FormData(myForm);

  // on récupère les valeur des input
  let prixAchat = formObj.get("prixAchat");
  let prixVendu = formObj.get("PrixVendu");
  let prixVendu1 = Number(prixVendu);
  let qVendu = formObj.get("qteVendu");
  let chargesocial = formObj.get("chargesUrssaf");
  let chargesocial1 = Number(chargesocial);
  let tarifExpeditionAcheteur = formObj.get("TexAcheteur");
  let tarifExpeditionAcheteur1 = Number(tarifExpeditionAcheteur);
  let tarifExpeditionVendeur = formObj.get("TexVendeur");
  let tarifExpeditionVendeur1 = Number(tarifExpeditionVendeur);
  let chargesToMark = formObj.get("chargesMark");
  let chargesToMark1 = Number(chargesToMark);
  let chargesMaRKCoPrix = formObj.get("chargesCommissionPrixFinal");
  let chargesMaRKCoPrix1 = Number(chargesMaRKCoPrix);

  //le calcul
  let chargeMarketPlace = (chargesToMark1 * prixVendu1) / 100;
  let taxvingtSurCharge = (20 * chargesToMark1 * prixVendu1) / (100 * 100);
  let chargeCoPrix = (chargesMaRKCoPrix1 * 20) / 100;

  let chargeTotMarket =
    chargeCoPrix + chargeMarketPlace + chargesMaRKCoPrix1 + taxvingtSurCharge;

  let chargeUrssaf =
    (chargesocial1 / 100) * (prixVendu1 + tarifExpeditionAcheteur1);

  let chargeADeduire = chargeTotMarket + chargeUrssaf;

  let totalBrut = tarifExpeditionAcheteur1 + prixVendu1 * qVendu;

  let totalNet =
    totalBrut - prixAchat - chargeADeduire - tarifExpeditionVendeur1;

  document.getElementById("resultaBrut").innerText = totalBrut.toFixed(2) + "€";
  document.getElementById("Adeduire").innerText =
    chargeADeduire.toFixed(2) + "€";
  document.getElementById("resultaNet").innerText = totalNet.toFixed(2) + "€";
}

//Ajout des évènements
let btn = document.getElementById("buttonValidation");
btn.addEventListener("click", CalculGain);

let mesInputs = document.querySelectorAll(
  " input.form-control, input.buttonRadio   "
);

mesInputs.forEach((monInput) => {
  monInput.addEventListener("keyup", CalculGain);
  monInput.addEventListener("change", CalculGain);
});
CalculGain();

