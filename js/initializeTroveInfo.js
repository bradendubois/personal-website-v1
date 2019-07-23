function initializeTrove() {
    let list = document.getElementById("project-list");
    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        let project = items[i];

        // Returns a single-element list of all the a tags in this li (only one)
        let link = project.getElementsByTagName("a");

        // Because it's a list, need to index the only a tag in it
        link[0].onclick = function(){ loadProject(project.getAttribute("id"))};
        link[0].href = "#";
    }
}

function loadProject(projectName) {

    // TODO - Create quick and minimal md to HTML parser?

    let projectWindow = document.getElementById("projectWindow");
    let projectFileName = "trove/" + projectName + ".html";
    projectWindow.innerHTML = '<object data="' +projectFileName+ '" />';
}