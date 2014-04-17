window.onload = function(){

    var objects = document.getElementById("mediaarticlebody").getElementsByTagName("p");
    var content;

    for(var i=0;i<objects.length;i++){
        content += objects[i].innerHTML;
    }
    
    /*for(var i=0;i<LyList.length;i++){
        var reg = new RegExp(LyList[i].name);
        if(reg.test(content)){
            alert(LyList[i].name+" "+LyList[i].party);    
        }
    }*/
    
}