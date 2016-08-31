window.onload = initPage;

function initPage() {
    var tabs =
        document.getElementById("tabs").getElementsByTagName("a");
    for (var i = 0; i < tabs.length; i++) {
        var currentTab = tabs[i];
        currentTab.onmouseover = showHint;
        currentTab.onmouseout = hideHint;
        currentTab.onclick = showTab;
    }
    var images =
        document.getElementById("schedulePane").getElementsByTagName("img");
    for (var j = 0; j < images.length; j++) {
        var currentImage = images[j];
        currentImage.onmouseover = showHint;
        currentImage.onmouseout = hideHint;
        // if (currentImage.className == "tab") {
        currentImage.onclick = showTab;
        // }
    }

    var buttons =
        document.getElementById("navigation").getElementsByTagName("a");
    for (var k = 0; k < buttons.length; k++) {
        var currentBtn = buttons[k];
        // currentBtn.mouseover = showHint;
        // currentBtn.mouseout = hideHint;
        currentBtn.onclick = showTab;
        // currentBtn.onmouseover = buttonOver;
        // currentBtn.onmouseout = buttonOut;
        currentBtn.addEventListener("mouseover", showHint, false);
        currentBtn.addEventListener("mouseover", buttonOver, false);
        currentBtn.addEventListener("mouseout", hideHint, false);
        currentBtn.addEventListener("mouseout", buttonOut, false);
    }
}

var welcomePaneShowing = true;

function showHint() {
    // alert("in showHint()");
    if (!welcomePaneShowing) {
        return;
    }

    switch (this.title) {
        case "beginners":
            var hintText = "Just getting started? Come join us!";
            break;
        case "intermediate":
            var hintText = "Take your flexibility to the next level!";
            break;
        case "advanced":
            var hintText = "Perfectly join your body and mind with these intensive workouts.";
            break;
        default:
            var hintText = "Click a tab to display the course schedule for the class";
    }
    var contentPane = document.getElementById("content");
    contentPane.innerHTML = "<h3>" + hintText + "</h3>";
}

function hideHint() {
    // alert("in hideHint()");
    if (welcomePaneShowing) {
        var contentPane = document.getElementById("content");
        contentPane.innerHTML =
            "<h3>Click a tab to display the course schedule for the class</h3>";
    }
}

function showTab() {
    // alert("in showTab()");
    var selectedTab = this.title;

    if (selectedTab == "welcome") {
        welcomePaneShowing == true;
        document.getElementById("content").innerHTML =
            "<h3>Click a tab to display the course schedule for the class</h3>";
    } else {
        welcomePaneShowing = false;
    }
    var tabs =
        document.getElementById("tabs").getElementsByTagName("a");
    for (var i = 0; i < tabs.length; i++) {
        var currentTab = tabs[i];
        if (currentTab.title == selectedTab) {
            currentTab.className = "active";
        } else {
            currentTab.className = "inactive";
        }
    }

    var request = createRequest();
    if (request === null) {
        alert("Unable to create request");
        return;
    }
    request.onreadystatechange = showSchedule;
    request.open("GET", selectedTab + ".html", true);
    request.send(null);
}

function showSchedule() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            document.getElementById("content").innerHTML = request.responseText;
        }
    }
}

function buttonOver() {
    this.className = "active";
}

function buttonOut() {
    this.className = "";
}
