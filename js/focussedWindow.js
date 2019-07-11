function detectFocus() {

    // The top of each section (in pixels from the top of the window)
    var tops =
        [
            document.getElementById("me").getBoundingClientRect().top,
            document.getElementById("education").getBoundingClientRect().top,
            document.getElementById("projects").getBoundingClientRect().top,
            document.getElementById("experience").getBoundingClientRect().top,
            document.getElementById("current").getBoundingClientRect().top,
        ];

    // The bottom of each section (in pixels from the top of the window)
    var bottoms =
        [
            /*
            document.getElementById("me").getBoundingClientRect().bottom,
            document.getElementById("education").getBoundingClientRect().bottom,
            document.getElementById("projects").getBoundingClientRect().bottom,
            document.getElementById("experience").getBoundingClientRect().bottom,
             */
            document.getElementById("current").getBoundingClientRect().bottom,
        ];

    // The buttons for the navigation bar
    var buttons =
        [
            document.getElementById("me-jump"),
            document.getElementById("education-jump"),
            document.getElementById("projects-jump"),
            document.getElementById("experience-jump"),
            document.getElementById("current-jump"),
        ];

    // Get the navigation bar itself
    let header_tags = document.getElementById("fixed-header-tags");

    // If the navigation bar is also at the top of the screen (scrolled all the the way up)
    if (document.getElementById("navigation").getBoundingClientRect().top === 0) {
        header_tags.classList.remove("free"); // remove the "free" class to hide the border
    } else {
        header_tags.classList.add("free"); // add the "free" class to give the border
    }

    // Initialize an index to color and its distance by which to compare
    var closestIndex;
    var closestIndexValue;

    // Check every top
    for (i = 0; i < tops.length; i++) {
        // If this is the first top checked, or it is closer than the currently tracked top
        if (typeof(closestIndexValue) === "undefined" || Math.abs(tops[i]) < closestIndexValue) {
            // Save its index
            closestIndex = i;
            // Save its absolute value for future comparisons
            closestIndexValue = Math.abs(tops[i]);
        }
    }

    // Override - If the bottom of the last window is visible, override to highlight the bottom
    // in case it is a large screen but the user has scrolled to the bottom
    if (innerHeight - bottoms[buttons.length-1] >= 0) {
        closestIndex = buttons.length-1;
    }

    // Add the "closest" class for the selected index
    buttons[closestIndex].classList.add("closest");

    // Remove the "closest"
    for (var i = 0; i < buttons.length; i++) {
        // Do not remove if it is the index selected earlier
        if (i !== closestIndex) {
            buttons[i].classList.remove("closest");
        }
    }
}