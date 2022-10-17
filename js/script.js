// //project__slider

// const slidesPrj = document.querySelectorAll('.project__wrapper img');
// const wrapper = document.querySelector('.project__wrapper');
// let count = 0;
// let width;

// function init () {
//     width = document.querySelector('.project__slider').offsetWidth;
//     console.log(width);
//     wrapper.style.width = width * slidesPrj.length +'px';
//     slidesPrj.forEach(item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     rollSlider();
// }

// window.addEventListener('resize', init);
// init();

// document.querySelector('#prev').addEventListener('click', () => {
//     count--;
//     if (count < 0) {
//         count = slidesPrj.length - 1;
//     }
//     rollSlider();
// });

// document.querySelector('#next').addEventListener('click', () => {
//     count++;
//     if (count >= slidesPrj.length) {
//         count = 0;
//     }
//     rollSlider();
// });

// function rollSlider() {
//     wrapper.style.transform = 'translate(-' + count * width +'px)';
// }

// //reviews__slider

// const slides = document.querySelector('.reviews__items'),
//       prev = document.querySelector('.reviews__btn-prev'),
//       next = document.querySelector('.reviews__btn-next');
// let offsetReviews = 0;

// next.addEventListener('click', () => {
//     offsetReviews += 728;
//     if (offsetReviews > 1456) {
//         offsetReviews = 0;
//     }
//     slides.style.left = -offsetReviews + 'px';
// });

// prev.addEventListener('click', () => {
//     offsetReviews -= 728;
//     if (offsetReviews < 0) {
//         offsetReviews = 1456;
//     }
//     slides.style.left = -offsetReviews + 'px';
// });

// //reviews вариант 3  

// let slideIndex = 1;
// /* Вызываем функцию, которая реализована ниже: */
// showSlides(slideIndex);

// /* Увеличиваем индекс на 1 — показываем следующий слайд: */
// function nextSlide() {
//     showSlides(slideIndex += 1);
// }

// document.querySelector('.reviews__btn-next').addEventListener('click', nextSlide);
// document.querySelector('.reviews__btn-prev').addEventListener('click', previousSlide);

// /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
// function previousSlide() {
//     showSlides(slideIndex -= 1);
// }

// /* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Функция перелистывания: */
// function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
//     let slides = document.getElementsByClassName("reviews__item");

//     /* Проверяем количество слайдов: */
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     /* Проходим по каждому слайду в цикле for: */
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     /* Делаем элемент блочным: */
//     slides[slideIndex - 1].style.display = "flex";
// }


//слайдер с помощья animated

const slider = (slides, prev, next) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slides),
          prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    function showSlides (n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animate__animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'flex';
    }

    showSlides(slideIndex);

    function plusSlide (n) {
        showSlides(slideIndex += n);
    }

    prevBtn.addEventListener('click', () => {
        plusSlide(-1);
        items[slideIndex - 1].classList.remove('animate__fadeInRight');
        items[slideIndex - 1].classList.add('animate__fadeInLeft');
    });

    nextBtn.addEventListener('click', () => {
        plusSlide(1);
        items[slideIndex - 1].classList.remove('animate__fadeInLeft');
        items[slideIndex - 1].classList.add('animate__fadeInRight');
    });
};

slider('.project__item', '.project__btn-prev', '.project__btn-next');
slider('.reviews__item', '.reviews__btn-prev', '.reviews__btn-next');

//humb 

function hamburger (hamb, popup, menu) {
    const hambBtn = document.querySelector(hamb),
          popupPage = document.querySelector(popup),
          menuItem = document.querySelector(menu).cloneNode(1),
          body = document.body; 
    
    hambBtn.addEventListener('click', hambHandler);

    function hambHandler (e) {
        e.preventDefault();
        popupPage.classList.toggle('open');
        hambBtn.classList.toggle('active');
        body.classList.toggle('noscroll');
        renderPopup();
    }
    
    function renderPopup () {
        popupPage.appendChild(menuItem);
    }
}

hamburger("#hamb", "#popup", "#menu");