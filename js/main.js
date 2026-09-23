const mainContent = document.getElementById("main-content");
const navLinks = document.querySelectorAll("nav a");

async function loadPage(page) {
  const response = await fetch(`pages/${page}.html`);
  const html = await response.text();
  mainContent.innerHTML = html;
  lucide.createIcons();

}

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

                navLinks.forEach((link) => {
                  link.classList.remove("active");
                });

                link.classList.add("active");
        const page = link.dataset.page;
        loadPage(page);
    });
    
});

lucide.createIcons();