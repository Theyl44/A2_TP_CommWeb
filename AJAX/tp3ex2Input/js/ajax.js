
function displayTime(response){
    document.getElementById('title').innerHTML = '<strong>'+response[0]+'</strong>';
    document.getElementById('detail').innerHTML = '<strong><p style="color: blue">*** Detail ***</p>'+'<p>hours :'+response[1]['hours']+'</p>'+'<p>minutes :'+response[1]['minutes']+'</p>'+'<p>seconds :'+response[1]['seconds']+'</p></strong>';
    alert("yo");
    displayClock(response);
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
function ajaxRequest(type, url, callback, callback2){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload = () => {
        switch(xhr.status){
            case 200 :
            case 201 :  let response = JSON.parse(xhr.responseText);
                        // console.log(xhr.responseText);
                        // console.log(response);
                        callback(response);
                        break;
            default :   console.log('HTTP error' + xhr.status);//callback xhr.statu
                        callback2(xhr.status);
                        break;
        }
    };
    
    xhr.send();
    
}
function main(){
    ajaxRequest('GET','http://localhost/tp%20-%20commeWeb/AJAX/tp3ex2Input/php/time.php', displayTime, gestErr);
}
let time = setInterval(main, 1000);