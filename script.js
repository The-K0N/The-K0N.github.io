function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// // // Efek Animasi
// document.addEventListener("DOMContentLoaded", function () {
//   var animatedSections = document.querySelectorAll(".content-section");

//   var observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate");
//         observer.unobserve(entry.target);

//         // Mengulang animasi setelah selesai
//         setTimeout(function () {
//           entry.target.classList.remove("animate");
//           observer.observe(entry.target);
//         }, 1000); // Sesuaikan dengan durasi animasi (dalam milidetik)
//       }
//     });
//   }, { threshold: 0.5 });

//   animatedSections.forEach(function (section) {
//     observer.observe(section);
//   });
// });