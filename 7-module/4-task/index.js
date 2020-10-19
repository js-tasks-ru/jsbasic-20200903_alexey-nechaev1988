import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.value = value

    this.render()
  }

  render() {
    let stepsSpan = '<span></span>'
    for(let i = 0; i < this.steps - 2; i++) {
      stepsSpan += '<span></span>'
      }
    
    this.elem = createElement(`<div class="slider"> 
    <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">${this.value}</span>
    </div>

    <div class="slider__progress" style="width: 0%;"></div>

    <div class="slider__steps">
      <span class="slider__step-active"></span>
      ${stepsSpan}
    </div>
  </div>`)

      this.clickListener()
      this.pointerMoveListener()

  }

  clickListener() {
    this.elem.addEventListener('click', e => {
   
      let left = e.clientX - this.elem.getBoundingClientRect().left
      let segments = this.steps-1
      let relativeLeft = left / this.elem.offsetWidth
      let value = Math.round( relativeLeft * segments )
      let valuePercent = value / segments * 100

      let thumb = this.elem.querySelector('.slider__thumb')
      let progress = this.elem.querySelector('.slider__progress')

      this.elem.querySelector('.slider__value').innerHTML = value
      thumb.style.left = `${valuePercent}%`
      progress.style.width = `${valuePercent}%`

      let spans = this.elem.querySelectorAll('span')
      this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active')
      spans[value + 1].classList.add('slider__step-active')

      e.target.dispatchEvent(new CustomEvent('slider-change', {
        detail: value,
        bubbles:true
      }))

  })
  }

  pointerMoveListener() {
    let segments = this.steps - 1
    let thumb = this.elem.querySelector('.slider__thumb')
    thumb.onpointerdown = function(event) {
      event.preventDefault()
      let slider = event.target.parentElement  
      slider.classList.add('slider_dragging')

      document.addEventListener('pointermove', onPointerMove)
      document.addEventListener('pointerup', onPointerUp)

      function onPointerMove(e) {
        let progress = slider.querySelector('.slider__progress')
        let left = e.clientX - slider.getBoundingClientRect().left
        
        let relativeLeft = left / slider.offsetWidth
        let leftPercent = relativeLeft * 100
        if(leftPercent < 0) {
          leftPercent = 0
        }
        if(leftPercent > 100) {
          leftPercent = 100
        }
            
        thumb.style.left = `${leftPercent}%`
        progress.style.width = `${leftPercent}%`

      }

      function onPointerUp(e) {
       document.removeEventListener('pointerup', onPointerUp) 
       document.removeEventListener('pointermove', onPointerMove)
       slider.classList.remove('slider_dragging')

       let left = e.clientX - slider.getBoundingClientRect().left
        
      let relativeLeft = left / slider.offsetWidth
      let leftPercent = relativeLeft * 100
  
        if(relativeLeft < 0) {
          relativeLeft = 0
        }
        if(relativeLeft > 1) {
          relativeLeft = 1
        }
       let value = Math.round( relativeLeft * segments )
       console.log(relativeLeft)
  
       
       e.target.dispatchEvent(new CustomEvent('slider-change', {
        detail: value,
        bubbles:true
      }))
      }

      
  }
  thumb.ondragstart = () => false
    
  }

}