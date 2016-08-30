window.onload = initPage;

function initPage() {
    document.getElementById("username").onblur = checkUsername;
    alert("Inside the initPage() function");
}

function checkUsername() {
    // get a request object and send it to the server
    request = createRequest();
        if(request === null) {
            alert("Unable to create request");
        } else {
            // alert("Got the request object");
            var theName = document.getElementById("username").value;
            // alert("Original name value:" + theName);
            var username = escape(theName);
            // alert("Escaped name value:" + username);
            var url = "checkName.php?username=" + username;
            // alert("URL:" + url);
            request.onreadystatechange = showUsernameStatus;
            request.open("GET", url, true);
            request.send(null);
        }
}

function showUsernameStatus() {
    // update the page to show whether
    // the user name is okay
}
