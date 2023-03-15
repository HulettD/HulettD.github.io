fetch("/common/nav.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
	document.body.innerHTML = data + document.body.innerHTML;
	
	const pageName = window.location.pathname.replace("/views/", "").replace(".html", "");
	const page = document.getElementById(`${pageName}-link`);
	page.classList.add("active");
	page.setAttribute("href", "javascript:void(0);");

	document.dispatchEvent(new CustomEvent("navbar-loaded"));
  });