// import './MainComponent.scss'

// function burgerMenu() {
//     const burger = document.querySelector('.burger')
//     const menu = document.querySelector('.menu')
//     const body = document.querySelector('.body')

//     burger.addEventListener('click', () => {
//         if (!menu.classList.contains('active')) {
//             menu.classList.add('active')
//             burger.classList.add('active-burger')
//             body.classList.add('locked')
//         } else {
//             menu.classList.remove('active')
//             burger.classList.remove('active-berger')
//             body.classList.remove('locked')
//         }
//     })
//     //Ставим брейкпоинты навбара
//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 991.98) {
//             menu.classList.remove('active')
//             burger.classList.remove('active-berger')
//             body.classList.remove('locked')
//         }
//     })
// }
// burgerMenu()

// //Вызыввем эту функцию, если нужно зафиксировать меню при скролле 
// function fixedNav() {
//     const nav = document.querySelector('nav')

//     //здесь указываем в пикселя, сколько нужно проскроллить чтобы меню стало фиксированным
//     const breakpoint = 1
//     if(window.scrollY > breakpoint) {
//         nav.classList.add('fixed__nav')
//     } else {
//         nav.classList.remove('fixed__nav')
//     }
// }
// window.addEventListener('scroll', fixedNav)
