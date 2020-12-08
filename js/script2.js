

$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('img'),
		indexImg = 1,
		indexMax = el.length;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexImg+')').fadeIn(1100);
	}	
		
	function autoChange () {	
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}			
		change ();
	}	
	var interval = setInterval(autoChange, 3000);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	elWrap.mouseout(function() {
		interval = setInterval(autoChange, 3000);
	});
	

	
	$('next').click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	$('prev').click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	
});