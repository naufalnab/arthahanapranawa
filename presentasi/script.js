(function () {
    const deck = document.querySelector(".deck-shell");
    const slides = Array.from(document.querySelectorAll("[data-slide]"));
    const slideLabel = document.getElementById("slideLabel");
    const progressBar = document.getElementById("progressBar");
    const notesText = document.getElementById("notesText");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const notesBtn = document.getElementById("notesBtn");
    const printBtn = document.getElementById("printBtn");
    let current = 0;

    function clamp(index) {
        return Math.max(0, Math.min(index, slides.length - 1));
    }

    function readSlideFromHash() {
        const match = window.location.hash.match(/^#slide-(\d+)$/);
        if (!match) return 0;
        return clamp(Number(match[1]) - 1);
    }

    function setSlide(index, updateHash = true) {
        current = clamp(index);
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === current);
            slide.setAttribute("aria-hidden", slideIndex === current ? "false" : "true");
        });

        const activeSlide = slides[current];
        const title = activeSlide.dataset.title || `Slide ${current + 1}`;
        const note = activeSlide.querySelector(".speaker-note");
        slideLabel.textContent = `${title} · ${current + 1} / ${slides.length}`;
        notesText.textContent = note ? note.textContent.trim() : "";
        progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === slides.length - 1;

        if (updateHash) {
            history.replaceState(null, "", `#slide-${current + 1}`);
        }
    }

    function toggleNotes() {
        const isOpen = deck.dataset.notesOpen === "true";
        deck.dataset.notesOpen = String(!isOpen);
        notesBtn.setAttribute("aria-pressed", String(!isOpen));
    }

    prevBtn.addEventListener("click", () => setSlide(current - 1));
    nextBtn.addEventListener("click", () => setSlide(current + 1));
    notesBtn.addEventListener("click", toggleNotes);
    printBtn.addEventListener("click", () => window.print());

    document.addEventListener("keydown", (event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;

        if (["ArrowRight", "PageDown", " "].includes(event.key)) {
            event.preventDefault();
            setSlide(current + 1);
        }

        if (["ArrowLeft", "PageUp"].includes(event.key)) {
            event.preventDefault();
            setSlide(current - 1);
        }

        if (event.key === "Home") {
            event.preventDefault();
            setSlide(0);
        }

        if (event.key === "End") {
            event.preventDefault();
            setSlide(slides.length - 1);
        }

        if (event.key.toLowerCase() === "n") {
            event.preventDefault();
            toggleNotes();
        }

        if (event.key.toLowerCase() === "p") {
            event.preventDefault();
            window.print();
        }
    });

    window.addEventListener("hashchange", () => setSlide(readSlideFromHash(), false));
    setSlide(readSlideFromHash(), false);
})();
