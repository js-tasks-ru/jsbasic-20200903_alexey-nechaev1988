import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.render()
    this.addEvents()
    
  }
   render() {
    let categories = this.categories.map( obj => 
    `<a href="#" class="ribbon__item" data-id="${obj.id}">${obj.name}</a>
     `
    ).join('')
     this.elem = createElement(`<div class="ribbon">
     <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
    ${categories}
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
    `)
    
    this.update()
    let rightArr = this.sub('arrow_right')
    rightArr.classList.toggle('ribbon__arrow_visible')
    this.elem.querySelector('[data-id]').classList.add('ribbon__item_active')

  }

   addEvents() {
     this.elem.onclick = ({target}) => {
       
       let el = target.closest('.ribbon__item')
  
       if(el) {
         this.sub('item_active').classList.toggle('ribbon__item_active')
         el.classList.toggle('ribbon__item_active')
         let category = el.dataset
         
         target.dispatchEvent(new CustomEvent('ribbon-select', {
           detail: category.id,
           bubbles:true
         }))
       }
       
}

   }

   sub(ref) {
     return this.elem.querySelector(`.ribbon__${ref}`)
   }

   right() {

   }

   left() {

   }

   update() {
    let ribbonInner = this.sub('inner')
    
    let rightArr = this.sub('arrow_right')
    let leftArr = this.sub('arrow_left')

    
    let scrollLeft = ribbonInner.scrollLeft
    let scrollWidth = ribbonInner.scrollWidth
    let clientWidth = ribbonInner.clientWidth

   let scrollRight = scrollWidth - clientWidth - scrollLeft

    if(scrollLeft === 0) {
      leftArr.classList.remove('ribbon__arrow_visible')
    } else  {
     leftArr.classList.add('ribbon__arrow_visible')
    } 

    if(scrollRight < 1) {
      rightArr.classList.remove('ribbon__arrow_visible')
    } else {
      rightArr.classList.add('ribbon__arrow_visible')
    }

    rightArr.addEventListener('click', () => {
      ribbonInner.scrollBy(350,0)
      this.update()
    })

    leftArr.addEventListener('click', () => {
      ribbonInner.scrollBy(-350,0)
      this.update()
    })
       
   }

}
