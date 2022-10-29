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


// tabs choose

const tabsPerent = document.querySelector('.choose__tabs'),
  tabs = document.querySelectorAll('.choose__tab'),
  tabsContent = document.querySelectorAll('.choose__tab-content');

function hideTabsContent() {
  tabsContent.forEach(tabContent => {
    tabContent.classList.add('hide');
    tabContent.classList.remove('show');
  });

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
}

hideTabsContent();

function showTabsContent(i = 0) {
  tabs[i].classList.add('active');
  tabsContent[i].classList.add('show');
  tabsContent[i].classList.remove('hide');
}

showTabsContent();

tabsPerent.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('choose__tab')) {
    tabs.forEach((tab, i) => {
      if (e.target == tab) {
        hideTabsContent();
        showTabsContent(i);
        console.log('gfhfg');
      }
    });
  }
});


