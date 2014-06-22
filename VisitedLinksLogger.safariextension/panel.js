var tempWin;

addon.port.on('showLyInform', function(lyInform){
    if (tempWin != null){
	tempWin.close();	
    }

    if (lyInform != ""){
    	var station = lyInform.split("\n");
    	for (var i = 0; i < station.length-1; i++) {
     	    create_new_row_button(document.getElementById("brook"),
            station[i]);
    	}
    }
});

addon.port.on('killLyInform', function(lyInform){
	removeElement();
});



function create_new_row_button(eT, msg) {
    var eR = document.createElement("tr");
    var eC = document.createElement("td");
    var eB = document.createElement("input");
    eB.type = "button"
    eB.value= msg;
    eB.style.width = "300px";
    eB.onclick = function(){ShowName(msg);};
    //eB.onclick = addon.port.emit('link', "王金平");

    eT.appendChild(eR);
    eR.appendChild(eC);
    eC.appendChild(eB);
}

function removeElement() {
  var element = document.getElementById("brook");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

}

function ShowName(msg){
    //alert(msg);
    
    var windowObjectReference;
    var strWindowFeatures = "menubar=yes,location=no,resizable=yes,scrollbars=yes,status=yes,width=1000, height=600";

    function openRequestedPopup() {
        windowObjectReference = window.open("http://billy3321.github.io/lytel/", "lytel", strWindowFeatures);
	windowObjectReference.focus();
    }
    openRequestedPopup();
    //addon.port.emit('lyWin',"http://billy3321.github.io/lytel/");
    addon.port.emit('modLink',msg);
    tempWin = windowObjectReference;
}

