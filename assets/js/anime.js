anime({
    targets: ".welcome-block",
    translateY: [
        { value: 0, duration: 300 },
        { value: -18, duration: 450 },
        { value: 0, duration: 500 },
        { value: -8, duration: 250 },
        { value: 0, duration: 350 },
    ],
    easing: "easeOutBounce",
    delay: function (el, i, l) {
        return i * 180;
    },
    loop: false,
});

const timelineItems = document.querySelectorAll(".timeline-item");

if (timelineItems.length && "IntersectionObserver" in window) {
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    timelineItems.forEach((item) => timelineObserver.observe(item));
} else {
    timelineItems.forEach((item) => item.classList.add("is-visible"));
}