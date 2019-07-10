/* Only function that should ever be called from outside this file */
function selfheader() {
    // Call the inner function with starting values : start of first and second messages, first message in second set
    inner_selfheader(0, 0, 0);
}

/* Utilize an inner function that takes parameters for clarity */
function inner_selfheader(first_message_slice, second_message_slice, second_message_index) {

    // First message that should always appear
    var first_message = "I'm a ";

    // Set of fun descriptors that can be added to.
    // NOTE - Always leave "..." as the last message as it hangs on that one for a while.
    // Or change it, if there's a better message to hang on.
    var second_message_set = ["developer.", "designer.", "student.", "computer science major.",
                                "philosophy major.", "coffee-snob. " + ' \u2615', "..."];

    // Get the document that will be written to
    var messageArea = document.getElementById("me-title");

    // If the first message "I'm a " is not yet fully displayed
    if (first_message_slice <= first_message.length) {
        // "Type" one more character" from the message
        messageArea.innerHTML = first_message.slice(0, first_message_slice);
        // Call again with the first_message_slice index incremented, delay of 100 ms is arbitrary
        setTimeout(function() {
            inner_selfheader(first_message_slice + 1, second_message_slice, second_message_index)
        }, 100);
    // First message has been fully displayed
    } else {
        // If the message from the second set has not been fully displayed yet
        if (second_message_slice <= second_message_set[second_message_index].length) {
            // "Type" one more character of the second message
            messageArea.innerHTML = first_message + second_message_set[second_message_index].slice(0, second_message_slice);
            // Call again with the second_message_slice index incremented, another delay of 100ms
            setTimeout(function() {
                inner_selfheader(first_message_slice, second_message_slice + 1, second_message_index);
            }, 100);
        // Second message has been fully delayed
        } else {
            // Standard delay used to delay the deletion of the word shown
            var delay = 3000;

            // If the last message is the one shown (typically "...") the delay is increased
            if (second_message_index === second_message_set.length - 1) {
                delay = 10000;
            }

            // Begin deleting the word after the delay
            setTimeout(deleteAppendedMessage, delay);

            /* Call again to start displaying a new message - begin with the second_message_slice at 0 to start a new
             word, and increase second_message_set index, accounting for keeping it in the bounds of the set of messages
            */
            /* NOTE - Invocation is delayed by "delay" as well as an amount proportional to the length of the word shown,
                as a longer word takes more time to delete, and with a fixed amount of a delay the deletion and word writing
                can occur at the same time, as well as a pause where there is no message being written
            */
            setTimeout(function() {
                inner_selfheader(first_message_slice, 0, ((second_message_index + 1) % second_message_set.length));
            }, ((second_message_set[second_message_index].length * 40) + delay + 1000));
        }
    }
}

/* Delete the currently display message until only "I'm a" remains */
function deleteAppendedMessage() {

    var first_message = "I'm a ";
    var messageArea = document.getElementById("me-title");

    // If the message displayed has not been fully shown
    if (messageArea.innerHTML.length > first_message.length) {
        // "Delete" one character
        messageArea.innerHTML = messageArea.innerHTML.slice(0, messageArea.innerHTML.length - 1);
        // Call again in 50ms
        setTimeout(deleteAppendedMessage, 40);
    }
}