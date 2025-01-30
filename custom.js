document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const selected = document.querySelector(".dropdown-selected");
    const options = document.querySelector(".dropdown-options");
    const icon = document.querySelector(".dropdown-icon");
    const selectedText = document.querySelector(".selected-text");

    // Toggle dropdown on click
    selected.addEventListener("click", function () {
        dropdown.classList.toggle("active");
        icon.textContent = dropdown.classList.contains("active") ? "▲" : "▼";
    });

    // Select an item
    options.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            selectedText.textContent = event.target.textContent;
            dropdown.classList.remove("active");
            icon.textContent = "▼"; // Reset to down arrow

            // Highlight selected item
            document.querySelectorAll(".dropdown-options li").forEach(li => {
                li.classList.remove("selected");
            });
            event.target.classList.add("selected");
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
            icon.textContent = "▼"; // Reset to down arrow
        }
    });
});
