// let list = document.querySelector("#list")
// // let menu = document.querySelector("#menu")
// let menu = document.querySelector("button")
// menu.addEventListener('click', () => {
//     // console.log('none');
//     if (list.style.display === 'none' || list.style.display === '') {
//         list.style.display = 'block';
//     } else {
//         list.style.display = 'none';
//     }
// })

// console.log(list);
// console.log(menu.innerHTML);


// document.addEventListener("DOMContentLoaded", function () {
//     const dropdowns = document.querySelectorAll(".dropdown");

//     dropdowns.forEach((dropdown) => {
//         const toggleButton = dropdown.querySelector(".dropdown-toggle");
//         const menu = dropdown.querySelector(".dropdown-menu");

//         // Show/hide on click
//         toggleButton.addEventListener("click", (event) => {
//             event.stopPropagation();
//             closeAllDropdowns();
//             menu.classList.toggle("visible");
//         });
        
//         // Show on hover
//         dropdown.addEventListener("mouseenter", () => {
//             closeAllDropdowns();
//             menu.classList.add("visible");
//         });
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener("click", () => {
//         closeAllDropdowns();
//     });

//     function closeAllDropdowns() {
//         document.querySelectorAll(".dropdown-menu").forEach((menu) => {
//             menu.classList.remove("visible");
//         });
//     }
// });
//=======================================================================================
