$(document).ready(function() {

	$.get("http://ipinfo.io", function(response) {
	    $('#ip').val(response.ip);
	}, "jsonp");
	
});