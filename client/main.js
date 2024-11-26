import { Button } from './components/Button/Button.js';

const app = document.getElementById('app');

function defineElements() {
  customElements.define('custom-button', Button);
}

defineElements();

const buttonElement = document.createElement('custom-button');
app.append(buttonElement);

// 예제
// class MyElement extends HTMLElement {

//   connectedCallback(){

//   constructor(){
//     super();
//     this.attachShadow({mode:'open'});
//     this.count = 0;
//   }

//   connectedCallback(){
//     this.랜더링();
//     this.card = this.shadowRoot.querySelector('.card');
//     this.card.addEventListener('click',()=>{
//       this.이벤트()
//     })
//     this.card.addEventListener('click', this.이벤트.bind(this))
//   }

//   이벤트(){
//     console.log(++this.count);
//   }
//   랜더링(){
//     this.shadowRoot.innerHTML = `

//       <style>
//        @import url('./style.css');
//         .card{
//           background-color:orange;
//         }
//       </style>

//       <div class="card">
//         <slot name="title">Default Title</slot>
//         <slot name="content">Default Contents</slot>
//         <slot></slot>
//         <h2>Card Title</h2>
//         <slot name="me"></slot>
//         <p> description..</p>
//       </div>

//     `
//   }

// }
// customElements.define('my-element',MyElement);
//   static get observedAttributes(){
//     return ['data-name']
//   }

//   attributeChangedCallback(name,oldValue,newValue){
//     if(name === 'data-name'){
//       this.랜더링();
//       console.log('리랜더링');

//     }
//   }

// }

// customElements.define('my-element',MyElement);
