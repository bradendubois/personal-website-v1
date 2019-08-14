function initializeList() {
    let entryList = document.getElementById("entryList");
    let entries = entryList.getElementsByTagName("li");

    for (let i = 0; i < entries.length; i++) {

        entries[i].setAttribute("class", "entry");

        let id = entries[i].getAttribute("id");

        // Converts id to String[] where id[0] = filename,
        //                               id[1] = revealed title,
        //                               id[2] = default title
        id = id.split("-");

        const hrBlock = '<div class="hr"><hr></div>';
        const text = '<div class="text"><a><div><p>'+ id[1] +'</p></div></a><p>'+ id[2] +'</p></div>';

        entries[i].innerHTML = '<object>'+ hrBlock + text + hrBlock +'</object>';
        entries[i].getElementsByTagName("a")[0].href = "#";
        entries[i].getElementsByTagName("a")[0].onclick = () => {
            loadItem(id[0]);
        };

    }
}

function loadItem(fileName) {
    let projectWindow = document.getElementById("window");
    projectWindow.innerHTML = '<object data="doc/trove/' + fileName +'.html" />';
}