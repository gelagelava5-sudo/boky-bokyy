
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  if (!pages.length) {
    console.warn("Page sections are not configured yet.");
    return;
  }

  pages.forEach(page => {
    page.hidden = true;
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage && selectedPage.classList.contains("page")) {
    selectedPage.hidden = false;
    window.scrollTo(0, 0);
  }
}

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    const pageId = this.getAttribute("href").slice(1);
    const target = document.getElementById(pageId);

    if (target && target.classList.contains("page")) {
      event.preventDefault();
      showPage(pageId);
    }
  });
});
