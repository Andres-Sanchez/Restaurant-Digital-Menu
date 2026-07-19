/*
Restaurant Digital Menu
Author: Andres Sanchez
Application Logic
*/

const categoryCard = document.querySelectorAll(".category-card");
const categoryHeader = document.querySelectorAll(".category-header");
const menuItems = document.querySelectorAll(".menu-items");
const btn = document.querySelectorAll(".btn-cta");
const flyer = document.querySelector(".flyer");
const flyerContainer = document.querySelector(".flyer-container")
const heroHours = document.querySelector(".hero-hours");



/* DISH PRELOADER*/
const preloader = document.querySelector(".wrapper-ingredients");
const lastIngredient = document.querySelector(".basil");


let pageReady = false;

let animationReady = false;

window.addEventListener("load", () => {
    pageReady = true;
    closeAnimation();
})

lastIngredient.addEventListener("animationend", () => {

    animationReady = true;
    closeAnimation();

}, { once: true })

const closeAnimation = () => {
    if (pageReady && animationReady) {
        preloader.classList.add("is-invisible");


        preloader.addEventListener("transitionend", () => {
            preloader.style.display = "none";

            flyer.classList.add("is-visible");
            blockScroll();

            /*  document.body.classList.add("unlockScroll"); */
        }, { once: true })
    }

}

const blockScroll = () => {
    flyer.addEventListener("transitionend", () => {
        document.body.style.overflow = "auto";
    })
}

/* DISH END*/

/* Click Cambio modalita */
const selectMode = (e) => {

    e.preventDefault();


    const selectMenu = e.target;
    const bodyMode = document.body;
    const twinsBtn = selectMenu.dataset.modebtn;
    bodyMode.dataset.mode = twinsBtn;


    renderMenu();
}


btn.forEach(bt => bt.addEventListener("click", selectMode));

/* Apertura delle Card */

categoryHeader.forEach(header => {


    header.addEventListener("click", () => {



        const clickCard = header.closest(".category-card");

        clickCard.classList.toggle("is-open");


        categoryCard.forEach(card => {

            if (clickCard !== card) {
                card.classList.remove("is-open");
            }
        })
    })

});

/* Stampo nel html */

let menuAttivo = null;


const renderMenu = () => {

    const modeBody = document.body.dataset.mode;

    if (modeBody === "lunch") {
        menuAttivo = menuLunch;
        heroHours.textContent = "Orario Apertura : 12-15";
    } else {
        menuAttivo = menuDinner;
        heroHours.textContent = "Orario Apertura : 19-23";
    }


    categoryCard.forEach(onlyCard => {


        const categoriesCard = onlyCard.dataset.category;

        const writeHeader = onlyCard.querySelector(".category-header");
        const items = onlyCard.querySelector(".menu-items");

        const foundCard = menuAttivo.find(m => m.id === categoriesCard);

        const writeCategory = `
                            <h4>${foundCard.categoria}</h4>
                            <i class="fa-solid fa-chevron-down"></i>
                        `

        writeHeader.innerHTML = writeCategory;


        const foundDish = foundCard.piatti;


        const writeDish = foundDish.map((d, index, array) => `
                    
                                <div class="item-header">
                                    <span>${d.nome}</span> 
                                    <span>${d.prezzo}€</span>
                                </div>
                                <div class="item-description">
                                    <p>${d.descrizione}</p>
                                </div>     
                               ${index !== array.length - 1 ? `<span class="menu-divider"></span>` : ''}
                                              
            `).join("");

        items.innerHTML = writeDish;
    })
    ThemeHead();
}



document.addEventListener("DOMContentLoaded", () => {

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    renderMenu();

})

/* theme color head */

const themeMeta = document.querySelector('#theme-color-meta');

const ThemeHead = () => {


    if (modeBody === 'lunch') {
        themeMeta.setAttribute('content', '#F4E4BC');
    } else {
        themeMeta.setAttribute('content', '#111');
    }
}
