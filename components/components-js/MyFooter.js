class MyFooter extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      fetch('./components/components-html/footer.html')
         .then(res => res.text())
         .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data.trim();
            this.appendChild(template.content.cloneNode(true));
         });
   }
}

customElements.define('my-footer', MyFooter);
export default MyFooter;
