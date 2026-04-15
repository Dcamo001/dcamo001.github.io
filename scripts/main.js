(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    document.querySelectorAll(".mobileMenubar").forEach(function (mobileMenu) {
      if (mobileMenu.tagName === "NAV") return;
      var toggle = mobileMenu.querySelector(".toggle-nav");
      var nav =
        mobileMenu.querySelector("nav.mobileMenubar-inner") ||
        mobileMenu.querySelector(":scope > nav");
      if (!toggle || !nav) return;

      nav.hidden = !mobileMenu.classList.contains("active");

      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        mobileMenu.classList.toggle("active");
        var open = mobileMenu.classList.contains("active");
        nav.hidden = !open;
        if (toggle.hasAttribute("aria-expanded")) {
          toggle.setAttribute("aria-expanded", open ? "true" : "false");
        }
        if (toggle.hasAttribute("aria-label")) {
          toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        }
        toggle.classList.toggle("active", open);
      });
    });

    var currentHref = window.location.href.split("?")[0].split("#")[0];
    document.querySelectorAll("a[href]").forEach(function (link) {
      var linkHref = link.href.split("?")[0].split("#")[0];
      if (linkHref === currentHref) {
        link.classList.add("active");
      }
    });
  });
})();
