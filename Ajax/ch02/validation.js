window.onload = initPage;

function initPage() {
    document.getElementById("username").onblur = checkUsername;
    // alert("Inside the initPage() function");
    document.getElementById("register").disabled = true;
}

function checkUsername() {
    // get a request object and send it to the server
    document.getElementById("username").className = "thinking";
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
            // alert("URL" + url);
            request.onreadystatechange = showUsernameStatus;
            request.open("GET", url, true);
            // request.send(null);
        }
}

function showUsernameStatus() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            if (request.responseText == "okay") {
                document.getElementById('username').className = "approved";
                // if it's okay, no error message to show
            } else {
                // if there's a problem, we'll tell the user
                // alert("Sorry, that username is taken.");
                document.getElementById("username").className = "denied";
                document.getElementById("username").focus();
                document.getElementById("username").select();
                document.getElementById("register").disabled = true;
            }
        }
    }
}
