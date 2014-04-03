$().ready(function(){
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
	
	
});
