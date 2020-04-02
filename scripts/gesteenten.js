(function() {
    function imageEl() { return $("aside .image"); }
    function explanationEl() { return $("aside .explanation"); }
    
	function showExplanation(title) {
        var element = explanationEl();
        
        element.find("h4").text(title);
        element.find("p").text(gesteenten.texts[title]);
        
        hideImage();
        element.show();
	}
	
	function hideExplanation() {
		explanationEl().hide();
	}

	function getImageSrc(image) {
    	var img = gesteenten.references[image];

    	return img ? "images/" + img : "";
	}

	function showImage(image) {
        var figure = imageEl();
        figure.find("img").attr("src", getImageSrc(image));
        figure.find("figcaption").text(image);
        
        figure.show();
        hideExplanation();
    }
	
	function hideImage() {
		imageEl().hide()
	}
	
	window.gesteenten = {
		showExplanation: showExplanation,
		hideExplanation: hideExplanation,
		showImage: showImage,
		hideImage: hideImage
	}
})()
