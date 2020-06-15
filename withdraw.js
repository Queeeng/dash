const Requestpayoutform = document.querySelector("#Requestpayout_form");
Requestpayoutform.addEventListener("submit", e => {
    e.preventDefault();
    console.log(Requestpayoutform);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid);
            var In = user.uid;
            console.log(In);

            async function createNewAccount() {
                try {
                    var user = {
                         showMessage() {
                            //Show Alert
                            document.querySelector(".alet").style.display = "block";
                    Requestpayoutform.reset();
                    //Hide Alert
                    setTimeout(() => {
                        document.querySelector(".alet").style.display = "none";
                    }, 3000);
                    showbutton();}, 3000);
                    function    showbutton(){
                        //Show Alert
                        document.querySelector(".alet").style.display = "block";
                    }
    showMessage();

    db.ref("Withdrawal/" + In)
        .child(ID)
        .set(JSON.parse(JSON.stringify(user)))

        .catch(error => {
            console.log(error.message);
        });
                }
                firebase
        .database()
        .ref("Request Payout/" + In)

        .on("value", snap => {
            console.log(snap.val());
        });
        } catch (error) {
    console.log(error.message);
}
      }
          }
          
        };