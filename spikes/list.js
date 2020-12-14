console.log('working');



function getDrData() {
  fetch('http://api.tvmaze.com/search/shows?q=doctor')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          $('#application').text(JSON.stringify(data))
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

console.log($('#application').text() );
console.log($('#application').text() );
$('#application').text('mmmmmm');

getDrData();

