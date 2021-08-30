function maps(){
let tabs = document.querySelectorAll('.tabs'),
  tabsContent = document.querySelectorAll('.map'),
  tabsParent = document.querySelector('.location-block__item');

function hideTabContent() {

  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  tabs.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function (event) {
  const target = event.target;
  if (target && target.classList.contains('tabs')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
}

export default maps;