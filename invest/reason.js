document.getElementById('backButton').onclick = function() {
    window.history.back();
};

// Array of car parts to loop through
const carParts = [
    "Engines",
    "Tires",
    "Brakes",
    "Suspension",
    "Batteries",
    "Transmissions",
    "Exhaust Systems",
    "Alternators",
    "Radiators",
    "Fuel Pumps"
];

let currentIndex = 0;

// Function to update the displayed part
function updatePart() {
    document.getElementById('partDisplay').innerText = carParts[currentIndex];
    currentIndex = (currentIndex + 1) % carParts.length; // Loop back to the start
}

// Change part every 3 seconds
setInterval(updatePart, 3000);

// Initialize with the first part
updatePart();
