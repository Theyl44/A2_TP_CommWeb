function sendMessage(){
    console.log('hey bitch');
}
function createWebSocket(){
    websocket = new WebSocket('ws://localhost:12345');
    let buttonSend = document.getElementById('sens');
    buttonSend.addEventListener("click", sendMessage);
}
let websocket;
let login = prompt("Quel est votre login ?");  
createWebSocket();