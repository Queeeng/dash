//Register
const Requestpayoutform = document.querySelector("#Requestpayout_form");
console.log(Requestpayoutform);
Requestpayoutform.addEventListener("submit", e => {
  e.preventDefault();
 
 firebase.auth().onAuthStateChanged(user => {
     if (user) {
      console.log(user.uid);
      var In  = user.uid;
      console.log(In);
      async function  createNewAccount()  {
        try{
            var user  ={
           bank: Requestpayoutform["bank"].value,
           eth:  Requestpayoutform["eth"].value,
           btc:  Requestpayoutform["btc"].value,
            };
            function  showMessage(){
              document.querySelector("#alet").style.display="block";
              
      
              Requestpayoutform.reset();

              setTimeout(()=>{
                
              },3000);
            }
            showMessage();
            db.ref("Request Payout/"+In)
            .set(JSON.parse(JSON.stringify(user)))
            .catch(error=>{
              console.log(error.message);
            });
            firebase
            .database()
            .ref("Request Payout/"+ In)
            .on("value",  snap  =>  {
              console.log(snap.val());
            });

        }   catch(error){
          console.log(error.message);
        };
        };
         auth.onAuthStateChanged(user=>{
          if(user){
            db.ref("Request Payout/"+In)
            .on("value",  snap=>{
              tbody.innerHTML=  snap.val();
              console.log(snap.val());
            });
          };
        });
        function  getUserData(uid)  {}
          createNewAccount();
          getUserData(user.uid);
          console.log(user.email);
      };
 });
 
 });