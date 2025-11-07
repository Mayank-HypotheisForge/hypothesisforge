// Enhanced mobile menu functionality
const menuIcon = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

if (menuIcon) {
  menuIcon.addEventListener("click", function (event) {
    event.preventDefault();
    const isOpen = document.body.classList.toggle("menu-open");

    // Update aria-expanded for accessibility
    menuIcon.setAttribute("aria-expanded", isOpen);

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
}

// Close menu when clicking on a menu link
const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    if (document.body.classList.contains("menu-open")) {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      if (menuIcon) {
        menuIcon.setAttribute("aria-expanded", "false");
      }
    }
  });
});

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
