function selfheader() {
    inner_selfheader(0);
}

function inner_selfheader(value) {
    var first_message = "I like to code things. ";
    var second_message = " Sometimes they're good. ";
    var messageArea = document.getElementById("me-title");

    if (value < first_message.length) {
        messageArea.innerHTML = first_message.slice(0, value);
        setTimeout(function() { inner_selfheader(value+1) }, 100);
    } else if (value === first_message.length) {
        messageArea.innerHTML = first_message.slice(0, value);
        setTimeout(function() {inner_selfheader(value+1)}, 1000);
    } else if (value < first_message.length + second_message.length) {
        messageArea.innerHTML = first_message + second_message.slice(0, value - first_message.length);
        setTimeout(function() { inner_selfheader(value+1) }, 100);
    }

}