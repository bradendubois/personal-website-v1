function initializeTrove() {
    let projectSidebar = document.getElementById("project-list");
    let lists = projectSidebar.getElementsByTagName("ul");

    for (let i = 0; i < lists.length; i++) {

        let projectList = lists[i].getElementsByTagName("li");
        let listID = lists[i].getAttribute("id");

        for (let j = 0; j < projectList.length; j++) {
            let project = projectList[j];

            // Returns a single-element list of all the a tags in this li (only one)
            let link = project.getElementsByTagName("a")[0];
            let projectID = project.getAttribute("id");

            link.innerHTML = projectID;

            // Set the a tag properties
            link.onclick = () => {
                loadProject(listID, projectID)
            };
            link.href = "#";
        }
    }
}

function loadProject(listID, projectName) {
    let projectWindow = document.getElementById("projectWindow");
    let projectFileName = "doc/trove/" + projectName + ".html";
    projectWindow.innerHTML = '<object data="'+ projectFileName +'" />';
}

function createGithubLink(gitLink) {
    let linkDiv = document.getElementById("gitLink");

    if (gitLink == null) {
        linkDiv.setAttribute("style", "display: none;");
        return
    }


    linkDiv.innerHTML='<a><div><p>View On GitHub</p></div></a>';

    let link = linkDiv.getElementsByTagName("a")[0];

    link.href = "https://github.com/bradendubois/" + gitLink.toString();
    link.target = "_blank";
}
