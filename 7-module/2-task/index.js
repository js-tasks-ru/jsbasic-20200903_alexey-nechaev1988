import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`<div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button> 
      </div>
    </div>
  </div>`)
        
  }

  open(){
    document.body.classList.add('is-modal-open')
    let container = document.querySelector('.container')

        container.append(this.elem)

          this.elem.querySelector('.modal__close').addEventListener('click', e => {
          e.preventDefault()
          document.body.classList.remove('is-modal-open')
           this.elem.remove()
        })

        document.addEventListener('keydown', e => {
          if(e.code === "Escape") {
            e.preventDefault()
            document.body.classList.remove('is-modal-open')
           this.elem.remove()
          }
        })
    
        
                
        
  }
  setTitle(string){
    let title = createElement(`<h3 class="modal__title">
    Modal Title
   </h3>`)

    this.elem.querySelector('.modal__header').append(title)
  }

  setBody(node){
    let body = createElement(`<div class="modal__body">
    
  </div>`)
    this.elem.querySelector('.modal__inner').append(body)
    this.elem.querySelector('.modal__body').appendChild(node)
    // body.classList.add('modal__body')
    console.log(node)
  }
  close(){
    preventDefault()
    document.body.classList.remove('is-modal-open')
    document.querySelector('.modal').remove()       
  }



}
