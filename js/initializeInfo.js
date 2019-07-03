
function initializeInfo() {
  setTimeout(showPlus, 750);
  setTimeout(changeDescriptorLabels, 1500);

  //window.onload = initializeInfo;
}

function showPlus() {
  let messageArea = document.getElementById("description-plus");
  messageArea.innerHTML = " + ";
}

function changeDescriptorLabels() {
  let messageArea = document.getElementById("description-appended");
  let labelNumber = parseInt(messageArea.getAttribute("label"));
  let loops = parseInt(messageArea.getAttribute("loops"));

  // Change to add a restart button

  if (loops >= 3 && messageArea.getAttribute("hired") === "false") {

    messageArea.href = "https://www.linkedin.com/in/braden-dubois-2453b8149/";
    messageArea.innerHTML = "open to offers";

    let resetButton = document.getElementById("resetButton");
    resetButton.setAttribute("display", "block");

    return;
  }

  let labels = ["designer", "thing", "other-thing"];

  messageArea.innerHTML = labels[labelNumber];

  messageArea.setAttribute("label", ((labelNumber + 1)  % labels.length).toString());

  if (labelNumber === 0) {
    messageArea.setAttribute("loops", loops + 1);
  }
  setTimeout(changeDescriptorLabels, 1500);
}
