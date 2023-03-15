document.addEventListener("navbar-loaded", function (e) {
	// TODO: Utilize localStorage to persist theme across pages
	localStorage.setItem("theme", "dark");
	const root = document.getElementById("root");
	const themeToggle = document.getElementById("theme-toggle");
	const themeIcon = themeToggle.firstElementChild;
	function toggleTheme(setLight, setLocalStorage) {
		if (setLight) {
			themeIcon.classList.replace("fa-sun", "fa-moon");
			root.setAttribute("data-bs-theme", "light");
		} else {
			themeIcon.classList.replace("fa-moon", "fa-sun");
			root.setAttribute("data-bs-theme", "dark");
		}
		if (setLocalStorage)
			setLight ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
	}
	themeToggle.addEventListener("click", function (e) {
		const isDark = document.getElementById("root").getAttribute("data-bs-theme") == "dark";
		toggleTheme(isDark, true);
	});
});