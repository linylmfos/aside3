requirejs.config ({
	paths: {
		jquery: 'jquery-1.11.3.min'
	}
});

requirejs(['jquery'], function($){
	$('#backTop').on('click',move);
	$(window).on('scroll', function(){
		checkPostion($(window).height());
	});

	function move() {
		$('html, body').animate({
			scrollTop:0;
		},800);
	}

	function checkPostion(pos){
		if($(window).scrollTop() > pos ) {
			$('#backTop').fadeIn();
		}else {
			$('#backTop').fadeOut();
		}
	}
} );