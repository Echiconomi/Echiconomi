// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8h_a-bbtRoU5eHyyjUqHktRgBob99vEg",
  authDomain: "form-e74ab.firebaseapp.com",
  projectId: "chat-b7848",
  storageBucket: "chat-b7848.appspot.com",
  messagingSenderId: "247422617235",
  appId: "1:247422617235:android:dffa5a3bb0fd319d426f66",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const chatDisplay = document.getElementById("chat-display");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value;
  if (message.trim() !== "") {
    const timestamp = Date.now();
    database.ref("messages/" + timestamp).set(message);
    messageInput.value = "";
  }
});

database.ref("messages").on("child_added", (snapshot) => {
  const message = snapshot.val();
  chatDisplay.innerHTML += `<p>${message}</p>`;
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
});