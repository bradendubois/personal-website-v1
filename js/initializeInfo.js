
function initializeInfo() {
  setTimeout(showPlus, 750);

  // TODO - Hide all of these lines until it's been loaded
  document.getElementById("description-plus").innerText = '\&nbsp';
  document.getElementById("description-appended").innerText = "\&nbsp";
  document.getElementById("description-appended").setAttribute("style", "color: transparent");
  setTimeout(changeDescriptorLabels, 1500);
  displayUptime();
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

  if (loops >= 2 && messageArea.getAttribute("hired") === "false") {

    messageArea.href = "https://www.linkedin.com/in/braden-dubois-2453b8149/";
    messageArea.innerHTML = "open to offers";

    let resetButton = document.getElementById("resetButton");
    resetButton.setAttribute("display", "block");

    return;
  }

  let labels = ["designer", "student", "computer science major", "avid reader", "philosophy student", "coffee-snob\&nbsp\u2615"];

  messageArea.innerHTML = labels[labelNumber];
  messageArea.setAttribute("style", "color: revert");

  messageArea.setAttribute("label", ((labelNumber + 1)  % labels.length).toString());

  if (labelNumber === 0) {
    messageArea.setAttribute("loops", loops + 1);
  }
  setTimeout(changeDescriptorLabels, 3000);
}
