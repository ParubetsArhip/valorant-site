// document.querySelector('.search-button').addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('.search-input').classList.toggle('active-input')
// })
//




class HeaderInput {
    constructor() {
        document.querySelector('.search-button').addEventListener('click', (e) => {
            e.preventDefault();
            let input = document.querySelector('.search-input');
            input.classList.toggle('active-input');

            if (input.classList.contains('active-input')) {
                input.focus();
            }
        });

        console.log('hello');
    }
}

// document.querySelector('.search-button').addEventListener('click', (e) => {
//     e.preventDefault();
//     let input = document.querySelector('.search-input');
//     input.classList.toggle('active-input');
//
//     if (input.classList.contains('active-input')) {
//         input.focus();
//     }
// });
//
// console.log('hello')
