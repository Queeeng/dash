//Register
const Newinvestmentform = document.querySelector("#newinvestment_form");
Newinvestmentform.addEventListener("submit", (e) => 
  e.preventDefault();

  // feel free to change the object keys to match your data model
  //Get Users Info

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
      var In = user.uid;
      console.log(In);
      async function createNewAccount() {
        try {
          var user = {
            Investment: Newinvestmentform["Investment"].value,
            amount: Newinvestmentform["amount"].value,
            currency: Newinvestmentform["currency"].value
          };

          function showMessage() {
            //Show suc
            document.querySelector("#success").style.display = "block";

            Newinvestmentform.reset();

            //Hide AlerT
            setTimeout(() => {
              document.querySelector("#success").style.display = "none";
              showbutton();
              document.getElementById("success");
            }, 3000);
          }

          function showbutton() {
            //Show suc
            document.querySelector("#success").style.display = "block";
          }

          db.ref("Investments/" + In)
            .set(JSON.parse(JSON.stringify(user)))

            .catch(error) => {
              console.log(error.message);
            }

          showMessage();
          document.getElementById("newinvestment_form").submit();
          Newinvestmentform.reset();

          firebase
            .database()
            .ref("Investments/" + In)
            .on("value", (snap) => {
              console.log(snap.val().Invest_capital);
            });
        } catch (error) {
          console.log(error.message);
        }
      }

      function getUserData(uid) {}
      createNewAccount();

      getUserData(user.uid);
      console.log(user.email);
    }
  });
});
