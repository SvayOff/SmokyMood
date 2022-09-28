$(function () {

  $('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });


  $('.sponsors__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});


"use strict";

// accordion

const accordionItems = document.querySelectorAll('.faq__accordion-item');

for (let i = 0; i < accordionItems.length; i++) {
  let accordionItem = accordionItems[i];

  accordionItem.addEventListener('click', (e) => {

    if (e.target.getAttribute('data-accord') === accordionItem.getAttribute('data-accord')) {
      accordionItem.classList.toggle('active');
    }

  });
}







