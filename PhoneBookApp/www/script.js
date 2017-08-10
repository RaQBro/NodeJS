function a(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:3000/contacts", false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}