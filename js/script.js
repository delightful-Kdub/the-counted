//https://thecountedapi.com/
//https://thecountedapi.com/api/counted
//http://open-platform.theguardian.com/documentation/



  $.ajax({
  	url: "https://thecountedapi.com/api/counted",
    success: function(res) {
    	console.log(res);
      $("counted").append("<li>" + name + "</li>");
    }
})
