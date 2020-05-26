var username = prompt('Entrez votre pseudo :');
var websocket;

// Initialise le Web Socket
createWebSocket();
function createWebSocket() {
    websocket= new WebSocket("ws://localhost:12345/");
}

// Envoie au serveur le message
function sendMessage() {
    let content = document.getElementById("msg").value;
    document.getElementById("msg").value = "";
    websocket.send("["+username+"] "+content);
}

// Réception du message envoyé par le serveur + Affichage
websocket.onmessage = function (event) {
    let tchat = document.getElementById("messages");
    tchat.setAttribute("disabled", false);
    tchat.append(event.data+"\n");
    tchat.setAttribute("disabled", true);
};

// Notification de connexion
websocket.onopen = function () {
    websocket.send(username+" a rejoint le canal de discussion");
}

// Notification de déconnexion (jamais appelée)
websocket.onclose = function () {
    console.log('FERMETURE');
    websocket.send(username+" a quitté le canal de discussion");
}