import '../scss/styles.scss';

// get DOM elements

const questionBtns = document.querySelectorAll('.faq-card__qa-question'); // get all question buttons
const qaWrapperCollection = document.querySelectorAll('.faq-card__qa-wrapper'); // get all qa wrapper

questionBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parentEl = e.target.parentElement; // get parent element of the clicked button

    // check if parent element has class active
    if (parentEl.classList.contains('active')) {
      parentEl.classList.remove('active');
    } else {
      // remove active class from all qa wrapper
      qaWrapperCollection.forEach((qaWrapper) => {
        qaWrapper.classList.remove('active');
      });

      // add active class to parent element
      parentEl.classList.add('active');
    }
  });
});
