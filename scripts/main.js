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
    var toggle = document.querySelector(".toggle-nav");
    var mobileMenu = document.querySelector(".mobileMenubar");

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        var expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
        this.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      });
    }

    var currentHref = window.location.href.split("?")[0].split("#")[0];
    document.querySelectorAll("a[href]").forEach(function (link) {
      var linkHref = link.href.split("?")[0].split("#")[0];
      if (linkHref === currentHref) {
        link.classList.add("active");
      }
    });
  });
})();
