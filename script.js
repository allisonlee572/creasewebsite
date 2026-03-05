const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll("nav div.links a");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			links.forEach((link) => link.classList.remove("active"));

			let id = entry.target.id;
			id = id == "crease" ? "" : id;
			const activeLink = document.querySelector(
				`nav div.links a[href="#${id}"]`,
			);
			activeLink.classList.add("active");
		}
	});
}, { threshold: 0.6 });

pages.forEach((page) => observer.observe(page));
