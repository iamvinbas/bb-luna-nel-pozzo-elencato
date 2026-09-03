// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// Gallery lightbox
const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxCaption = document.getElementById("lightbox-caption");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add("active");
}
function renderLightbox() {
  const item = galleryItems[currentIndex];
  const img = item.querySelector("img");
  lightboxContent.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
  lightboxCaption.textContent = img.alt;
}
function closeLightbox() {
  lightbox.classList.remove("active");
}

galleryItems.forEach((item, i) => item.addEventListener("click", () => openLightbox(i)));
document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  renderLightbox();
});
document.getElementById("lightbox-next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  renderLightbox();
});
lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox?.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") document.getElementById("lightbox-prev")?.click();
  if (e.key === "ArrowRight") document.getElementById("lightbox-next")?.click();
});

// Leaflet map
if (window.L && document.getElementById("interactive-map")) {
  const coords = [41.2004, 16.6013]; // Via San Giovanni 12, Molfetta
  const map = L.map("interactive-map", { scrollWheelZoom: false }).setView(coords, 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
  L.marker(coords).addTo(map).bindPopup("La Luna nel Pozzo");
}

// Inquiry form -> WhatsApp
const form = document.getElementById("inquiry-form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const guests = document.getElementById("guests").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text =
    `Ciao! Vorrei prenotare La Luna nel Pozzo.\n` +
    `Nome: ${name}\n` +
    `Ospiti: ${guests}\n` +
    `Check-in: ${checkin}\n` +
    `Check-out: ${checkout}\n` +
    `Email: ${email}` +
    (message ? `\nMessaggio: ${message}` : "");

  window.open(`https://wa.me/393299866890?text=${encodeURIComponent(text)}`, "_blank");
});

// Navbar shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 20);
});
