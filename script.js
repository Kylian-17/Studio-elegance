document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  if (!form) return;
  var name = document.getElementById("name");
  var mail = document.getElementById("mail");
  var msg = document.getElementById("msg");
  if (name) name.maxLength = 100;
  if (mail) mail.maxLength = 254;
  if (msg) msg.maxLength = 2000;
  form.addEventListener("submit", function (verif) {
    verif.preventDefault();
    var n = name ? name.value.trim() : "";
    var m = mail ? mail.value.trim() : "";
    var t = msg ? msg.value.trim() : "";
    if (n === "") {
      alert("Veuillez saisir votre nom.");
      if (name) name.focus();
      return;
    }
    if (m.indexOf("@") === -1 || m.indexOf(".") === -1) {
      alert("Veuillez saisir un e-mail valide.");
      if (mail) mail.focus();
      return;
    }
    if (t.length < 10) {
      alert("Le message doit contenir au moins 10 caractères.");
      if (msg) msg.focus();
      return;
    }
    alert("Merci, votre message a été envoyé.");
    form.reset();
  });
});
