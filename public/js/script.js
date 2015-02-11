$(document).ready(function() {
	/**
	* Scroll animation if click navbar menu
	**/
	$('a.navbar-brand, ul.navbar-nav > li > a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	/**
	* Navbar collapse close if clicking menu on mobile
	**/
    if($(window).width() < 767){
    	$('ul.navbar-nav > li > a').on('click', function(){
    		$('.navbar-collapse').removeClass('in');
    		$('.navbar-collapse').attr('style', 'height: 1');
    	});
    	var ancho = $(window).width();
		$('#maps.iglesia').find('iframe').attr('width',ancho);
		$('#maps.convite').find('iframe').attr('width',ancho);
		$('#maps.iglesia').find('.text').css('margin','10px').css('width','100%').css('margin-bottom','50px');
		$('#maps.convite').find('.text').css('margin','10px').css('width','100%');
		$('#ceremony').find('h2').css('font-size','200%');
    }

    $('#sendForm').click(function(){
    	console.log('sending form');
    	var jsonData = {
		  mail: $('#form_mail').val(),
		  name: $('#form_name').val(),
		  subject: "Nuevo mensaje",
		  text: $('#form_subject').val()
		};
		$.post('send', JSON.stringify(jsonData))
    		.done(function(data) {
			  console.log(data);
			  $('.alert').removeClass('hidden')
			  setTimeout(function() {
			  	$('.alert').addClass('hidden')
			  }, 1000);
			}).fail(function() {
				alert( "error" );
		});

    });

	/**
	* Call tooltip & carousel bootstrap js
	**/
    $('[rel="tooltip"]').tooltip();
    $('#wedding-photo').carousel();

	/**
	* Call colorbox on wedding photo gallery
	**/
    if($(window).width() > 767){
		$(".gallery-images").colorbox({rel:'gallery-images', width:'auto', height: '85%'});
	}else{
		$(".gallery-images").colorbox({rel:'gallery-images', width:'85%', height: 'auto'});
	}
	
});