
	$(document).bind('mobileinit', function(){
		$.mobile.metaViewportContent = 'width=device-width';
	});
	
	document.addEventListener('deviceready', onDeviceReady, true);

	function onDeviceReady() {		
	
	$('#slider').nivoSlider({
    effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
    slices: 15,                     // For slice animations
    boxCols: 8,                     // For box animations
    boxRows: 4,                     // For box animations
    animSpeed: 500,                 // Slide transition speed
    pauseTime: 3000,                // How long each slide will show
    startSlide: 0,                  // Set starting Slide (0 index)
    directionNav: true,             // Next & Prev navigation
    controlNav: false,               // 1,2,3... navigation
    controlNavThumbs: false,        // Use thumbnails for Control Nav
    pauseOnHover: true,             // Stop animation while hovering
    manualAdvance: false,           // Force manual transitions
    prevText: 'Prev',               // Prev directionNav text
    nextText: 'Next',               // Next directionNav text
    randomStart: false,             // Start on a random slide
    beforeChange: function(){},     // Triggers before a slide transition
    afterChange: function(){},      // Triggers after a slide transition
    slideshowEnd: function(){},     // Triggers after all slides have been shown
    lastSlide: function(){},        // Triggers when last slide is shown
    afterLoad: function(){}         // Triggers when slider has loaded
});
		
		
		$('div.pagina').on("swipeleft", function(){		
			var nextpage = $(this).next('div[data-role="page"]');
			if (nextpage.length > 0) {	
				if(!nextpage.children().length > 0){			
					var pagina = ""+nextpage.attr("id")+".html";
					nextpage.load(pagina);
				}		
			$.mobile.changePage(nextpage, {transition: "slide",
				reverse: false} , false, true);
			}
		});
		$('div.pagina').on("swiperight", function(){		
			var prevpage = $(this).prev('div[data-role="page"]');
			if (prevpage.length > 0) {
				if(!prevpage.children().length > 0){			
					var pagina = ""+prevpage.attr("id")+".html";
					prevpage.load(pagina);
				}	
			$.mobile.changePage(prevpage, {transition: "slide",
			reverse: true}, true, true);
			}
		});
		
		$(document).on('click', '.sumario li a', function() {
			var href = $(this).attr("href");
			href = href.substr(1);		
			var nextpage = $('#'+href);		
			var pagina = ""+nextpage.attr("id")+".html";		
			nextpage.load(pagina);			
		});
		
		
		$(document).on('click', '.prev a', function() {
			var nextpage = mudarPagina($(this).attr("href"));	
					
			$.mobile.changePage(nextpage, {transition: "slide",
				reverse: true}, true, true);
			
		});
		
		$(document).on('click', '.next a', function() {	
			var nextpage = mudarPagina($(this).attr("href"));
			$.mobile.changePage(nextpage, {transition: "slide",
				reverse: false} , false, true);
				
		});
		
		function mudarPagina(pagina){
			var href = pagina;
			href = href.substr(1);		
			var nextpage = $('#'+href);		
			var pagina = ""+nextpage.attr("id")+".html";
			nextpage.load(pagina);		
			return nextpage;
		}
			
	}

