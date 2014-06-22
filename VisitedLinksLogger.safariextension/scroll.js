self.port.on('scrollTo', function(elID){
    window.onload = function(){
    	showIt(elID);
    	function showIt(elID) {
    		var allImages = document.getElementsByTagName("img");

    		for (var i = 0, len = allImages.length; i < len; i++) {
        	    if (allImages[i].alt == elID) {
            		break;
        	    }
    		}
    		allImages[i].scrollIntoView(true);
    	}
    }
})
