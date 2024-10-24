let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hours = date.getHours();      // Renamed to 'hours' to avoid confusion
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Calculate the rotations
    let hourRotation = 30 * hours + minutes / 2;
    let minRotation = 6 * minutes;
    let secRotation = 6 * seconds;

    // Apply the transformations to the clock hands
    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;  // Apply secRotation instead of hourRotation
}

// Update every second
setInterval(displayTime, 1000);


function updateLocalTime() {
    const now = new Date();
    const options = {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        day: 'numeric', month: 'long', year: 'numeric',
        weekday: 'long',
        hour12: true // for AM/PM format
    };

    const localTimeString = now.toLocaleString('en-US', options);

    // Get the element and update it with the current time
    document.getElementById("local-time").textContent = localTimeString;
}

// Call the function initially and then set an interval to update every second
updateLocalTime();
setInterval(updateLocalTime, 1000); // Update every 1 second
