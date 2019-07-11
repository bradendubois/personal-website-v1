function hideNavBar() {
    // Get the floating/fixed header bar
    var navBar = document.getElementById("fixed-header-tags");

    // Remove "inactive" in case it has it, as this method is called on a scroll
    navBar.classList.remove("inactive");

    // Clear any timeout that may have been there, and set a new one
    setTimeout(addInactiveClass, 5000);
}

function addInactiveClass() {
    // Upon this method being called after a delay, determine if the navigation is at the
    // top of the page (scrolled all the way up), if it is not, add "inactive" to the tags
    if (document.getElementById("navigation").getBoundingClientRect().top !== 0) {
        var navBar = document.getElementById("fixed-header-tags");
        navBar.classList.add("inactive");
    }
}