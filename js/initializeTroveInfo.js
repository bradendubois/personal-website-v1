function initializeTrove() {
    var list = document.getElementById("project-list");
    var items = list.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        var project = items[i];
        var link = project.getElementsByTagName("a");
        link[0].onclick = function(){ loadProject(project.getAttribute("id"))};
        link[0].href = "";
    }
}

function loadProject(projectName) {
    var projectWindow = document.getElementById("projectWindow");
    var projectFileName = projectName + ".html";
    projectWindow.innerHTML= '<object data="'+ projectFileName+ '" />';
}