import ModalWindow from "../../scripts/ModalWindow";

class MyHeader extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      fetch('./components/components-html/header.html')
         .then(res => res.text())
         .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data.trim();
            this.appendChild(template.content.cloneNode(true));
            new ModalWindow()
         });
   }
}

customElements.define('my-header', MyHeader);

export default MyHeader;
