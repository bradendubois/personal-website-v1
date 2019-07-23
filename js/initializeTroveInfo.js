function initializeTrove() {
    let projectSidebar = document.getElementById("project-list");
    let lists = projectSidebar.getElementsByTagName("ul");

    for (let i = 0; i < lists.length; i++) {

        let projectList = lists[i].getElementsByTagName("li");

        for (let j = 0; j < projectList.length; j++) {
            let project = projectList[j];

            // Returns a single-element list of all the a tags in this li (only one)
            let link = project.getElementsByTagName("a")[0];
            let id = project.getAttribute("id");

            link.innerHTML = id;

            // Set the a tag properties
            link.onclick = function () {
                loadProject(id)
            };
            link.href = "#";
        }
    }
}

function loadProject(projectName) {
    let projectWindow = document.getElementById("projectWindow");
    let projectFileName = "trove/" + projectName + ".html";
    projectWindow.innerHTML = '<object data="'+ projectFileName +'" />';
}

function createGithubLink() {
    let linkDiv = document.getElementById("gitLink");
    let link = linkDiv.getElementsByTagName("a")[0];
    link.href = "https://github.com/bradendubois/trove/blob/master/" + linkDiv.getAttribute("title");
    link.target = "_blank";
}

function initializeTitle() {
    let titleTag = document.getElementById("projectTitle");
    titleTag.innerHTML = document.getElementById("gitLink").getAttribute("title");
}