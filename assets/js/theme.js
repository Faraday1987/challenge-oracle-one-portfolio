const darkLigthBtn = document.querySelector('[data-theme-btn]');
const darkLigth = document.querySelector('.menu__theme');

let isLigth = false;

toggle = () => {
    isLigth = !isLigth;
    if (isLigth) {
        darkLigth.style.backgroundImage = "url('/assets/svg/btn_dark.svg')";
        darkLigth.style.backgroundColor = 'var(--color-de-fondo-blanco)';

        document.documentElement.style.setProperty('--color-selection', 'rgb(70, 0, 102)');
        document.documentElement.style.setProperty('--color-de-fondo', '#F5F5F5');
        document.documentElement.style.setProperty('--color-de-fondo-dark', '#000000');
        document.documentElement.style.setProperty('--color-de-fondo-even', '#EAF2FD');
        document.documentElement.style.setProperty('--color-de-link', '#000000');
        document.documentElement.style.setProperty('--color-de-fuente', '#464646');
        document.documentElement.style.setProperty('--color-de-texto-blanco', '#FFFFFF');
        document.documentElement.style.setProperty('--color-de-fondo-blanco', '#FFFFFF');
        document.documentElement.style.setProperty('--color-de-boton', '#2A7AE4');
        document.documentElement.style.setProperty('--color-de-borde-formulario-input-empty', '#C8C8C8');
        document.documentElement.style.setProperty('--color-de-borde-formulario-input-active', '#2A7AE4');
        document.documentElement.style.setProperty('--color-de-formulario-label-input-inactive', '##A2A2A2');
        document.documentElement.style.setProperty('--color-de-formulario-label-input-active', '#2A7AE4');
        document.documentElement.style.setProperty('--color-de-fuente-skills-name', '#464646');
        document.documentElement.style.setProperty('--color-de-fuente-hobbies-name', '#464646');
        document.documentElement.style.setProperty('--color-de-fondo-text-input', '#FFFFFF');
        document.documentElement.style.setProperty('--color-de-fondo-box', '#FFFFFF');
        document.documentElement.style.setProperty('--color-de-fondo-lista-language', '#FFFFFF');

        const hobbieImages = [
            "/assets/images/permacultura_1.png",
            "assets/images/acuacultura_1.png",
            "assets/images/jardineria_1.png",
            "assets/images/viajar_1.png",
            "assets/images/elearning_1.png",
            "assets/images/videojuegos_1.png",
        ];

        setHobbies(hobbieImages);

        const skillImages = [
            "assets/svg/html5_1.svg",
            "assets/svg/css_1.svg",
            "assets/svg/js_1.svg",
            "assets/svg/golang_1.svg",
            "assets/svg/react_1.svg",
            "assets/svg//angular_1.svg",
        ];

        setSkills(skillImages);


    } else {
        darkLigth.style.backgroundImage = "url('/assets/svg/btn_light.svg')";
        darkLigth.style.backgroundColor = 'var(--color-de-fondo-dark)';

        document.documentElement.style.setProperty('`--color-selection`', '#00f9ac');
        document.documentElement.style.setProperty('--color-de-fondo', '#040404');
        document.documentElement.style.setProperty('--color-de-fondo-dark', '#3f3f3f');
        document.documentElement.style.setProperty('--color-de-fondo-even', '#3f3f3f');
        document.documentElement.style.setProperty('--color-de-link', '#FFFFFF');
        document.documentElement.style.setProperty('--color-de-fuente', '#fdfdfd');
        document.documentElement.style.setProperty('--color-de-texto-blanco', '#040404');
        document.documentElement.style.setProperty('--color-de-fondo-blanco', '#6e6e6e');
        document.documentElement.style.setProperty('--color-de-boton', '#00f9ac');
        document.documentElement.style.setProperty('--color-de-borde-formulario-input-empty', '#040404');
        document.documentElement.style.setProperty('--color-de-borde-formulario-input-active', '#00C8CE');
        document.documentElement.style.setProperty('--color-de-formulario-label-input-inactive', '#A2A2A2');
        document.documentElement.style.setProperty('--color-de-formulario-label-input-active', '#00C8CE');
        document.documentElement.style.setProperty('--color-de-fuente-skills-name', '#F4F4F4');
        document.documentElement.style.setProperty('--color-de-fuente-hobbies-name', '#F4F4F4');
        document.documentElement.style.setProperty('--color-de-fondo-text-input', '#040404');
        document.documentElement.style.setProperty('--color-de-fondo-box', '#6e6e6e');
        document.documentElement.style.setProperty('--color-de-fondo-lista-language', '#00C8CE');

        const hobbieImages = [
            "/assets/images/permacultura_2.png",
            "assets/images/acuacultura_2.png",
            "assets/images/jardineria_2.png",
            "assets/images/viajar_2.png",
            "assets/images/elearning_2.png",
            "assets/images/videojuegos_2.png",
        ];
        setHobbies(hobbieImages);

        const skillImages = [
            "assets/svg/html5_2.svg",
            "assets/svg/css_2.svg",
            "assets/svg/js_2.svg",
            "assets/svg/golang_2.svg",
            "assets/svg/react_2.svg",
            "assets/svg/angular_2.svg",
        ];

        setSkills(skillImages);

        // console.log('DARK'); #00C8CE
    }
}

setHobbies = (images) => {
    document.querySelectorAll(`[data-hobbie-img]`);
    let currentImage = document.querySelectorAll(`[data-hobbie-img]`);
    currentImage.forEach(function (tag) {
        const key = tag.dataset.hobbieImg;
        try {
            tag.src = images[key];
        } catch (e) { }
    });
}

setSkills = (images) => {
    document.querySelectorAll(`[data-skill-img]`);
    let currentImage = document.querySelectorAll(`[data-skill-img]`);
    currentImage.forEach(function (tag) {
        const key = tag.dataset.skillImg;
        try {
            tag.src = images[key];
        } catch (e) { }
    });
}

toggle();

darkLigthBtn.addEventListener('click', toggle);
