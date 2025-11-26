// SCRIPT.JS – Slider simple

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function updateSlider() {
    const slideWidth = slider.children[0].clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slider.children.length;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});

window.addEventListener("resize", updateSlider);
