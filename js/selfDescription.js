function resetLoop() {
    var messageArea = document.getElementById("description-appended");
    messageArea.setAttribute("loops", "0");
    changeDescriptorLabels();
    let resetButton = document.getElementById("resetButton");
    resetButton.display = "none";
}