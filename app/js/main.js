"use strict";

const tabsPerent = document.querySelector('.choose__tabs'),
  tabs = document.querySelectorAll('.choose__tab'),
  tabsContent = document.querySelectorAll('.choose__tab-content');

function hideTabsContent() {
  tabs.forEach(tab => tab.classList.remove('active'));
  tabsContent.forEach(tabContent => tabContent.classList.add('hide'));
}

hideTabsContent();

function showTabsContent(i = 0) {
  tabs[i].classList.add('active');

  tabsContent[i].classList.remove('hide');
  tabs.content[i].classList.add('show');
}

showTabsContent()

tabsPerent.addEventListener('click', (event) => {
  const target = event.target;
  tabs.forEach(tab => {
    if (target && tab === target) {
      hideTabsContent();
      showTabsContent(i);
    }
  });
});

