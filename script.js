document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#0d1117";
      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.4)";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  });

  // Efeito de animação suave ao rolar
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section").forEach(sec => observer.observe(sec));
});
