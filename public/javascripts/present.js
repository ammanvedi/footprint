$(document).ready(function () {

//GLOBALS
	
		//this is a dummy of the final slides data
		//just for fun
		var currentslide = 0;
		var slides = [{"x":1500, "y": 1500}, {"x":1000, "y": 900}, {"x":1200, "y": 1200}, {"x":1500, "y": 900}];
		
		//add an item at the specified xy position in the presentation window
		function addItemAt(xpos, ypos, text)
		{
		$('<h1 />').text(text).appendTo(
				$('<div />', {class: 'item'})
									.css('top', ypos+'px')
									.css('left', xpos+'px')
									.appendTo($('#presentation')
					)
		);
			
		}
		
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		function goToSlide(slide) {
			movePresentationTo(slides[slide].x, slides[slide].y);
		}
		
		//move the presentation in the view to a specific position
		function movePresentationTo(xposi, yposi)
		{
			$( "#presentation" ).animate(
			{
			    left: xposi,
			    top: yposi 
			  }, 1000, function() {
			    // Animation complete.
			  });
		}
		

//LISTENERS

		//decrease the slide pointer
		$('#nav_previous').click(function(a)
		{
				if(currentslide)
				{
						currentslide = currentslide - 1;
						console.log(currentslide + '::1');
						movePresentationTo(slides[currentslide].x, slides[currentslide].y);
				}else
				{
						currentslide = slides.length - 1;
						console.log(currentslide + '::2');
						movePresentationTo(slides[currentslide].x, slides[currentslide].y);
				}
		});
		
		//increase the slide pointer
		$('#nav_next').click(function(a)
		{
				if(currentslide == (slides.length-1)){
					currentslide = 0;
					console.log(currentslide + '::4');
					movePresentationTo(slides[currentslide].x, slides[currentslide].y);
				}else{
				currentslide = (currentslide + 1);
				console.log(currentslide + '::3');
				movePresentationTo(slides[currentslide].x, slides[currentslide].y);
				
				}

		});



//SCRIPT START

		goToSlide(0);
	
		var u;
		for(u =0; u <50; u++){
			addItemAt(getRandomInt(0,1500),getRandomInt(0,2000), "Hello"); 
		}
	

});