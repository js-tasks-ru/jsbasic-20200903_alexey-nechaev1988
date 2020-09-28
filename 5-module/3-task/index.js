function initCarousel() {
  // ваш код...
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const inner = document.querySelector('.carousel__inner');
  const slides = Array.from(inner.children);
  leftArrow.style.display = 'none';
  slides[0].classList.add('current-slide');
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  slides.forEach( (slide, index) => {
  slide.id = slideWidth * index + 'px';
  })
  
  const hideShowArrows = (slides, leftArrow, rightArrow, currentIndex) => {
    if (currentIndex === 0) {
      leftArrow.style.display = 'none';
    
    } else if (currentIndex === slides.length - 1){
      rightArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    }
    }
    
  rightArrow.addEventListener('click', e => {
    const currentSlide = inner.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.id;
    const nextIndex = slides.findIndex( slide => slide === nextSlide );
    inner.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
  
   hideShowArrows(slides, leftArrow, rightArrow, nextIndex);
  })
  
  leftArrow.addEventListener('click', e => {
    const currentSlide = inner.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.id;
    const prevIndex = slides.findIndex( slide => slide === prevSlide )
  
    inner.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
    
    hideShowArrows(slides, leftArrow, rightArrow, prevIndex);
  }) 
}