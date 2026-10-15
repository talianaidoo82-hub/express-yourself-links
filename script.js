
const themeToggle = document.getElementById("themeToggle");
const copyButton = document.getElementById("copyButton");
const message = document.getElementById("message");

// Switch between light and dark mode
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    themeToggle.textContent = darkMode ? "☀️" : "🌙";
    themeToggle.setAttribute(
        "aria-label",
        darkMode ? "Switch to light mode" : "Switch to dark mode"
    );
});

// Copy the website address
copyButton.addEventListener("click", async function () {
    const websiteURL = window.location.href;

    try {
        await navigator.clipboard.writeText(websiteURL);
        message.textContent = "Website link copied!";
    } catch (error) {
        message.textContent =
            "Copy unavailable here. Copy the address from your browser.";
    }
});
