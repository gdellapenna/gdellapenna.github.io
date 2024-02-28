$(function() {
	
	$('#totop').hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {
			$('#totop').fadeIn(200);
		} else {
			$('#totop').fadeOut(200); 
		}
	});	
	
	$("form.accessible-menu select").on("change",function(e){
		e.preventDefault();
		window.location.href=$("> option:selected",this).val();
	});
});



