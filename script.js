function onloaded(){
    var t = document.getElementById("titulo");
    t.addEventListener("mouseover",mudarText);
}

function mudarText(){
    this.innerHTML = `Texto Mudado`;
}