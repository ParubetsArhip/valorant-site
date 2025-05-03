class MyModal extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      fetch('./components/components-html/modal.html')
         .then(res => res.text())
         .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data.trim();
            this.appendChild(template.content.cloneNode(true));
         });
   }
}

customElements.define('my-modal', MyModal);
export default MyModal;
