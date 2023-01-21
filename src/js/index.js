import '../scss/styles.scss';

// get DOM elements
const faqContainer = document.querySelector('.faq-card__body-wrapper'); // get faq container

// function to hide or show answer
const hideOrShowAnswer = (e) => {
  // get all question-answer wrapper
  const qaList = document.querySelectorAll('.faq-card__qa-wrapper');

  if (e.target.matches('button')) {
    // get parent element of the clicked button
    const parentEl = e.target.parentElement; // get parent element of the clicked button

    // check if parent element has class active
    if (parentEl.classList.contains('active')) {
      parentEl.classList.remove('active');
    } else {
      qaList.forEach((qa) => {
        qa.classList.remove('active');
      });

      // add class active to parent element
      parentEl.classList.add('active');
    }
  }
};

faqContainer.addEventListener('click', hideOrShowAnswer);
