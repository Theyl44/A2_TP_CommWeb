function afficher(call){
    document.getElementById('timestamp').innerHTML =  '<span class="material-icons">watch_later</span> <strong>'+ call + '</strong>';
    ajaxRequest('GET','php/timestamp.php', afficher);
}
function gestErr(call){
    document.getElementById('errors').style = null;
    switch(call){
        case 400:
            document.getElementById('errors').innerHTML =  '<span class="material-icons">error</span> <strong> 400 Requete Incorrect </strong>'; 
            console.log('Requete incorrect');
            break;
        case 401:
            document.getElementById('errors').innerHTML =  '<span class="material-icons">error</span><strong> 401 Requete Incorrect </strong>';
            console.log('Authentifiez vous');
            break;
        case 403:
            document.getElementById('errors').innerHTML =  '<span class="material-icons">error</span><strong> 403 Requete Incorrect </strong>';
            console.log('Acces Refuse');
            break;
        case 404: 
            document.getElementById('errors').innerHTML =  '<span class="material-icons">error</span><strong> 404 Requete Incorrect </strong>';
            console.log('Page non trouve');
            break;
        case 500: 
        document.getElementById('errors').innerHTML =  '<span class="material-icons">error</span> <strong> 500 Requete Incorrect </strong>';
            console.log('Internal Server Error');
            break;
        case 503:
            document.getElementById('errors').innerHTML =  '<span class="material-icons">error</span><strong> 503 Requete Incorrect </strong>';
            console.log('Service Unavailable');
            break;
    }
}
function ajaxRequest(type, url, callback1, callback2){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload = () => {
        switch(xhr.status){
            case 200 :
            case 201 :  console.log(xhr.responseText);
                        callback1(xhr.responseText);
                        break;
            default :   console.log('HTTP error' + xhr.status);//callback xhr.status
                        callback2(xhr.status);
                        break;
        }
    };
    
    xhr.send();
    
}
function main(){
    ajaxRequest('GET','php/timestamp.php', afficher, gestErr);
}
main();