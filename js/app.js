/* nav hamburger menu */
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

/* Pricing button toggler */
const toggler = document.querySelector(".toggler");
const basicPrice = document.querySelector(".basic");
const advancePrice = document.querySelector(".advance");
const standardPrice = document.querySelector(".standard");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    basicPrice.innerHTML = `₹948 <span> / year </span>`;
    advancePrice.innerHTML = `₹3348 <span> / year </span>`;
    standardPrice.innerHTML = `₹1668 <span> / year </span>`;
  } else {
    basicPrice.innerHTML = `₹79 <span> / month </span>`;
    advancePrice.innerHTML = `₹279 <span> / month </span>`;
    standardPrice.innerHTML = `₹139 <span> / month </span>`;
  }
});

//   testimonial slider
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}

$(document).ready(function () {
  initParadoxWay();
});

/* dark mode */
const darkMode = document.querySelector("#switch-button");
const darkNav = document.querySelector(".nav");
const darkNavMenu = document.querySelector(".nav-menu ");
const darkHero = document.querySelector(".heroheader");
const darkSectionh2 = document.querySelector(".box-text-section h2");
const darkSectionp = document.querySelector(".box-text-section p");
const darkPricePlans = document.querySelector(".pricing-plans-main");
const darkPriceBasic = document.querySelector(".pricingbasic");
const darkPriceBasich2 = document.querySelector(".pricingbasic h2");
const darkPriceStandard = document.querySelector(".pricingstandard");
const darkPriceStandardh2 = document.querySelector(".pricingstandard h2");
const darkPriceAdvance = document.querySelector(".pricingadvance");
const darkTestimonial = document.querySelector("#review");
const darkTestimonialBox = document.querySelector(".testimonials-text");
const darkAboutUs = document.querySelector(".about-main");
const darkAboutBorder = document.querySelector(".aboutcontainer");
const darkContactUsText = document.querySelector(".contact-section-text p");
const darkContactUsInput = document.querySelector(".form-text");
const darkContactUsLabel = document.getElementsByTagName("label");
const darkFooter = document.querySelector(".footer");

/* click event */
/* darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-secondary-color");
  darkNav.classList.toggle("dark-primary-color");
  darkNavMenu.classList.toggle("dark-primary-color");
  darkHero.classList.toggle("dark-secondary-color");
  darkPricePlans.classList.toggle("dark-secondary-color");
  darkTestimonial.classList.toggle("dark-secondary-color");
  darkSectionh2.classList.toggle("lighter-color");
  darkSectionp.classList.toggle("lighter-color");
  darkAboutUs.classList.toggle("dark-secondary-color");
  darkAboutBorder.classList.toggle("border-color");
  darkContactUsText.classList.toggle("lighter-color");
  darkPriceBasic.classList.toggle("dark-primary-color");
  darkPriceBasich2.classList.toggle("lighter-color");
  darkPriceStandard.classList.toggle("dark-primary-color");
  darkPriceStandardh2.classList.toggle("lighter-color");
  darkPriceAdvance.classList.toggle("dark-primary-color");
  darkFooter.classList.toggle("dark-primary-color");
}); */

//using for each loop to add event listener to all the cards in the page
/* document.querySelectorAll(".box2").forEach((serviceCards) => {
  darkMode.addEventListener("click", () => {
    serviceCards.classList.toggle("dark-primary-color");
  });
});

document.querySelectorAll(".pricingbasic li").forEach((basicli) => {
  darkMode.addEventListener("click", () => {
    basicli.classList.toggle("lighter-color");
  });
});

document.querySelectorAll(".pricingstandard li").forEach((standardli) => {
  darkMode.addEventListener("click", () => {
    standardli.classList.toggle("lighter-color");
  });
});

document.querySelectorAll(".testimonials-text").forEach((testimonialCards) => {
  darkMode.addEventListener("click", () => {
    testimonialCards.classList.toggle("dark-primary-color");
  });
});

document.querySelectorAll(".form-text").forEach((formtext) => {
  darkMode.addEventListener("click", () => {
    formtext.classList.toggle("dark-primary-color");
  });
});

document.querySelectorAll(".contact-label").forEach((contactlabel) => {
  darkMode.addEventListener("click", () => {
    contactlabel.classList.toggle("lighter-color");
  });
}); */

//set the click event default when the page loads
if ((darkMode.checked = true)) {
  document.body.classList.toggle("dark-secondary-color");
  darkHero.classList.toggle("dark-secondary-color");
  darkPricePlans.classList.toggle("dark-secondary-color");
  darkTestimonial.classList.toggle("dark-secondary-color");
  darkSectionh2.classList.toggle("lighter-color");
  darkSectionp.classList.toggle("lighter-color");
  darkAboutUs.classList.toggle("dark-secondary-color");
  darkAboutBorder.classList.toggle("border-color");
  darkContactUsText.classList.toggle("lighter-color");
  darkPriceBasic.classList.toggle("dark-primary-color");
  darkPriceBasich2.classList.toggle("lighter-color");
  darkPriceStandard.classList.toggle("dark-primary-color");
  darkPriceStandardh2.classList.toggle("lighter-color");
  darkPriceAdvance.classList.toggle("dark-primary-color");
  darkFooter.classList.toggle("dark-primary-color");

  document.querySelectorAll(".box2").forEach((serviceCards) => {
    serviceCards.classList.toggle("dark-primary-color");
  });

  document.querySelectorAll(".pricingbasic li").forEach((basicli) => {
    basicli.classList.toggle("lighter-color");
  });

  document.querySelectorAll(".pricingstandard li").forEach((standardli) => {
    standardli.classList.toggle("lighter-color");
  });

  document
    .querySelectorAll(".testimonials-text")
    .forEach((testimonialCards) => {
      testimonialCards.classList.toggle("dark-primary-color");
    });

  document.querySelectorAll(".form-text").forEach((formtext) => {
    formtext.classList.toggle("dark-primary-color");
  });
}
