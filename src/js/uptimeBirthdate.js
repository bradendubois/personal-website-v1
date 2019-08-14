function displayUptime() {
    let uptimeArea = document.getElementById("uptime");
    uptimeArea.innerHTML = calculateUptime(new Date("1999-7-13 18:00:00"));
}

function calculateUptime(date) {
    // Should retrieve the current date
    let currentDate = new Date();

    // Current minus given { year, month, date } should give the difference
    let years = currentDate.getFullYear() - date.getFullYear();
    let months = currentDate.getMonth() - date.getMonth();
    let days = currentDate.getDate() - date.getDate();

    // Correct negative days (if current date is earlier in the month than the specified day)
    if (days < 0) {
        months -= 1;
        days += 30;
    }

    // Correct negative months (can occur from day correction or the current month
    // being earlier than the specified month)
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // NOTE - This is only used to calculate time since my birthday, and as such there is no correction
    // for a negative year since this should never occur

    // Return string built from info retrieved
    return years.toString() + " years, " + months.toString() + (months.toString() === "1" ? " month" : " months");// + days.toString() + " days";
}