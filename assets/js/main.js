// Initialize Lucide icons once the library is available.
if (window.lucide) {
    window.lucide.createIcons();
}

// Handle inquiry form submit by composing a mailto link with all relevant fields.
document.getElementById("inquiry-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = event.currentTarget;
    var name = form.elements.name.value.trim();
    var company = form.elements.company.value.trim();
    var email = form.elements.email.value.trim();
    var category = form.elements.category.value.trim();
    var quantity = form.elements.quantity.value.trim();
    var delivery = form.elements.delivery.value.trim();
    var message = form.elements.message.value.trim();
    var subject = encodeURIComponent("Product inquiry from " + (company || name));
    var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Company: " + (company || "-") + "\n" +
        "Email: " + email + "\n" +
        "Product category: " + (category || "-") + "\n" +
        "Quantity / volume: " + (quantity || "-") + "\n" +
        "Delivery location: " + (delivery || "-") + "\n\n" +
        "Product need:\n" + message
    );

    window.location.href = "mailto:sales@arthahanapranawa.com?subject=" + subject + "&body=" + body;
});

// Scrollspy: highlight the navigation link of the section currently in view.
(function () {
    var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!navLinks.length) return;

    var sections = [];
    navLinks.forEach(function (link) {
        var id = link.getAttribute("href").slice(1);
        var section = document.getElementById(id);
        if (section) sections.push({ link: link, section: section });
    });
    if (!sections.length) return;

    function update() {
        var pos = window.scrollY + 140;
        var current = sections[0];
        for (var i = 0; i < sections.length; i++) {
            if (sections[i].section.offsetTop <= pos) current = sections[i];
        }
        navLinks.forEach(function (l) { l.classList.remove("is-active"); });
        current.link.classList.add("is-active");
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
})();
