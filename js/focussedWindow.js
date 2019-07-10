function detectFocus() {

    var tops =
        [
            document.getElementById("me").getBoundingClientRect().top,
            document.getElementById("education").getBoundingClientRect().top,
            document.getElementById("projects").getBoundingClientRect().top,
            document.getElementById("experience").getBoundingClientRect().top,
            document.getElementById("current").getBoundingClientRect().top,
        ];

    var bottoms =
        [
            document.getElementById("me").getBoundingClientRect().bottom,
            document.getElementById("education").getBoundingClientRect().bottom,
            document.getElementById("projects").getBoundingClientRect().bottom,
            document.getElementById("experience").getBoundingClientRect().bottom,
            document.getElementById("current").getBoundingClientRect().bottom,
        ];

    var buttons =
        [
            document.getElementById("me-jump"),
            document.getElementById("education-jump"),
            document.getElementById("projects-jump"),
            document.getElementById("experience-jump"),
            document.getElementById("current-jump"),
        ];

    let header_tags = document.getElementById("fixed-header-tags");

    if (document.getElementById("navigation").getBoundingClientRect().top === 0) {
        header_tags.classList.remove("free")
    } else {
        header_tags.classList.add("free");
    }

    var closestIndex = 0;
    var closestIndexValue = 1000;

    for (i = 0; i < tops.length; i++) {
        if (Math.abs(tops[i]) < closestIndexValue) {
            closestIndex = i;
            closestIndexValue = Math.abs(tops[i]);
        }
    }

    if (Math.abs(innerHeight - bottoms[buttons.length-1]) <= 70) {
        closestIndex = buttons.length-1;
    }

    buttons[closestIndex].classList.add("closest");

    for (var i = 0; i < buttons.length; i++) {

        if (i !== closestIndex) {
            buttons[i].classList.remove("closest");
        }
    }
}
