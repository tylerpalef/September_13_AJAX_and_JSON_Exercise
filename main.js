var pageCounter = 1;

// Creating an event listener for the button.
// So our AJAX only runs when the button is clicked
var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal-info');


btn.addEventListener('click', function(){

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

// Using dynamic URL to parse the data

  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
  // Need to tell our browser the data we are grabbing is JSON, and not plaintext
    renderHTML(ourData);
  // variable outData is saving the content we are getting from the XMLHttpRequest
  };
  ourRequest.send();
  pageCounter++ ;
  if (pageCounter > 3) {
    btn.classList.add('hide-me');

  }
});

function renderHTML(data) {
  var htmlString = '';

  for (i = 0; i < data.length; i++) {
    htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ' that loves '

    for (ii = 0; ii < data[i].foods.likes.length; ii++){
      if (ii == 0){
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += ' and ' + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';
    
    for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
      if (ii == 0){
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += ' and ' + data[i].foods.dislikes[ii];
      }
    }


    htmlString += '.</p>';
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
