function sendMessage(){
    console.log("ok");
    let websocket = new WebSocket('ws://localhost:12345');
    let data = document.getElementById("msg").value;
    let tchat = document.getElementById("textarea");

    tchat.setAttribute("disabled", false);
    tchat.append(login+": "+data+"\n");
    tchat.setAttribute("disabled", true);


    websocket.send(data);
    console.log("msg envoyé au serv");
}
function createWebSocket(){
    let buttonSend = document.getElementById('send');
    buttonSend.addEventListener("click", sendMessage);
}
let websocket = new WebSocket('ws://localhost:12345');
let login = prompt("Quel est votre login ?");  
createWebSocket();

websocket.onmessage = function(event){//recoit un msg du serveur et l'affiche dans le tchat 
    console.log(event.data)
}