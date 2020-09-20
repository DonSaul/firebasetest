

   var firebaseConfig = {
    apiKey: "AIzaSyB3rxVzicY3gAoG99tz6WkB4lsMiia29YE",
    authDomain: "test-aad01.firebaseapp.com",
    databaseURL: "https://test-aad01.firebaseio.com",
    projectId: "test-aad01",
    storageBucket: "test-aad01.appspot.com",
    messagingSenderId: "735788854897",
    appId: "1:735788854897:web:5b4ad77f7aaa0fdc7e35d0",
    measurementId: "G-V2EL1T66DC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var uploader = document.getElementById("uploader");
  var fbutton =  document.getElementById("file");
  
  fbutton = addEventListener("change",function(e){
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref("examen/" + file_name);
    
    storageRef.put(file);
    task.on("state_changed",
    function progress(snapshot){
 var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
 uploader.value= percentage;


    },
    function error(err){},
    
    
    function complete(){}    
    
    
    )});