function sendMessage(){
    let data = document.getElementById("msg").value;
    let tchat = document.getElementById("textarea");
    tchat.setAttribute("disabled", false);
    tchat.append(login+": "+data+"\n");
    tchat.setAttribute("disabled", true);
    document.getElementById("msg").value = "";
}
function createWebSocket(){
    websocket = new WebSocket('ws://localhost:12345');
    let buttonSend = document.getElementById('send');
    buttonSend.addEventListener("click", sendMessage);
}
let websocket;
let login = prompt("Quel est votre login ?");  
createWebSocket();

