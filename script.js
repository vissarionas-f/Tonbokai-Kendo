// menu toggle
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})


// When the user scrolls down numberpx from the top of the document, show the button
mybutton = document.getElementById("scrollButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const scrollpx = 650;
    if (document.body.scrollTop > scrollpx || document.documentElement.scrollTop > scrollpx) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}