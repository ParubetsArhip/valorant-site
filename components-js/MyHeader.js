class MyHeader extends HTMLElement { // будет вести себя как стандартный HTML-элемент
  constructor() { // Это то, что происходит когда элемент появляется на странице.
    // Без него этот класс MyHeader не будет правильно инициализирован как HTML-элемент.
    // Если не вызвать super(), то твой элемент не будет работать, потому что он не получит базовые свойства HTML-элемента.
    super(); //  вызывает конструктор родительского класса (HTMLElement)
    fetch('/components-html/header.html') // происходит запрос к файлу header.html
      .then(res => res.text()) // асинхронно читает содержимое файла и возвращает Promise с текстом.
      .then(data => {
        const template = document.createElement('template');
        template.innerHTML = data.trim();
        this.appendChild(template.content.cloneNode(true));
      });
  }
}

// Регистрация компонента
customElements.define('my-header', MyHeader); // customElements.define() регистрирует новый HTML-тег <my-header>, связывая его с классом MyHeader

// Экспорт класса
export default MyHeader;
