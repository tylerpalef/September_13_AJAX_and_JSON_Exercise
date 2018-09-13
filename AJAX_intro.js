// Sending and receiving data on the fly is known as AJAX
// Asynchronus Javascript and XML
// Asynchronus just means the page doesn't need to refresh

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
// We give open two arguments. We can choose between getting (GET) or sending (POST)
// The second argument is the URL we want to talk to.
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
// Need to tell our browser the data we are grabbing is JSON, and not plaintext
  console.log(ourData[0].name);
// variable outData is saving the content we are getting from the XMLHttpRequest
};
ourRequest.send();
