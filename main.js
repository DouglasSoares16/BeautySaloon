/* Abre e fecha o menu*/
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

const links = document.querySelectorAll('nav ul li a');

for(const element of links) {
    element.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}


// Adicionar sombra ao HEADER quando der o SCROLL

const header = document.querySelector("#header");
function changeHeader() {
    if(window.scrollY > 80) {
        header.classList.add('scroll')
    }
    else {
        header.classList.remove('scroll')
    }
}

const buttonUp = document.querySelector('.back-top');
function backToTop() {

    if(window.scrollY >= 2500) {
        buttonUp.classList.add('showup');
    }
    else {
        buttonUp.classList.remove('showup');
    }
    
}

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight; 

        if(checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active');
        }
        else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active');
        }
    }
}

window.addEventListener('scroll', () => {
    changeHeader();
    backToTop();
    activateMenuSection();
});


// Usando o Swiper para fazer os depoimentos em forma de slide

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

// ScrollReveal -> Mostra elementos quando der scroll na página

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
    reset: true
});

scrollReveal.reveal(`
    #home .image,
    #home .text,
    #about .image,
    #about .text,
    #services header,
    #services .card,
    #testimonials header,
    #testimonials .testimonials,
    #contact .text,
    #contact .links li,
    footer .logo,
    footer .brand,
    footer .social
`, {
    interval: 100
});