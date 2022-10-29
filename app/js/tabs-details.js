
// tabs details

const detailsTabsPerent = document.querySelector('.details__tabs'),
  detailsTabs = document.querySelectorAll('.details__tab'),
  detailsTabsContent = document.querySelectorAll('.details__tab-content');



function hideTabsDetails() {
  detailsTabsContent.forEach(tabContent => {
    tabContent.classList.add('hide');
    tabContent.classList.remove('show');
  });
  detailsTabs.forEach(tab => {
    tab.classList.remove('active');
  });
}
hideTabsDetails();

function showTabsContentDetails(i = 0) {
  detailsTabs[i].classList.add('active');
  detailsTabsContent[i].classList.add('show');
  detailsTabsContent[i].classList.remove('hide');
}
showTabsContentDetails();

detailsTabsPerent.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('details__tab')) {
    detailsTabs.forEach((tab, i) => {
      if (e.target == tab) {
        hideTabsDetails();
        showTabsContentDetails(i);
      }
    });
  }
}); 
