import Swiper from "swiper";
import { Pagination } from "swiper/modules"; // Hier das Pagination-Modul importieren
import "swiper/css";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
  // Verzögerung einfügen, um sicherzustellen, dass der DOM vollständig geladen ist
  setTimeout(function () {
    // Falls die Swiper-Instanz bereits existiert, zerstöre sie zuerst
    if (window.swiper) {
      window.swiper.destroy(true, true); // Zerstöre die Instanz
    }

    // Initialisiere Swiper neu
    window.swiper = new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });

    // Optional: Swiper nach der Initialisierung updaten
    window.swiper.update();
  }, 100); // Verzögerung von 100ms
});
