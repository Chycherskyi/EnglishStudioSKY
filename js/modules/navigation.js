function navigation() {
  const burger = document.querySelector(".navbar-block__burger");

  const iconBurger = document.querySelector(".fa-bars");
  const iconX = document.querySelector(".fa-times");
  const column = document.querySelector(".navbar-mobile");

  burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");

  })

  document.querySelectorAll('a.header-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.innerWidth < 760 && e.target !== document.querySelector('.logo')) {
        iconBurger.classList.toggle("show");
        iconX.classList.toggle("show");
        column.classList.toggle("show");
      }

      const href = this.getAttribute('href').substring(1),
        scrollTarget = document.getElementById(href),
        topOffset = 70,
        elementPosition = scrollTarget.getBoundingClientRect().top,
        offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      })
    })
  })

}
export default navigation;