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
            link.onclick = function () {
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

function createGithubLink(inTrove) {
    let linkDiv = document.getElementById("gitLink");
    let link = linkDiv.getElementsByTagName("a")[0];

    if (inTrove) {
        link.href = "https://github.com/bradendubois/trove/blob/master/" + linkDiv.getAttribute("title");
    } else  {
        link.href = "https://github.com/bradendubois/" + linkDiv.getAttribute("title");
    }

    link.target = "_blank";
}

function initializeTitle() {
    let titleTag = document.getElementById("projectTitle");

    if (titleTag.innerHTML.length === 0) {
        titleTag.innerHTML = document.getElementById("gitLink").getAttribute("title");
    }
}