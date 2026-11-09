
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.style.display = "none";
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.style.display = "block";
    window.scrollTo(0, 0);
  }
}

