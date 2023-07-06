function sim(){
    alert("Você aceitou namorar comigo! :)")
}

function desviar(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = posisao(10, 90);
    btn.style.left = posisao (10, 90);
    console.log ("Opa. desviei...");
}

function posisao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}
function sumir(t){
    var btn = t;
    btn.style.display = 'none';
    
}