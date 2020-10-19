import createElement from "../../assets/lib/create-element"

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











}
