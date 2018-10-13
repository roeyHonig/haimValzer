$(document).ready(function(){
   console.log("hello world")


   $(".flipbook").turn({
    /*width: 1200,*/
    /*height: 600,*/
    elevation: 50,
    pages:8 ,
    autoCenter: true,
    duration: 3000,
    when: {
        missing: function (e, pages) {
            console.log("missing")
            for (var i = 0; i < pages.length; i++) {
                addPage(pages[i], $(this));
            }

        }
    }
    
});


function addPage(page, book) {

	var id, pages = book.turn('pages');

	if (!book.turn('hasPage', page)) {

		var element = $('<div />',
			{'class': 'own-size',
				css: {width: 400, height: 582}
			}).
			html('<div class="loader">Hello Missing Page</div>');

		if (book.turn('addPage', element, page)) {
			loadPage(page);
		}

	}
}

function loadPage(page) {

	$.ajax({url: 'pages/page' + page + '.html'});

}








});