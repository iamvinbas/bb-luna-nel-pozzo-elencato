// Mini-gallery lightbox
const photos = Array.from(document.querySelectorAll(".mini-photo"));
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add("active");
}
function renderLightbox() {
  const img = photos[currentIndex].querySelector("img");
  lightboxContent.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
}
function closeLightbox() {
  lightbox.classList.remove("active");
}

photos.forEach((item, i) => item.addEventListener("click", () => openLightbox(i)));
document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  renderLightbox();
});
document.getElementById("lightbox-next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % photos.length;
  renderLightbox();
});
lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox?.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") document.getElementById("lightbox-prev")?.click();
  if (e.key === "ArrowRight") document.getElementById("lightbox-next")?.click();
});
