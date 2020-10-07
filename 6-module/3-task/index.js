import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.elem = document.createElement('div')
    this.elem.classList.add('carousel')

    this.elem.innerHTML = `<div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>
  <div class="carousel__inner"></div>
  `
  const carouselInner = this.elem.querySelector('.carousel__inner')
  
  slides.forEach( (obj) => {
    carouselInner.innerHTML += `<div class="carousel__slide" data-id="${obj.id}">
  <img src="/assets/images/carousel/${obj.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${(obj.price).toFixed(2)}</span>
    <div class="carousel__title">${obj.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`
    })

    const button = this.elem.querySelector('button')
    button.addEventListener('click', e => this.onClick.bind(this))
    const carouselSlides = Array.from(carouselInner.children)
    carouselSlides[0].classList.add('current-slide')

    carouselSlides.forEach( (slide, index) => {
      slide.id = 988 * index + 'px'
      })
        
    const rightArrow = this.elem.querySelector('.carousel__arrow_right')
    const leftArrow = this.elem.querySelector('.carousel__arrow_left')
    leftArrow.style.display = 'none'

    const hideShowArrows = (carouselSlides, leftArrow, rightArrow, currentIndex) => {
      if (currentIndex === 0) {
        leftArrow.style.display = 'none'
      
      } else if (currentIndex === carouselSlides.length - 1){
        rightArrow.style.display = 'none'
      } else {
        leftArrow.style.display = ''
        rightArrow.style.display = ''
      }
      }
    
    rightArrow.addEventListener('click', ev => {
      const currentSlide = carouselInner.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling
      const amountToMove = nextSlide.id
      const nextIndex = carouselSlides.findIndex( slide => slide === nextSlide )
      carouselInner.style.transform = 'translateX(-' + amountToMove + ')'
      currentSlide.classList.remove('current-slide')
      nextSlide.classList.add('current-slide')

      hideShowArrows(carouselSlides, leftArrow, rightArrow, nextIndex)
    })

    leftArrow.addEventListener('click', e => {
      const currentSlide = carouselInner.querySelector('.current-slide')
      const prevSlide = currentSlide.previousElementSibling
      const amountToMove = prevSlide.id
      const prevIndex = carouselSlides.findIndex( slide => slide === prevSlide )
    
      carouselInner.style.transform = 'translateX(-' + amountToMove + ')'
      currentSlide.classList.remove('current-slide')
      prevSlide.classList.add('current-slide')
      
      hideShowArrows(carouselSlides, leftArrow, rightArrow, prevIndex)
    }) 
  }

onClick(ev){
  const custEvent = new CustomEvent('product-add', {
    detail: ev.target,
    bubbles: true
  })
  this.elem.dispatchEvent(custEvent)
    }


}