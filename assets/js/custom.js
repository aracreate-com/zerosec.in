window.onload = function(){


    var targetNode = document.getElementById('statistics-container');
    var observer = new MutationObserver(function(){
        if(targetNode.style.display != 'none'){
            alert("Found")
        }
    });
    observer.observe(targetNode, { attributes: true, childList: true });
}