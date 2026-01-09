const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        document.documentElement.style.setProperty("--bg-color", "#020617");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.documentElement.style.setProperty("--primary-color", "#1e293b");
    } else {
        document.documentElement.style.setProperty("--bg-color", "#f8fafc");
        document.documentElement.style.setProperty("--text-color", "#111827");
        document.documentElement.style.setProperty("--primary-color", "#4361ee");
    }
});
