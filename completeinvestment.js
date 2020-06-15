var completeinvestment = document.querySelector("#completeinvestment");

var status = document.getElementById("fds");
console.log(String(status.innerHTML));

var Investment_ID = document.querySelector("#Investment-ID");

var Investment_Plan = document.querySelector("#Investment-Plan");
var Investment_Capital = document.querySelector("#Investment-Capital");
var ROI_Model = document.querySelector("#ROI-Model");
var Initiated_on = document.querySelector("#Initiated-on");
var Funding_Medium = document.querySelector("#Funding-Medium");
var change_funding_medium = document.querySelector("#medium");
var ind_inv_cap = document.querySelector("#ind_inv_cap");
console.log(document.getElementById("fds"));
auth.onAuthStateChanged(user => {
  if (user) {
    firebase
      .database()
      .ref("Investments/" + user.uid)
      .on("value", snap => {
        completeinvestment.innerHTML =
          "Complete Investment -" + snap.val().Investment_plan + " " + user.uid;
        status.innerHTML = snap.val().Status;
        Investment_ID.innerHTML = user.uid;
        Investment_Plan.innerHTML = snap.val().Investment_plan;
        Investment_Capital.innerHTML = "$" + snap.val().Invest_capital;
        ROI_Model.innerHTML = snap.val().ROI_modl;
        console.log(snap.val().ROI_Modl);
        Funding_Medium.innerHTML = snap.val().Depost_id;
        change_funding_medium.innerHTML =
          "Change Funding Medium -" +
          " " +
          snap.val().Investment_plan +
          " " +
          user.uid;
        ind_inv_cap.innerHTML =
          "Indicate Investment Capital Funding -" +
          snap.val().Investment_plan +
          " " +
          user.uid;
        console.log(snap.val().Status);
      });
  }
});

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

var dt = new Date();
document.getElementById("datetime").innerHTML =
  ("0" + dt.getDate()).slice(-2) +
  "." +
  ("0" + (dt.getMonth() + 1)).slice(-2) +
  "." +
  dt.getFullYear() +
  " " +
  ("0" + dt.getHours()).slice(-2) +
  ":" +
  ("0" + dt.getMinutes()).slice(-2);
