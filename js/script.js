//https://thecountedapi.com/
//https://thecountedapi.com/api/counted
//http://open-platform.theguardian.com/documentation/


var data = {}

var raceInput = document.getElementById('raceInput').value;
var sexInput = document.getElementById('sexInput').value;
var armsInput = document.getElementById('armsInput').value;
var ageInput = document.getElementById('ageInput').value;


//race?

fetch('https://thecountedapi.com/api/counted/?armed=non-lethal firearm' + raceInput).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      raceOutput.innerHTML = json.length; // data= json;
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});



//gender?

fetch('https://thecountedapi.com/api/counted/?sex=' + sexInput).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      sexOutput.innerHTML = json.length;
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});


//armed?

fetch('https://thecountedapi.com/api/counted/?armed=' + armsInput).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      armsOutput.innerHTML = json.length;
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});


//age?

fetch('https://thecountedapi.com/api/counted/?age=' + ageInput).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      ageOutput.innerHTML = json.length;
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});
