anime({
    targets: ".archive__item",
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