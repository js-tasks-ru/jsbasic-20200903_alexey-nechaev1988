import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor( product ) {
    this.image = product.image
    this.price =  product.price.toFixed(2)
    this.name = product.name
    this.id = product.id

    this.elem = document.createElement('div')
    this.elem.classList.add('card')
    
    this.elem.innerHTML = `
        <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
        </div>
        `;
        
        let button = this.elem.querySelector('button')
        button.addEventListener('click', event => this.onClick(event))
    }
    onClick(event) {  
        event.target.dispatchEvent(new CustomEvent ("product-add", {
        detail: this.id,
        bubbles:true
      }))
    }
  }
    
