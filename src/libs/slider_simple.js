import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';  // Hier das Pagination-Modul importieren
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper", {
        modules: [Pagination],  // Module aktivieren
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            
        },
    });
});

