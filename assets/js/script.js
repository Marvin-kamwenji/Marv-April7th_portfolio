// // Fade-in effect for sections
// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll(".fade-in");

//     const fadeInObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = 1;
//                 entry.target.style.transform = "translateY(0)";
//             }
//         });
//     }, { threshold: 0.2 });

//     sections.forEach(section => fadeInObserver.observe(section));
// });

