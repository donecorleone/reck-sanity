import Swiper from "swiper";
import { Navigation } from "swiper/modules"; // Import Navigation instead of Pagination
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", function () {
  let currentSwiper;

  function initSwiper(container) {
    if (currentSwiper) currentSwiper.destroy(true, true); // Swiper löschen
    currentSwiper = new Swiper(container + " .swiper", {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
    });
  }

  const btnDamen = document.getElementById("btn-damen");
  const btnHerren = document.getElementById("btn-herren");
  const swiperDamen = document.getElementById("swiper-damen");
  const swiperHerren = document.getElementById("swiper-herren");

  btnDamen.addEventListener("click", () => {
    swiperDamen.classList.remove("hidden");
    swiperHerren.classList.add("hidden");
    btnDamen.classList.add("active");
    btnHerren.classList.remove("active");
    initSwiper("#swiper-damen"); // Damen Swiper aktivieren
  });

  btnHerren.addEventListener("click", () => {
    swiperHerren.classList.remove("hidden");
    swiperDamen.classList.add("hidden");
    btnHerren.classList.add("active");
    btnDamen.classList.remove("active");
    initSwiper("#swiper-herren"); // Herren Swiper aktivieren
  });

  // Initial Damen-Swiper aktivieren
  initSwiper("#swiper-damen");
});
