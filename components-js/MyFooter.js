// class MyFooter extends HTMLElement {
// 	constructor() {
// 		super()
// 		fetch('/components-html/footer.html')
// 		.then(res => res.text())
// 		.then(data => {
// 			const templateFot = document.createElement('templateFot')
// 			templateFot.innerHTML = data.trim()
// 			this.appendChild(templateFot.content.cloneNode(true))
// 		})
// 	}
// }

// customElements.define('my-footer', MyFooter)

// export default MyFooter


// MyFooter.js
class MyFooter extends HTMLElement {
  constructor() {
    super();
    fetch('/components-html/footer.html')
      .then(res => res.text())
      .then(data => {
        const template = document.createElement('template');
        template.innerHTML = data.trim();
        this.appendChild(template.content.cloneNode(true));
      })
  }
}

customElements.define('my-footer', MyFooter);

export default MyFooter;
