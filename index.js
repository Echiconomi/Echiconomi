 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC0HdZsrWlmYiOLKUguXNr6yMAwGsmUt1g",
    authDomain: "form-96175.firebaseapp.com",
    projectId: "form-96175",
    storageBucket: "form-96175.appspot.com",
    messagingSenderId: "45957451317",
    appId: "1:45957451317:web:b448624e1c44ed25726b7c",
    measurementId: "G-J1GLQRGK8D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Your web app's Firebase configuration

  var firebaseConfig = {

//firebase config stuff

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

 

        const auth = firebase.auth();

        

        

        function signUp(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                alert("Signed Up");

        }

        

        

        

        function signIn(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.signInWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                

                

                

        }

        

        

        function signOut(){

                

                auth.signOut();

                alert("Signed Out");

                

        }

        

        

        

        auth.onAuthStateChanged(function(user){

                

                if(user){

                        

                        var email = user.email;

                        alert("Active User " + email);

                        

                        //Take user to a different or home page


                        //is signed in

                        

                }else{

                        

                        alert("No Active User");

                        //no user is signed in

                }

                

                

                

        });