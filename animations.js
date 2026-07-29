// Animate elements on user scroll

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
    });
},
    {
        threshold: 0.2
    });

const initAnimations = () => {
    const elements = document.querySelectorAll(".animate");

    elements.forEach((element, index) => {

    let delay;

    if (element.tagName === "H2") {
        delay = 0.2;
    }

    else if (element.classList.contains("menu-item")) {
        delay = (index % 8) * 0.02;
    }
    else {
        delay = index * 0.05;
    }

    element.style.transitionDelay = `${delay}s`;
    observer.observe(element);
    });
};

initAnimations();

