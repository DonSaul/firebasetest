const db = firebase.firestore();
function myFunction() {
   var x = document.getElementById("main");
   if (x.style.display === "block") {
     x.style.display = "none";
   
   } else {
     x.style.display = "block";

   }
 }