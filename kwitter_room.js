
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDQ46Fi9abg9y2soG0hIJ6rb0IXWHji3LA",
      authDomain: "qwitter-1.firebaseapp.com",
      databaseURL: "https://qwitter-1-default-rtdb.firebaseio.com",
      projectId: "qwitter-1",
      storageBucket: "qwitter-1.appspot.com",
      messagingSenderId: "88052887652",
      appId: "1:88052887652:web:230bf3514ca788f8a46f71"
    };
    
    // Initialize "user_name"
    firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = 'Welcom ' + user_name;

function addRoom(){
   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
     purpose : "Adding Room Name"
   });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
}