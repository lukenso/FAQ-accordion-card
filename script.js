const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector('.faq-arrow');
    const title = question.querySelector('.faq-title');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      title.classList.remove('active');
    } else {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
      title.classList.add('active');
    }
  });
});