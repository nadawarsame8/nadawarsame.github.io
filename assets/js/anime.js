if (typeof anime === "function") {
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
}

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

const lightbox = document.querySelector(".lightbox");
const lightboxTitle = lightbox && lightbox.querySelector("#lightbox-title");
const lightboxArt = lightbox && lightbox.querySelector(".lightbox-art");
const lightboxClose = lightbox && lightbox.querySelector(".lightbox-close");

function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
}

function openLightbox(trigger) {
    if (!lightbox || !lightboxTitle || !lightboxArt) return;
    lightboxTitle.textContent = trigger.dataset.lightboxLabel || "Journey media";
    lightboxArt.className = `lightbox-art ${trigger.className.replace("media-card", "")}`;
    lightboxArt.replaceChildren();
    if (trigger.dataset.lightboxSrc) {
        const image = document.createElement("img");
        image.src = trigger.dataset.lightboxSrc;
        image.alt = trigger.dataset.lightboxLabel || "Journey media";
        lightboxArt.appendChild(image);
    }
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightboxClose.focus();
}

document.querySelectorAll("[data-lightbox-label]").forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
});

document.querySelectorAll("[data-expand-details]").forEach((button) => {
    button.addEventListener("click", () => {
        const details = button.closest(".timeline-content").querySelector("details");
        details.open = !details.open;
        button.textContent = details.open ? "Close Details" : "Read More";
    });
});

if (lightbox) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLightbox();
    });
}

document.querySelectorAll("[data-leadership-details]").forEach((button) => {
    button.addEventListener("click", () => {
        const details = button.closest(".leadership-copy").querySelector("details");
        details.open = !details.open;
        button.textContent = details.open ? "Close Details" : "Read More";
    });
});

document.querySelectorAll("[data-leadership-media]").forEach((button) => {
    button.addEventListener("click", () => {
        const label = button.dataset.leadershipMedia;
        window.alert(`${label} can be added when the relevant photos are available.`);
    });
});