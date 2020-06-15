var Investmentcapital = document.querySelector("#hhh");
var totalunfunded = document.querySelector("#td21");
var totalpending = document.querySelector("#td22");
var totalactive = document.querySelector("#td23");

var stat = document.getElementById("hhh33");
var hgg = document.querySelector("#hhh33");

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in: ", user.email);
    firebase
      .database()
      .ref("Investments/" + user.uid)
      .on("value", snap => {
        Investmentcapital.innerHTML = "$" + snap.val().Invest_capital;
        var status = document.querySelector("#hhh33");

        status.innerHTML = snap.val().Status;

        var chosenplan = document.querySelector("#hh");
        chosenplan.innerHTML = snap.val().Investment_plan + " " + user.uid;
        totalunfunded.innerHTML = "$" + snap.val().Total_unfunded;
        totalpending.innerHTML = "$" + snap.val().Total_pending_funding;
        totalactive.innerHTML = "$" + snap.val().Total_Active;
        console.log(String(status.innerHTML));
        Statusstate = String(status.innerHTML);
      });
  } else {
    console.log("user logged out");
  }
});
