export function debounce(callback, wait) {
	let timeoutId = null;
	return (...args) => {
		window.clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			callback(...args);
		}, wait);
	};
}

const getTheme = () => {
	if (localStorage?.getItem("theme")) {
		return localStorage.getItem("theme");
	}

	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}

	if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		return "light";
	}

	return "dark";
};

const handleToggleClick = () => {
	const element = document.documentElement;
	element.classList.toggle("dark");

	const isDark = element.classList.contains("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");
	document.getElementById("themeToggle").classList.toggle("dark");
};

document.addEventListener("astro:page-load", () => {
	const theme = getTheme();

	if (theme === "light") {
		document.documentElement.classList.remove("dark");
	} else {
		document.documentElement.classList.add("dark");
	}

	window.localStorage.setItem("theme", theme);

	document
		.getElementById("themeToggle")
		?.addEventListener("click", handleToggleClick);
});
