$(document).ready(function(){

	$(window).scroll(function(){
		var scrollBar = $(window).scrollTop();
		var position = - (scrollBar * 0.02);

		$('#bg').css({
			'margin-top': + position + '%'
		});

	});

});