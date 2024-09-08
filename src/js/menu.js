  /*открываю попап*/
  $(document).ready(function() { 
	$('a#start').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(250, 
		 	function(){
				$('#popUp') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '55%'}, 490); 
		});
	});
/*по нажатию на крестик или на тень закрываю окно*/
	$('#close, #overlay').click( function(){ 
		$('#popUp')
			.animate({opacity: 0, top: '35%'}, 490, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(220); 
				}
			);
	});
});
