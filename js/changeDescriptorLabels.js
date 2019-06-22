function changeDescriptorLabels() {

  var messageArea = document.getElementById("appended-description");
  var labelNumber = parseInt(messageArea.getAttribute("label"));

  var labels = ["designer", "thing", "other-thing"];

  messageArea.innerHTML = labelNumber // labels[labelNumber % labels.length];
  messageArea.setAttribute("label", labelNumber + 1);
}
