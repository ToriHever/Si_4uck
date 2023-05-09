// Get references to HTML elements
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const newsPopup = document.getElementById('news-popup');
const newsInput = document.getElementById('news-input');
const submitButton = document.getElementById('submit-button');
const responseMessage = document.getElementById('response-message');

// Add event listeners to buttons
yesButton.addEventListener('click', function() {
  // Display news popup
  newsPopup.style.display = 'block';
});

noButton.addEventListener('click', function() {
  // Display response message
  responseMessage.innerHTML =  `<p>Печально, тогда почекай что нового у нас случилрось (Мы то не жлобимся на новости в отлии от тебя P.s Но мы всеравно тебя любим  <3)</p>`;
  responseMessage.style.display = 'block';
});

submitButton.addEventListener('click', function() {
  // Get news input value
  const news = newsInput.value;

  // Display response message with news
  responseMessage.innerHTML = `<p>Спасибо за вашу новость:</p> <p class="margin-text">${news}</p> <p class="bold-text">Мы отправили ее неашему модератеру, он посмотрит, подшаманит над ней и опубликует.</p>`;
  responseMessage.style.display = 'block';

  // Hide news popup
  newsPopup.style.display = 'none';
});
