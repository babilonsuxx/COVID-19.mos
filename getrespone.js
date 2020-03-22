

function getResponse() {
	
	$.ajax({
  	url: 'http://strangebird.ru/count_covid-19.php',
  	method: 'GET',
  	data: '',
 	success: function(resp){
		count=resp ;
		chrome.browserAction.setBadgeText({text: count});
		$('#countInMoscow').html('Количество зараженных COVID-19 в Москве <h4>'+count+'</h4>');
	},
	error: function(resp) {
		console.log(resp);
	}
	
	
	})
}


