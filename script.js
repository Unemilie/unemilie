// SCRIPT.JS – Slider pour plusieurs onglets

function setupSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    let index = 0;

    function updateSlider() {
        const slideWidth = slider.children[0].clientWidth;
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    const nextBtn = document.querySelector(`.nav.next[data-slider='${sliderId}']`);
    const prevBtn = document.querySelector(`.nav.prev[data-slider='${sliderId}']`);

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slider.children.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);
}

// Initialiser les deux sliders
setupSlider('slider1');
setupSlider('slider2');
