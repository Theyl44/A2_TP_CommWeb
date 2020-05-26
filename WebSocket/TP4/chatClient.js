var login = prompt("Quel est votre login ?");  
var websocket;
createWebSocket();

function createWebSocket(){
    websocket = new WebSocket('ws://localhost:12345');
}
function sendMessage(){
    let data = document.getElementById("msg").value;
    document.getElementById("msg").value = "";
    websocket.send(login+" :"+data);
}

websocket.onopen = function(){
    console.log('connexion établie avec le seveur');
    websocket.send(login+" a rejoint le tchat");
}
websocket.onclose = function(){
    console.log("fermeture de la connexion avec le serveur")
    websocket.send(login+" a quitté le tchat");
}
websocket.onmessage = function(event){//recoit un msg du serveur et l'affiche dans le tchat 
    let tchat = document.getElementById("textarea");
    tchat.setAttribute("disabled", false);
    tchat.append(event.data+"\n");
    tchat.setAttribute("disabled", true);
}