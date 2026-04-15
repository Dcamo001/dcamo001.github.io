(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function mobileMenuNav(menu) {
    var inner = menu.querySelector("nav.mobileMenubar-inner");
    if (inner) return inner;
    var ch = menu.children;
    for (var i = 0; i < ch.length; i++) {
      if (ch[i].tagName === "NAV") return ch[i];
    }
    return null;
  }

  ready(function () {
    document.querySelectorAll(".mobileMenubar").forEach(function (mobileMenu) {
      if (mobileMenu.tagName === "NAV") return;
      var toggle = mobileMenu.querySelector(".toggle-nav");
      var nav = mobileMenuNav(mobileMenu);
      if (!toggle || !nav) return;

      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        mobileMenu.classList.toggle("active");
        var open = mobileMenu.classList.contains("active");
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
