alert('entrei');

$('div.ui-page').on("swipeleft", function(event){
	alert('1');
	var nextpage = $(this).next('div[data-role="page"]');
	if (nextpage.length > 0) {
	$.mobile.changePage(nextpage, "slide", false, true);
}
});

$('div.ui-page').on("swiperight", function(event){
	alert('2');
	var prevpage = $(this).prev('div[data-role="page"]');
	if (prevpage.length > 0) {
	$.mobile.changePage(prevpage, {transition: "slide",
	reverse: true}, true, true);
}
});