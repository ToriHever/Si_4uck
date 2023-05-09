import * as $ from 'jquery'
import '@styles/burger_menu.scss'
import '@media/header_footer.scss'




// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2bHXG9c3gOH1NANka5yEX6dzSW0Mv3ng",
  authDomain: "si4uck.firebaseapp.com",
  databaseURL: "https://si4uck-default-rtdb.firebaseio.com",
  projectId: "si4uck",
  storageBucket: "si4uck.appspot.com",
  messagingSenderId: "884843768139",
  appId: "1:884843768139:web:b0552bbd1090c25c5660ce",
  measurementId: "YOUR_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Define UI elements
const dialog = document.getElementById('dialog');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const newsForm = document.getElementById('newsForm');
const details = document.getElementById('details');
const newsInput = document.getElementById('newsInput');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

// Hide newsForm and result initially
newsForm.style.display = 'none';
result.style.display = 'none';

// Attach click event listeners to buttons
yesButton.addEventListener('click', function () {
    console.log("VIIIIIIIIIIIIIIIVIIIIIIIIIIIDDDDDDDDDDDDDDDD")
  dialog.style.display = 'none';
  newsForm.style.display = 'block';
});

noButton.addEventListener('click', () => {
  const message = "Then why are you here? If you want news - write news!";
  alert(message);
});

submitBtn.addEventListener('click', () => {
  const news = newsInput.value;
  if (news.trim() === '') {
    alert('Please enter some news!');
    return;
  }

  // Send news to database
  database.ref('news').push({
    news: news
  }).then(() => {
    // Show result message
    newsForm.style.display = 'none';
    result.style.display = 'block';
  });
});
