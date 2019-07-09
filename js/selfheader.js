function selfheader() {
    inner_selfheader(0, 0, 0);
}

function inner_selfheader(first_message_slice, second_message_slice, second_message_index) {
    var first_message = "I'm a ";
    var second_message_set = ["developer", "designer", "student", "computer science major",
                                "philosophy major", "coffee-snob " + ' \u2615'];
    var messageArea = document.getElementById("me-title");

    if (first_message_slice <= first_message.length) {
        messageArea.innerHTML = first_message.slice(0, first_message_slice);
        setTimeout(function() {
            inner_selfheader(first_message_slice + 1, 0, 0)
        }, 100);
    } else {
        if (second_message_slice <= second_message_set[second_message_index].length) {
            messageArea.innerHTML = first_message + second_message_set[second_message_index].slice(0, second_message_slice);
            setTimeout(function() {
                inner_selfheader(first_message_slice, second_message_slice + 1, second_message_index);
            }, 100);
        } else {
            deleteAppendedMessage();
            setTimeout(function() {
                inner_selfheader(first_message_slice, 0, ((second_message_index + 1) % second_message_set.length));
            }, ((second_message_set[second_message_index].length * 100) + 100));
        }
    }
}

function deleteAppendedMessage() {
    var first_message = "I'm a ";
    var messageArea = document.getElementById("me-title");

    if (messageArea.length > first_message.length) {
        messageArea.innerHTML = messageArea.innerHTML.slice(0, messageArea.innerHTML.length - 1);
        setTimeout(deleteAppendedMessage, 50);
    }
}