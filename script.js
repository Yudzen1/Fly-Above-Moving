// Fly Above Moving site interactions
(function () {
  const quickForm = document.getElementById("quickForm");
  const contactForm = document.getElementById("contactForm");
  const reviewForm = document.getElementById("reviewForm");

  const quickMsg = document.getElementById("quickMsg");
  const contactMsg = document.getElementById("contactMsg");
  const reviewMsg = document.getElementById("reviewMsg");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    const closeNav = () => {
      mobileNav.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
    };
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });
    mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  function openMail(subject, body) {
    const mailto =
      "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailto;
  }

  function validateForm(form) {
    let ok = true;
    form.querySelectorAll("[required]").forEach((el) => {
      if (!el.value || !String(el.value).trim()) {
        ok = false;
        el.setAttribute("aria-invalid", "true");
      } else {
        el.removeAttribute("aria-invalid");
      }
    });
    return ok;
  }

  if (quickForm) {
    quickForm.addEventListener("submit", (e) => {
      e.preventDefault();
      quickMsg.textContent = "";
      if (!validateForm(quickForm)) {
        quickMsg.textContent = "Please fill all fields.";
        return;
      }
      const data = new FormData(quickForm);
      const name = data.get("name");
      const phone = data.get("phone");
      const details = data.get("details");

      const subject = "Fly Above Moving — Quote request";
      const body =
        "Name: " + name +
        "\nPhone: " + phone +
        "\n\nDetails:\n" + details +
        "\n\nCall back: (+1 872-251-0096)";
      openMail(subject, body);
      quickMsg.textContent = "Opening your email app…";
      quickForm.reset();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactMsg.textContent = "";
      if (!validateForm(contactForm)) {
        contactMsg.textContent = "Please fill all fields.";
        return;
      }
      const data = new FormData(contactForm);
      const cname = data.get("cname");
      const cphone = data.get("cphone");
      const route = data.get("route");
      const cdetails = data.get("cdetails");

      const subject = "Fly Above Moving — Moving request";
      const body =
        "Name: " + cname +
        "\nPhone: " + cphone +
        "\nRoute: " + route +
        "\n\nDetails:\n" + cdetails +
        "\n\nYou can also call: (+1 872-251-0096)";
      openMail(subject, body);
      contactMsg.textContent = "Opening your email app…";
      contactForm.reset();
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      reviewMsg.textContent = "";
      if (!validateForm(reviewForm)) {
        reviewMsg.textContent = "Please fill all fields.";
        return;
      }
      const data = new FormData(reviewForm);
      const rname = data.get("rname");
      const rating = data.get("rating");
      const rmsg = data.get("rmsg");

      const subject = "Fly Above Moving — Feedback / Review";
      const body =
        "Name: " + rname +
        "\nRating: " + rating + "/5" +
        "\n\nMessage:\n" + rmsg +
        "\n\nThank you!";
      openMail(subject, body);
      reviewMsg.textContent = "Opening your email app…";
      reviewForm.reset();
    });
  }
})();
