function initializeList() {
    let sideBar = document.getElementById("content");

    // TODO - Continue here

}

function loadItem(fileName) {
    let projectWindow = document.getElementById("window");
    projectWindow.innerHTML = '<object data="doc/current/' + fileName +'.html" />';
}