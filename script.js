document.querySelectorAll('a').forEach(function (el) {
    el.setAttribute('target', '_blank');
})
checkWindowWidth();
if (window.innerWidth > 574) {
    document.querySelector('.nav-btn.contacts').addEventListener('click', () => {
        document.querySelector('.dropdown-contact').classList.add('show')
        document.querySelector('.nav-btn.contacts button.dropbtn').style.backgroundColor = "#144616";
        document.querySelector('.nav-btn.contacts button.dropbtn').style.color = "#FFFFFF";
    })
}
let removingContactsByclickingOnAnotherPlace = function (event) {
    if (window.innerWidth <= 574) return undefined;
    if (!(event.target.matches('.nav-btn.contacts button') || event.target.matches('.nav-btn.contacts .dropdown-contact .nav-btn.contact') || event.target.matches('.nav-btn.contacts .dropdown-contact .nav-btn.contact img') || event.target.matches('.nav-btn.contacts .dropdown-contact .nav-btn.contact span')))
    {
        document.querySelector('.dropdown-contact').classList.remove('show')
        document.querySelector('.nav-btn.contacts button.dropbtn').style.backgroundColor = "";
        document.querySelector('.nav-btn.contacts button.dropbtn').style.color = "";
    }
}

window.addEventListener("click", removingContactsByclickingOnAnotherPlace);


const currentUrl = window.location.href;

const mainHeader = document.querySelector(".main-header")
const contactHeader = document.querySelector('.contact-header')
const voidProp = document.getElementById('void-prop')
const html = document.querySelector('html')


const burgerMenu = document.querySelector('.burger-menu');
const footerImg = document.querySelector('.footer-img')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const content = document.querySelector('.content')
const initialWidth = window.width 
let accSaDetails = document.querySelectorAll('#acc-sa-details');
var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight);
const dropdownAboutProducts = document.querySelector('.dropdown');
document.clickedBurgerMenu = false;

function headerTransformation() {
    if (window.scrollY == 0) {
        mainHeader.style.backgroundColor = ''
        mainHeader.style.boxShadow = ''
    }
    else {
        mainHeader.style.backgroundColor = "#3e8e41";
        mainHeader.style.boxShadow = '0 0 8px 0 black'
    }
}

function preventScroll(e) {
    
    e.preventDefault();
    
}
function stopPropagationForBurgerMenu(e) { 
    e.stopPropagation();
}

function handleBurgerScroll() {
    const scrollTop = burgerMenu.scrollTop;
    const scrollHeight = burgerMenu.scrollHeight;
    const clientHeight = burgerMenu.clientHeight;

    if (burgerMenu.scrollTop == 0) {
        burgerMenu.scrollTo(0, 1);
    }
    if ((clientHeight + scrollTop) >= scrollHeight) {
        burgerMenu.scrollTo(0, scrollTop - 0.1);
    }   
}

function disableScroll() {
    const burgerMenu = document.querySelector('.burger-menu');


    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('scroll', preventScroll, { passive: false });
    
    burgerMenu.addEventListener('wheel', stopPropagationForBurgerMenu, {passive: false});
    burgerMenu.addEventListener('touchmove', stopPropagationForBurgerMenu, { passive: false });
    burgerMenu.addEventListener('scroll', stopPropagationForBurgerMenu, { passive: false });

    burgerMenu.addEventListener('wheel', handleBurgerScroll, {passive: false});
    burgerMenu.addEventListener('touchmove', handleBurgerScroll, { passive: false });
    burgerMenu.addEventListener('scroll', handleBurgerScroll, { passive: false });
}

function enableScroll() {
    const burgerMenu = document.querySelector('.burger-menu');

    window.removeEventListener('wheel', preventScroll, { passive: false });
    window.removeEventListener('touchmove', preventScroll, { passive: false });
    window.removeEventListener('scroll', preventScroll, { passive: false });
    
    burgerMenu.removeEventListener('wheel', stopPropagationForBurgerMenu);
    burgerMenu.removeEventListener('touchmove', stopPropagationForBurgerMenu);
    burgerMenu.removeEventListener('scroll', stopPropagationForBurgerMenu);

    burgerMenu.addEventListener('wheel', handleBurgerScroll, {passive: false});
    burgerMenu.addEventListener('touchmove', handleBurgerScroll, { passive: false });
    burgerMenu.addEventListener('scroll', handleBurgerScroll, { passive: false });

}
function highlightsBurgerBtns () {
    document.q
}

function disableScrollOfBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');

    if (burgerMenu.style.display = "block") {
        if ((burgerMenu.clientHeight + burgerMenu.scrollTop) >= burgerMenu.scrollHeight) {
            console.log("here we go")
            burgerMenu.addEventListener('wheel', preventScroll, { passive: false });
            burgerMenu.addEventListener('touchmove', preventScroll, { passive: false });
            burgerMenu.addEventListener('scroll', preventScroll, { passive: false });
        }
    }
}

function removeAllBurgerDropBtns() { 
    let burgerDropBtns = document.querySelectorAll('.main-header-burger-btn.btn-about-products ~ .burger-dropdown-btn');
    burgerDropBtns.forEach(function (e) {
        e.style.display = "none";
    })
    burgerDropBtns = document.querySelectorAll('.main-header-burger-btn.contacts ~ .burger-dropdown-btn');
    burgerDropBtns.forEach(function (e) {
        e.style.display = "none";
    })
    disableScrollOfBurgerMenu();
}
function showBurgerDropBtnsOfAboutProducts() {
    removeAllBurgerDropBtns();
    
    let showBurgerDropBtnsOfAboutProductsVar = true;
    let burgerDropBtns = document.querySelectorAll('.main-header-burger-btn.btn-about-products ~ .burger-dropdown-btn');
    burgerDropBtns.forEach(function (e) {
        e.style.display = "block";
    })
    if ((burgerMenu.clientHeight + burgerMenu.scrollTop) < burgerMenu.scrollHeight) {
            console.log("here we go")
            burgerMenu.removeEventListener('wheel', preventScroll, { passive: false });
            burgerMenu.removeEventListener('touchmove', preventScroll, { passive: false });
            burgerMenu.removeEventListener('scroll', preventScroll, { passive: false });
        }
}
function showBurgerDropBtnsOfContacts() {
    removeAllBurgerDropBtns();
    let burgerDropBtns = document.querySelectorAll('.main-header-burger-btn.contacts ~ .burger-dropdown-btn');
    burgerDropBtns.forEach(function (e) {
        e.style.display = "block";
    })
    let burgerMenu = document.querySelector(".burger-menu");
    let burgerDropdownBtnMail = document.querySelector(".burger-dropdown-btn .mail");
    burgerMenu.scrollTo({
        top: 2000,
        left: 0,
        behavior: "smooth",
    });
    if ((burgerMenu.clientHeight + burgerMenu.scrollTop) < burgerMenu.scrollHeight) {
            console.log("here we go again")
            burgerMenu.removeEventListener('wheel', preventScroll, { passive: false });
            burgerMenu.removeEventListener('touchmove', preventScroll, { passive: false });
            burgerMenu.removeEventListener('scroll', preventScroll, { passive: false });
        }
}


function clickBurgerMenu() {
    document.clickedBurgerMenu = !document.clickedBurgerMenu;
    const background = document.querySelector('.burger-menu-background');
    const menu = document.querySelector('.burger-menu');
    const burgerMenu = document.querySelector('.burger-menu');

    window.onclick = function () { };

    if (document.clickedBurgerMenu) {
        disableScroll();
        disableScrollOfBurgerMenu();
        background.style.display = 'block';
        menu.style.display = 'block';
        requestAnimationFrame(() => {
            background.classList.add('show');
            menu.classList.add('show');
        });
        burgerMenu.scrollTo(0, 0);
        // document.querySelector('.burger').classList.toggle('transform-burger');
    } else {
        if ((burgerMenu.clientHeight + burgerMenu.scrollTop) < burgerMenu.scrollHeight) {
            burgerMenu.removeEventListener('wheel', preventScroll, { passive: false });
            burgerMenu.removeEventListener('touchmove', preventScroll, { passive: false });
            burgerMenu.removeEventListener('scroll', preventScroll, { passive: false });
        }
        menu.style.position = "";
        enableScroll();
        background.style.display = "none";
        menu.style.display = "none";
        background.classList.remove('show');
        menu.classList.remove('show');
        removeAllBurgerDropBtns();
    }
}

if (window.innerWidth > 574) {
    document.querySelector('#about-products.nav-btn').addEventListener('mouseover', function () {
        document.querySelector('.dropdown').style.display = 'block';
    })
}

if (window.innerWidth > 574) {
    document.querySelector('#about-products.nav-btn').addEventListener('mouseout', function () {
        document.querySelector('.dropdown').style.display = '';
    })
}

// document.querySelectorAll('.link-btn').forEach(function (el) {
//     el.addEventListener('click', function () {
//         document.querySelector('.dropdown').style.display = 'none';
//     })
// })

window.addEventListener('scroll', headerTransformation);

if (window.innerWidth > 574) { voidProp.style.height = mainHeader.offsetHeight + 'px'; }
// voidProp.style.width = mainHeader.offsetWidth + 'px';
if (window.innerWidth > 574) { voidProp.style.marginBottom = 28 + 'px' }

document.addEventListener('DOMContentLoaded', () => {
    checkWindowWidth();
});

function checkWindowWidth() {
    if (window.innerWidth <= 574) {
        window.overflowY = "hidden"
        const voidProp = document.getElementById('void-prop')
        const mainHeader = document.querySelector(".main-header")
        let removingContactsByclickingOnAnotherPlace = function (event) {
            if (window.innerWidth <= 574) return undefined;
            if (!(event.target.matches('.nav-btn.contacts button') || event.target.matches('.nav-btn.contacts .dropdown-contact .nav-btn.contact') || event.target.matches('.nav-btn.contacts .dropdown-contact .nav-btn.contact img') || event.target.matches('.nav-btn.contacts .dropdown-contact .nav-btn.contact span')))
            {
                document.querySelector('.dropdown-contact').classList.remove('show')
                document.querySelector('.nav-btn.contacts button.dropbtn').style.backgroundColor = "";
                document.querySelector('.nav-btn.contacts button.dropbtn').style.color = "";
            }
        }
        window.removeEventListener("click", removingContactsByclickingOnAnotherPlace);

        let newHeader = document.createElement("div")
        newHeader.classList.add("img-logo-container")
        window.removeEventListener('scroll', headerTransformation)
        newHeader.innerHTML = `<img class="logo" src="https://quiestgris.github.io/aplgo-partner/media/main-page/images/main-page/slogan5.png">`;
        // voidProp.replaceWith(newHeader)
        voidProp.parentNode.replaceChild(newHeader, voidProp);
        mainHeader.innerHTML = `
       <button class="mobile-menu" onclick="clickBurgerMenu();">Меню</button> 
    <!--<div class="burger" onclick="clickBurgerMenu()">
        
     <div class="rules">
            <div class="rule"></div>
            <div class="rule"></div>
            <div class="rule"></div>
        </div> 
        </div> -->
    `;
        document.querySelector('.burger-menu-background').addEventListener('click', clickBurgerMenu)
    
        document.querySelectorAll('.usage-button').forEach((el) => el.addEventListener('touchstart', (event) => {
        event.target.nextElementSibling.classList.toggle('show')
        }))
        // document.querySelector('.burger').addEventListener('click', function () { document.querySelector('.burger').classList.toggle('transform-burger') })
    }
    else if (window.innerWidth <= 713) {
        voidProp.style.marginBottom = '12px'
    }
    else if (window.innerWidth <= 753) {
        voidProp.style.marginBottom = '20px'
    }
    else if (window.innerWidth <= 926) {
    voidProp.style.marginBottom = 28 + 'px'}
}

window.addEventListener("resize", function () { if(window.innerWidth <= 574) checkWindowWidth(); })
window.addEventListener("resize", function () { if (window.innerWidth <= 574) disableScrollOfBurgerMenu(); })

const contentInner = content.innerHTML;

function mainPage() {
    if (document.onPage == 1)
        return undefined;
    document.onPage = 1; 
    content.innerHTML = `
        <div id="ImageCarouselCSS" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#ImageCarouselCSS" id="circle" data-slide-to="0" class="active">
                    </li>
                    <li data-target="#ImageCarouselCSS" id="circle" data-slide-to="1">
                    </li>
                    <li data-target="#ImageCarouselCSS" id="circle" data-slide-to="2">
                    </li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="media/main-page/images/main-page/carousel/photo_2024-05-14_21-57-22.jpg" class="d-block w-350" width="740px" height="540px">
                    </div>
                    <div class="carousel-item">
                    <img src="media/main-page/images/main-page/BEAUTY/finallyChangedBEAUTY.jpg" class="d-block w-350" width="740px" height="540px">
                    </div>
                    <div class="carousel-item">
                    <img src="media/main-page/images/main-page/carousel/photo_2024-05-14_22-01-10.jpg" class="d-block w-350" width="740px" height="540">
                    </div>
                    
                </div>
            </div>
            <div class="text-wrapper" style=" margin-top: 20px;"><h1>Восстановление организма</h1></div>
            <div class="img-wrapper"><img class="accsa-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/product_categories_acc_sa.png"/></div>
            <div class="text-wrapper"><h2>Драже Accumulit SA</h2></div>
            <div class="text-wrapper"><p>На вкус — как любимые леденцы из детства…, но «драже» APL, обладая мощным оздоровительным эффектом, несут колоссальную пользу и энергию, т.к. в них сконцентрирована вся сила природы. Их «рецептура» дает нашим клеткам жизненно-важный строительный материал, включающий в организме режим коррекции, наполняет его резервами для полного восстановления.</p>
            </div>
            <div class="shop-about-btns-wraper">
            <div class="shop-about-btns">
                <a href="https://ru.aplgo.com/j/772654/acumullitsa/"><button><div class="text-wrapper">Перейти в магазин</div></button></a>
                <a><button><div class="text-wrapper" onclick="aboutAccSa()">Подробнее о драже</div></button></a>
            </div>
            </div>
            <div class="beauty">
                <div class="img-wrapper"><img class="beauty-img" src="media/main-page/images/main-page/main-page-categories/beauty/Beauty.png" width="550"/></div>
                <div class="text-wrapper"><h2>Косметика Beauty Natural Series</h2></div>
                <div class="text-wrapper"><p>Совместно с мировыми экспертами в области медицинской косметологии мы разработали уникальный умный состав косметики, который объединяет в себе бережные химические формулы и все преимущества природных компонентов, а также инновации многолетних разработок в области косметики. Мы сумели так улучшить и усилить состав, что теперь косметика дает не только длительный, но и быстрый эффект</p></div>
                <div class="beauty-advantages-wrapper">
                    <div class="text-wrapper"><h2 class="beauty-advantages-heading">Коротко о косметике Beauty Natural Series</h2></div>
                    <article class="beauty-advantages">
                        <div class="beauty-advantages-item">
                            <img src="media/main-page/images/main-page/beauty-characteristics/paraben.svg"/>
                            <p>0% парабенов</p>
                        </div>
                        <div class="beauty-advantages-item">
                            <img src="media/main-page/images/main-page/beauty-characteristics/phtalat.svg"/>
                            <p>0% фталата</p>
                        </div>
                        <div class="beauty-advantages-item">
                            <img src="media/main-page/images/main-page/beauty-characteristics/vaselin.svg"/>
                            <p>0% вазелина</p>
                        </div>
                        <div class="beauty-advantages-item">
                            <img src="media/main-page/images/main-page/beauty-characteristics/phormaldegid.svg"/>
                            <p>0% формальдегида</p>
                        </div>
                        <div class="beauty-advantages-item last-line">
                            <img src="media/main-page/images/main-page/beauty-characteristics/oil.svg"/>
                            <p>0% нефти и мазута</p>
                        </div>
                        <div class="beauty-advantages-item last-line">
                            <img src="media/main-page/images/main-page/beauty-characteristics/syntetic pillows.svg"/>
                            <p>0% синтетических подушек</p>
                        </div>
                        <div class="beauty-advantages-item last-line">
                            <img src="media/main-page/images/main-page/beauty-characteristics/microplactic.svg"/>
                            <p>0% микропластика</p>
                        </div>
                        <div class="beauty-advantages-item last-line">
                            <img src="media/main-page/images/main-page/beauty-characteristics/svgexport-21.svg"/>
                            <p>Мы не тестируем нашу продукцию на животных</p>
                        </div>
                    </article>
                </div>
                <div class="shop-about-btns">
                    <a href="https://ru.aplgo.com/j/772654/acumullitsa/"><button><div class="text-wrapper">Перейти в магазин</div></button></a>
                    <a><button><div class="text-wrapper" onclick="aboutBeauty()">Подробнее о Beauty</div></button></a>
                </div>
                <div class="youtube-video-wrapper about-acc-sa"><div class="youtube-video-container">
                        <iframe class="youtube-video" src="https://www.youtube.com/embed/yF937f1GLvE?si=xcPaYRGdmEAqVfRu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
                    </div>
                    </div>
                </div>
            <div class="americano">
                <img class="cofee-img" src="media/main-page/images/main-page/main-page-categories/cofee/goods_2.png"/>
                <div class="text-wrapper"><h2>Натуральный кофе Американо</h2></div>
                <div class="text-wrapper"><p>Наш кофе изготовлен по современной технологии сублимации Freezе dried <br/>«сушка замораживанием», благодаря чему он сохранил все натуральные вещества, обладает тонким изысканным вкусом и ароматом.</p></div>
                <div class="text-wrapper"><p>Преимущества нашего кофе:</p></div>
                <div class="cofee-advantages-wrapper">
                <ul class="cofee-advantages">
                    <li>
                        улучшает кровоснабжение мозга и стимулирует активную сенсорную память
                    </li>
                    <li>
                        помогает справиться со стрессом, побороть апатию, вялость и сонливость
                    </li>
                    <li>
                        действует как природный натуральный антидепрессант
                    </li>
                    <li>
                        нейтрализует свободные радикалы благодаря мощным антиоксидантам, <br/>защищает здоровые клетки организма
                    </li>
                </ul>
                </div>
                <div class="shop-about-btns">
                    <a href="https://ru.aplgo.com/j/772654/acumullitsa/"><button><div class="text-wrapper">Перейти в магазин</div></button></a>
                    <a><button onclick="aboutCofee()"><div class="text-wrapper">Подробнее об Американо</div></button></a>
                </div>
            </div>
            <div class="text-wrapper" style="margin-top: 40px;"><p>Хотите покупать продукт по ОПТОВОЙ ЦЕНЕ?</p></div>
            <div class="shop-about-btns" style="margin-top: 12px;">
                    <a href="https://backoffice.aplgo.com/register/?sp=772654"><button><div class="text-wrapper">СТАТЬ ПАРТНЕРОМ</div></button></a>
                </div>
    `;
    footer.style.position = 'static'
    window.scrollTo(0,0)
    window.history.replaceState('',"",currentUrl)
}

function aboutAccSa() {
    if (document.onPage == 2)
        return undefined;
    window.history.replaceState('', '', currentUrl + 'accumulitsa')
    document.onPage = 2;
    content.innerHTML = `
    <div class="youtube-video-wrapper about-accsa">
    <div class="youtube-video-container">
        <iframe class="youtube-video" width="560" src="https://www.youtube.com/embed/5yLsG0ddWYs?si=rDMxQ6Gn1QF9Ql_7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>    
    <div class="text-wrapper"><h2 class="presentation-acc-sa">ТОП НА КАЖДЫЙ ДЕНЬ</h2></div>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/grw_16638488253805.png" title="Драже GRW"/>
                <p class="accumulit-sa-item-dscrp">GRW – это витаминно-минеральный комплекс из 320 различных антиоксидантов. Драже помогают укреплять иммунитет, способствуют быстрому восстановлению сил и ускорению выздоровления.</p>
                <ul class="advantage-list">
                    <li>
                        помогает нормализовать баланс полезных веществ в организме
                    </li>
                    <li>
                        способствует усилению иммунной защиты организма, сопротивляемости сезонным заболеваниям
                    </li>
                    <li>
                        усиливает иммунную защиту всех систем человеческого организма от вредного воздействия извне и изнутри
                    </li>
                    <li>
                        обладает иммуномодулирующим действием, восстанавливает функцию защиты от вирусов
                    </li>
                    <li>
                        оказывает активное содействие подавлению воспалительных и отечных процессов
                    </li>
                    <li>
                        помогает поддерживать силы и способности иммунитета противостоять вредному воздействию окружающей среды
                    </li>
                    <li>
                        способствует усилению антиоксидантных и адаптогенных свойств организма.
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав GRW</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/3.png"/>
                                <p>Астрагал</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/10.png"/>
                                <p>Смородина черная</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/11.png"/>
                                <p>Рябина красная</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/17.png"/>
                                <p>Клюква</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/24.png"/>
                                <p>Олива</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/25.png"/>
                                <p>Эхинация</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/26.png"/>
                                <p>Ганодерма</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/27.png"/>
                                <p>Момордика харанция</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/28.png"/>
                                <p>Алоэ вера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/29.png"/>
                                <p>Черника</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/30.png"/>
                                <p>Гранат</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/31.png"/>
                                <p>Физалис земляничный</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GRW/3.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/gts-2_16638488415048.png" title="Драже GTS"/>
                <p class="accumulit-sa-item-dscrp">GTS представляет собой эффективную смесь витаминов, минералов и растительных компонентов, которая наполняет организм мощной жизненной энергией и готовит к новым подвигам!</p>
                <ul class="advantage-list">
                    <li>
                        витамины и минералы в составе компонентов драже участвуют в процессах преобразования пищи в энергию
                    </li>
                    <li>
                        способствует повышению эффективности генерации энергии из углеводов, белков и жиров
                    </li>
                    <li>
                        помогает справиться с повышенной утомляемостью, пониженной активностью
                    </li>
                    <li>
                        способствует устранению проблем с концентрацией и сонливостью
                    </li>
                    <li>
                        содержит ванадий, хром, инозит, таурин, которые необходимы организму для пополнения энергетических запасов
                    </li>
                    <li>
                        повышает активность в дневное время суток без лишней нервозности, возникающей при использовании искусственных стимуляторов
                    </li>
                    <li>
                        высвобождает дополнительную собственную энергию организма для увеличения работоспособности и активности.
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав GTS</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/1.png"/>
                                <p>Зеленый чай</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/32.png"/>
                                <p>Элеутерококк</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/33.png"/>
                                <p>Лимонник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/34.png"/>
                                <p>Бакопа монье</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/35.png"/>
                                <p>Ананас</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/36.png"/>
                                <p>Крыжовник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/37.png"/>
                                <p>Яблоко</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/GTS/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/nrm-2_16638488945595.png" title="Драже NRM"/>
                <p class="accumulit-sa-item-dscrp">Аккумулированные драже NRM – верный помощник тех, кто ведет борьбу с сахарным диабетом. В нем содержатся экстракты многих ценных целебных растений и плодов из разных уголков планеты!</p>
                <ul class="advantage-list">
                    <li>
                        способствует повышению активности поджелудочной железы в производстве собственного инсулина
                    </li>
                    <li>
                        улучшает способность организма к усвоению глюкозы
                    </li>
                    <li>
                        помогает предупреждать осложнения заболеваний, связанных с уровнем сахара в крови
                    </li>
                    <li>
                        помогает скорректировать обмен углеводов в организме при соблюдении сбалансированной диеты
                    </li>
                    <li>
                        способствует поддержке нормального уровня глюкозы в крови
                    </li>
                    <li>
                        помогает быстро нормализовать уровень сахара при «сахарных всплесках»
                    </li>
                    <li>
                        нормализует метаболизм, предотвращает действие адреналина, который стимулирует печень на высокую выработку глюкозы
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав NRM</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/27.png"/>
                                <p>Момордика харанция</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/32.png"/>
                                <p>Элеутерококк</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/37.png"/>
                                <p>Яблоко</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/38.png"/>
                                <p>Гарциния</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/39.png"/>
                                <p>Джимнема сильвестра</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/40.png"/>
                                <p>Пажитник сенной</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/NRM/41.png"/>
                                <p>Личи</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/pwr-m-2_16638488567117.png" title="Драже PWRman"/>
                <p class="accumulit-sa-item-dscrp">Сексуальное здоровье – важная составляющая жизни мужчины. APL® GO предлагает продукт для мужского здоровья, который отлаживает все процессы в мужском организме, придает силу и бодрость.</p>
                <ul class="advantage-list">
                    <li>
                        компоненты продукта укрепляют организм, повышают активность, придают мужчине силу и бодрость
                    </li>
                    <li>
                        помогает усилить половое влечение
                    </li>
                    <li>
                        состав комплекса способствует естественному возникновению эрекции
                    </li>
                    <li>
                        помогает избегать преждевременной эякуляции,
                    </li>
                    <li>
                        активные вещества уменьшают проявления простатита и улучшают мочеиспускание
                    </li>
                    <li>
                        способствует улучшению качества и подвижности сперматозоидов
                    </li>
                    <li>
                        помогает росту гормона тестостерона
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав PWRman</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/18.png"/>
                                <p>Лимон</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/30.png"/>
                                <p>Гранат</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/42.png"/>
                                <p>Женьшень</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/43.png"/>
                                <p>Тернера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/44.png"/>
                                <p>Инжир</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWRman/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/pwr-2_16638489850011.png" title="Драже PWRwoman"/>
                <p class="accumulit-sa-item-dscrp">Часто пары страдают от расстройств интимной сферы. Компания APL® GO предлагает парный продукт. PWR woman стабилизирует женский организм и нормализует энергетический баланс.</p>
                <ul class="advantage-list">
                    <li>
                        смягчает проявления гормонального дисбаланса
                    </li>
                    <li>
                        состав улучшает питание тканей женского организма и нормализует энергетический баланс
                    </li>
                    <li>
                        помогает поддержанию половой активности
                    </li>
                    <li>
                        компоненты продукта повышают либидо (половое влечение)
                    </li>
                    <li>
                        оказывает содействие достижению женщиной мультиоргазма
                    </li>
                    <li>
                        облегчает болевые ощущения при менструациях
                    </li>
                    <li>
                        помогает организму женщины справиться с признаками преждевременного старения
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав PWRwoman</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWR/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWR/23.png"/>
                                <p>Гинкго билоба</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWR/43.png"/>
                                <p>Тернера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWR/45.png"/>
                                <p>Спаржа</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWR/46.png"/>
                                <p>Абрикос</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PWR/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/rlx-2_16638489958592.png"/>
                <p class="accumulit-sa-item-dscrp">Драже RLX – это уникальный комплекс экстрактов растений, который помогает справиться с любыми проявлениями стресса, защищая организм от нервного напряжения и перегрузок.</p>
                <ul class="advantage-list">
                    <li>
                        обладает мягким успокаивающим действием и препятствует развитию стрессовых состояний
                    </li>
                    <li>
                        поднимает настроение и вызывает положительные эмоции, помогая по-новому взглянуть на возникшие сложности
                    </li>
                    <li>
                        помогает бороться с негативными эффектами стресса
                    </li>
                    <li>
                        восстанавливает здоровье нервной системы и придает сил для новых свершений
                    </li>
                    <li>
                        помогает в балансировке процессов торможения и возбуждения центральной нервной системы
                    </li>
                    <li>
                        способствует восстановлению всех фаз здорового сна, позволяя организму полноценно отдыхать
                    </li>
                    <li>
                        обладает мягким седативным действием, помогая справиться с повышенной раздражительностью
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав RLX</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/9.png"/>
                                <p>Кедровый орех</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/32.png"/>
                                <p>Элеутерококк</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/47.png"/>
                                <p>Ромашка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/48.png"/>
                                <p>Пассифлора</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/49.png"/>
                                <p>Банан</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/50.png"/>
                                <p>Латук обыкновенный</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/RLX/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/sld-2_16638490133829.png"/>
                <p class="accumulit-sa-item-dscrp">SLD – это комплекс из эффективных компонентов, сочетание которых идеально подходит для правильной и слаженной работы суставов. Вам не придется отказываться от любимых пеших прогулок.</p>
                <ul class="advantage-list">
                    <li>
                        способствует улучшению подвижности суставов, стимулированию выработки синовиальной жидкости
                    </li>
                    <li>
                        активизирует восстановление и укрепление сухожилий, связок и кожных покровов
                    </li>
                    <li>
                        помогает стимулированию синтеза коллагена и эластина
                    </li>
                    <li>
                        препятствует процессу разрушения хрящевой ткани, костей и суставов, позвоночника, сухожилий и связок и помогает активизации процесса их восстановления
                    </li>
                    <li>
                        способствует подавлению процесса воспаления, отечности суставов и околосуставных тканей
                    </li>
                    <li>
                        препятствует процессу деминерализации костной ткани
                    </li>
                    <li>
                        помогает ускорять процесс срастания костей и суставов после травм, переломов и хирургических вмешательств
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав SLD</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/1.png"/>
                                <p>Зеленый чай</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/51.png"/>
                                <p>Гарпагофитум</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/53.png"/>
                                <p>Груша</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/SLD/54.png"/>
                                <p>Земляника</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/stp-2_16638490824081.png"/>
                <p class="accumulit-sa-item-dscrp">Компания APL® GO уверена: с болью можно справиться безопасным способом. Драже STP за счет своего противовоспалительного действия избавляет от причины болевых ощущений.</p>
                <ul class="advantage-list">
                    <li>
                        входящие в состав экстракты ягод и растений дают быстрый обезболивающий эффект
                    </li>
                    <li>
                        антиоксиданты успешно нейтрализуют действие токсинов, подавляют воспалительный процесс
                    </li>
                    <li>
                        активные вещества помогают привести в норму артериальное давление, тем самым помогая устранять головную боль
                    </li>
                    <li>
                        помогает облегчить ожоговую и послеоперационную боль
                    </li>
                    <li>
                        обладает выраженным противовоспалительным эффектом
                    </li>
                    <li>
                        способствует нормальной работе сердечно-сосудистой системы
                    </li>
                    <li>
                        восстанавливает отток крови в венозное русло и активизирует капиллярное кровоснабжение
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав STP</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                    <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/51.png"/>
                                <p>Гарпагофитум</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/55.png"/>
                                <p>Перец стручковый</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/56.png"/>
                                <p>Вишня</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/57.png"/>
                                <p>Малина</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/STP/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div class="text-wrapper"><h2 class="presentation-acc-sa">ТОП ПРЕМИУМ</h2></div>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/alt-2_16638487365215.png" title="Драже ALT"/>
                <p class="accumulit-sa-item-dscrp">Аллергические заболевания плохо поддаются лечению традиционными способами. Драже ALT – это смесь наиболее эффективных натуральных ингредиентов, действующих сообща против аллергии.</p>
                <ul class="advantage-list">
                    <li>
                        помогает устранить неприятные аллергические симптомы в виде зуда, чихания, насморка, покраснения кожи
                    </li>
                    <li>
                        кальций, цинк и магний в составе драже обладают противоаллергическим действием
                    </li>
                    <li>
                        способствует повышению сопротивляемости организма токсинам и аллергенам
                    </li>
                    <li>
                        содержит биофлавоноиды, которые помогают стабилизировать антигистаминные действия компонентов драже
                    </li>
                    <li>
                        способствует удержанию гистамина в тучных клетках
                    </li>
                    <li>
                        помогает защищать организм от воздействия свободных радикалов
                    </li>
                    <li>
                        способствует подавлению аллергических реакций в помещениях и на открытом воздухе.
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав ALT</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/1.png"/>
                                <p>Зеленый чай</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/2.png"/>
                                <p>Шлемник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/3.png"/>
                                <p>Астрагал</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/6.png"/>
                                <p>Эвкалипт</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/7.png"/>
                                <p>Мангостин</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/8.png"/>
                                <p>Виноград</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/9.png"/>
                                <p>Кедровый орех</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/10.png"/>
                                <p>Смородина черная</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ALT/11.png"/>
                                <p>Рябина красная</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/mls_16469082891528 (1).png" title="Драже MLS"/>
                <p class="accumulit-sa-item-dscrp">По данным ВОЗ, до 80% заболеваний человека напрямую вызываются паразитами! APL® GO предлагает противопаразитарный комплекс MLS для избавления от паразитов раз и навсегда!</p>
                <ul class="advantage-list">
                    <li>
                        помогает избавлению от 250 видов паразитов
                    </li>
                    <li>
                        способствует восстановлению и очищению всех систем органов человека
                    </li>
                    <li>
                        помогает избежать повторного заражения паразитами при регулярном использовании
                    </li>
                    <li>
                        формула драже подобрана так, что все компоненты гармонируют и усиливают действия друг друга
                    </li>
                    <li>
                        оспособствует выведению из организма человека продуктов распада и жизнедеятельности паразитов и устранению гнилостной микрофлоры кишечника
                    </li>
                    <li>
                        помогает организму поддерживать необходимый баланс полезных микроорганизмов
                    </li>
                    <li>
                        не препятствует размножению полезных бактерий, нужных для эффективной работы внутренних органов человека.
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав MLS</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/9.png"/>
                                <p>Кедровый орех</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/10.png"/>
                                <p>Смородина черная</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/17.png"/>
                                <p>Клюква</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/25.png"/>
                                <p>Эхинацея</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/40.png"/>
                                <p>Пажитник сенной</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/47.png"/>
                                <p>Ромашка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/58.png"/>
                                <p>Тимьян</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/59.png"/>
                                <p>Корица</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/60.png"/>
                                <p>Гвоздика</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/61.png"/>
                                <p>Артишок</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/62.png"/>
                                <p>Одуванчик</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/63.png"/>
                                <p>Кориандр</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/64.png"/>
                                <p>Тыквенные семечки</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/65.png"/>
                                <p>Папая</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/66.png"/>
                                <p>Мандарин</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/67.png"/>
                                <p>Грейпфрут</p>
                            </div>
                            <div style="text-align: center;" class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/MLS/68.png"/>
                                <p>Свити</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/hrt_2_166384888403.png" title="Драже HRT"/>
                <p class="accumulit-sa-item-dscrp">Для поддержания оптимальной работы сосудистой системы создан уникальный продукт, который взял от природы самое ценное и эффективное. HRT способствует укреплению сердечной мышцы</p>
                <ul class="advantage-list">
                    <li>
                        помогает предотвратить образование тромбов, уменьшает влияние канцерогенных веществ на организм
                    </li>
                    <li>
                        экстракты, входящие в состав, снижают риск развития сердечно-сосудистых заболеваний, вызванных повышенным артериальным давлением
                    </li>
                    <li>
                        поддерживает оптимальную работу сосудистой систем
                    </li>
                    <li>
                        способствует понижению сосудистого тонуса и расширению кровеносных сосудов, что приводит к снижению артериального давления
                    </li>
                    <li>
                        оказывает укрепляющее действие на стенки сосудов
                    </li>
                    <li>
                        способствует регуляции работы сердечной мышцы
                    </li>
                    <li>
                        усиливает сокращения сердечной мышцы и уменьшает ее возбудимость
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав HRT</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HRT/8.png"/>
                                <p>Виноград</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HRT/30.png"/>
                                <p>Гранат</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HRT/54.png"/>
                                <p>Земляника</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HRT/57.png"/>
                                <p>Малина</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HRT/69.png"/>
                                <p>Омела белая</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HRT/80.png"/>
                                <p>Боярышник</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/ice_2_1663848889337.png" title="Драже ICE" height="95"/>
                <p class="accumulit-sa-item-dscrp">Для здорового пищеварения Компания создала витаминно-минеральный комплекс ICE. Он оказывает «замораживающее» действие на деликатные проблемы, устраняет неприятные ощущения в желудке.</p>
                <ul class="advantage-list">
                    <li>
                        улучшает сопротивляемость ЖКТ язвенной болезни
                    </li>
                    <li>
                        помогает справиться с тяжестью в желудке
                    </li>
                    <li>
                        нормализует ферментативную и секреторную активность ЖКТ
                    </li>
                    <li>
                        устраняет изжогу и вздутие
                    </li>
                    <li>
                        предохраняет от повреждения слизистую оболочку желудка
                    </li>
                    <li>
                        улучшает работу желудка, поджелудочной железы и кишечника
                    </li>
                    <li>
                        успокаивает раздражение ЖКТ, избавляет от тошноты
                    </li>
                </ul>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав ICE</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ICE/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ICE/28.png"/>
                                <p>Алоэ вера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ICE/47.png"/>
                                <p>Ромашка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ICE/70.png"/>
                                <p>Лабазник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ICE/71.png"/>
                                <p>Облепиха</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/ICE/72.png"/>
                                <p>Морковь</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/hpr_2_16638489100372.png" title="Драже HPR"/>
                <p class="accumulit-sa-item-dscrp">Злоупотребление жирной пищей, алкоголем заставляют трудиться печень на износ. HPR в сочетании со здоровым питанием и физической активностью помогут сохранить долголетие вашей печени.</p>
                <ul class="advantage-list">
                    <li>
                        помогает защищать клетки печени от разрушения
                    </li>
                    <li>
                        способствует выведению токсинов
                    </li>
                    <li>
                        помогает оттоку желчи
                    </li>
                    <li>
                        быстрая и эффективная помощь печени
                    </li>
                    <li>
                        борется с воздействием ядовитых веществ, попадающих в печень
                    </li>
                    <li>
                        предупреждает воспалительные процессы
                    </li>
                    <li>
                        оказывает помощь в укреплении печени и нормализации в ней обмена веществ
                    </li>
                </ul>
                <br/>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав HPR</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/61.png"/>
                                <p>Артишок</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/62.png"/>
                                <p>Одуванчик</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/73.png"/>
                                <p>Расторопша</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/74.png"/>
                                <p>Персик</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/75.png"/>
                                <p>Изюм</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPR/76.png"/>
                                <p>Авокадо</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div class="text-wrapper"><h2 class="presentation-acc-sa">ТОП ELITE</h2></div>
            <article class="accumulit-sa-item">
                <div><img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/air_16367285044582.png" title="Драже AIR" style="height: 106px"/>
                <p class="accumulit-sa-item-dscrp">17-й продукт серии Acumullit SA® поможет вдохнуть полной грудью, укрепить общий иммунитет и защититься от вирусов и бактерий. В драже собрана сила пяти континентов, ведь подбирая состав мы ни в чем не ограничивали себя, а нашли самые сильные и безопасные компоненты со всего земного шара, которые помогут вам стать увереннее в защите своего организма в такое небезопасное время</p></div>
                <ul class="advantage-list">
                    <li>
                        оказывает питание и поддержку всей дыхательной системы
                    </li>
                    <li>
                        способствует увеличению жизненной емкости легких
                    </li>
                    <li>
                        поддерживает и укрепляет защитный иммунитет организма, повышает сопротивляемость организма негативным внешним факторам
                    </li>
                    <li>
                        имеет противовоспалительные и противомикробное свойства
                    </li>
                    <li>
                       уменьшает частоту и тяжесть инфекционных заболеваний
                    </li>
                    <li>
                        способствует очищению и нормализации состава крови
                    </li>
                    <li>
                        уменьшает оксидантный стресс, увеличивая плазменные уровни антиоксидантов в организме
                    </li>
                </ul>
                <br/>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав AIR</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/10.png"/>
                                <p>Смородина черная</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/12.png"/>
                                <p>Мака перуанская</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/13.png"/>
                                <p>Африканское белое алоэ</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/14.png"/>
                                <p>Шиповник коричневый</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/15.png"/>
                                <p>Ягоды годжи</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/16.png"/>
                                <p>Амла индийская</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/17.png"/>
                                <p>Клюква</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/18.png"/>
                                <p>Лимон</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/20.png"/>
                                <p>Витамин С</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/21.png"/>
                                <p>Витамин D</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/AIR/22.png"/>
                                <p>Цитрат цинка</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/7-1_1695735144769.png" title="Драже PFT"/>
                <p class="accumulit-sa-item-dscrp">Это поистине один из самых ожидаемых продуктов линейки Acumullit SA® в Компании APL® GO. PFT приводит аппетит в норму, что помогает мягко и естественно снизить вес.</p>
                <ul class="advantage-list">
                    <li>
                        повышает осознанность пищевого поведения: вы понимаете, что едите, когда и для чего
                    </li>
                    <li>
                        снижает тягу к сладкому, уменьшает аппетит и чувство голода
                    </li>
                    <li>
                        стимулирует обмен веществ, улучшает метаболизм, за счет чего калории сжигаются быстрее
                    </li>
                    <li>
                        улучшает клеточное дыхание и жиросжигание
                    </li>
                    <li>
                        в сочетании с программой питания и тренировок способствует уменьшению объемов тела и сохранению мышечной массы
                    </li>
                    <li>
                        нормализует работу ЖКТ
                    </li>
                </ul>
                <br/>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав PFT</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/28.png"/>
                                <p>Алоэ вера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/38.png"/>
                                <p>Гарциния</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/55.png"/>
                                <p>Перец стручковый</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/82.png"/>
                                <p>Пиколинат хрома</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/83.png"/>
                                <p>Витамины групы B</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/84.png"/>
                                <p>Бурые водоросли</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/87.png"/>
                                <p>Подорожник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/88.png"/>
                                <p>Семена льна</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/89.png"/>
                                <p>Семена ячменя</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/90.png"/>
                                <p>Экстракт помидоров</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/PFT/91.png"/>
                                <p>Экстракт свеклы</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/hpy-2_16716266193232.png" title="Драже HPY"/>
                <p class="accumulit-sa-item-dscrp">Жить здесь и сейчас, отказаться от «режима автопилота» поможет драже HPY. Абсолютно уникальное сочетание эффективных натуральных компонентов поможет пробудиться после затяжной спячки, сконцентрироваться и жить осознанно!</p>
                <ul class="advantage-list">
                    <li>
                        помогает снизить уровень тревожности
                    </li>
                    <li>
                        служит дополнительным источником энергии для организма
                    </li>
                    <li>
                        помогает избавиться от ежедневного стресса и депрессии; снимает напряжение и чувство усталости
                    </li>
                    <li>
                        успокаивает и тонизирует одновременно
                    </li>
                    <li>
                        поддерживает здоровый аппетит, усиливает метаболизм
                    </li>
                    <li>
                        способствует освобождению от синдрома «отложенный жизни»
                    </li>
                    <li>
                        возвращает к реальности, «включает» осознанность, концентрирует сознание; помогает достичь чувства фокуса, спокойствия, сосредоточенности
                    </li>
                    <li>
                        способствует облегчению симптомов ПМС у женщин
                    </li>
                    <li>
                        помогает избавиться от хронических и нейропатических болей
                    </li>
                </ul>
                <br/>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав HPY</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/23.png"/>
                                <p>Гинкго билоба</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/47.png"/>
                                <p>Ромашка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/48.png"/>
                                <p>Пассифлора</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/49.png"/>
                                <p>Банан</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/51.png"/>
                                <p>Гарпагофитум</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/53.png"/>
                                <p>Груша</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/71.png"/>
                                <p>Облепиха</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/77.png"/>
                                <p>Семена конопли</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/HPY/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/brn_2_16638487226333.png" title="Драже BRN"/>
                <p class="accumulit-sa-item-dscrp">BRN – ваша поддержка в борьбе с первыми признаками умственной усталости, угасания памяти. Драже помогут сохранить ясность ума, увеличить IQ и эффективность использования ресурсов мозга. </p>
                <ul class="advantage-list">
                    <li>
                        помогает восстановить нейроны
                    </li>
                    <li>
                        оказывает благотворное влияние на работу головного мозга
                    </li>
                    <li>
                        травы в составе улучшают память и кровообращение центральной нервной системы
                    </li>
                    <li>
                        способствует концентрации внимания, ясности ума и памяти, помогает стимулировать творческое мышление
                    </li>
                    <li>
                        активные компоненты этого драже помогают оказать общеукрепляющее действие на нервные клетки
                    </li>
                    <li>
                        помогает укрепить нервную систему, предотвратить «синдром выгорания»
                    </li>
                    <li>
                        способствует ускорению синтеза протеинов в мозге
                    </li>
                </ul>
                <br/>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав BRN</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/1.png"/>
                                <p>Зеленый чай</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/4.png"/>
                                <p>Имбирь</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/23.png"/>
                                <p>Гинкго билоба</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/29.png"/>
                                <p>Черника</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/32.png"/>
                                <p>Элеутерококк</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/33.png"/>
                                <p>Лимонник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/34.png"/>
                                <p>Бакопа монье</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/37.png"/>
                                <p>Яблоко</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/42.png"/>
                                <p>Женьшень</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/43.png"/>
                                <p>Тернера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/45.png"/>
                                <p>Спаржа</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/78.png"/>
                                <p>Кофе</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BRN/79.png"/>
                                <p>Витания</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </article>
            <article class="accumulit-sa-item">
                <img class="accumulit-sa-item-img" src="media/main-page/images/main-page/main-page-categories/accumulit-sa/accumulit-sa-product-imgs/bty_2_16638488159407.png" title="Драже BTY"/>
                <p class="accumulit-sa-item-dscrp">Драже BTY — это натуральная нутрикосметика, которая поможет вам выглядеть увереннее и моложе, быть активнее, меньше уставать, получая сбалансированные элементы для ежедневного рациона.</p>
                <ul class="advantage-list">
                    <li>
                        помогает уменьшить признаки старения кожи
                    </li>
                    <li>
                        способствует активной борьбе с морщинами, атонией, вялостью и усталостью
                    </li>
                    <li>
                        помогает сохранить чистоту и красоту кожи лица и тела
                    </li>
                    <li>
                        сохраняет загар на более продолжительное время
                    </li>
                    <li>
                        помогает ногтям и волосам быть крепкими и сияющими
                    </li>
                    <li>
                        создает эффект сияния кожи изнутри
                    </li>
                    <li>
                        способствует улучшению состояния кожи головы.
                    </li>
                </ul>
                <br/>
                <div class="acc-sa-details"><p id="acc-sa-details">Состав BTY</p></div>
                <div class="acc-sa-composition-wrapper">
                    <div class="acc-sa-composition">
                    </div>
                    <div class="acc-sa-composition">
                        <div class="ingredient-items">
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/1.png"/>
                                <p>Зеленый чай</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/5.png"/>
                                <p>Солодка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/8.png"/>
                                <p>Виноград</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/11.png"/>
                                <p>Рябина красная</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/18.png"/>
                                <p>Лимон</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/28.png"/>
                                <p>Алоэ вера</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/30.png"/>
                                <p>Гранат</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/32.png"/>
                                <p>Элеутерококк</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/33.png"/>
                                <p>Лимонник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/34.png"/>
                                <p>Бакопа монье</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/37.png"/>
                                <p>Яблоко</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/47.png"/>
                                <p>Ромашка</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/52.png"/>
                                <p>Куркума</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/61.png"/>
                                <p>Артишок</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/62.png"/>
                                <p>Одуванчик</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/70.png"/>
                                <p>Лабазник</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/73.png"/>
                                <p>Расторопша</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/76.png"/>
                                <p>Авокадо</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/79.png"/>
                                <p>Витания</p>
                            </div>
                            <div class="ingredient-item">
                                <img src="media/main-page/images/main-page/acc-sa-components/BTY/81.png"/>
                                <p>Клубник</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div class="youtube-video-wrapper">
            <div class="youtube-video-container">
                <iframe class="youtube-video about-acc-sa" width="560" src="https://www.youtube.com/embed/spF-j6_2YQc?si=xTvclllqoo5m7DIe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>    
            <div class="shop-about-btns">
                    <a href="https://ru.aplgo.com/j/772654/acumullitsa/"><button><div class="text-wrapper">Перейти в магазин</div></button></a>
                </div>
            <div class="text-wrapper" style="margin-top: 40px;"><p>Хотите покупать продукт по ОПТОВОЙ ЦЕНЕ?</p></div>
            <div class="shop-about-btns" style="margin-top: 12px;">
                    <a href="https://backoffice.aplgo.com/register/?sp=772654"><button><div class="text-wrapper">СТАТЬ ПАРТНЕРОМ</div></button></a>
                </div>
            `;
    if (window.innerWidth > 574) document.querySelector('.dropdown').style.display = 'none';
    // window.history.pushState({ id: '2'},"Page 2",'/aboutaccsa')
    footer.style.position = 'static'
    window.scrollTo(0, 0);
    // let accSaDetails = document.querySelectorAll('#acc-sa-details')
    // accSaDetails.forEach(function (el) {
    // el.addEventListener('click', function (event) {
    //     event.target.nextElementSibling.classList.toggle('show')
    //     // if (element.classList.contains("show"))
    //     //     if (window.scrollY != window.scrollY + element.offsetHeight + 20 )
    //     //         window.scrollTo(0, window.scrollY + element.offsetHeight + 20);
    

    // })
    // })
    
}

function aboutCofee() {
    if (document.onPage == 3)
        return undefined;
    window.history.replaceState('', '', currentUrl + 'americano-cofee')
    document.onPage = 3;
    content.innerHTML = `
    <div class="youtube-video-wrapper">
    <div class="youtube-video-container">
        <iframe class="youtube-video about-cofee"width="560" src="https://www.youtube.com/embed/35nfPid0q94?si=TmSsiE7RAByd2t3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
        <div class="shop-about-btns about-cofee">
                    <a href="https://ru.aplgo.com/j/772654/acumullitsa/"><button><div class="text-wrapper">Перейти в магазин</div></button></a>
        </div>
    `;
    window.scrollTo(0, 0);
    document.querySelector('.dropdown').style.display = 'none';
    // footer.style.position = 'absolute';
    // footer.style.top = body.offsetHeight - 150 + 'px'
}

function aboutCompany() {
    if (document.onPage == 4)
        return undefined;
    window.history.replaceState('', '', currentUrl + 'company')
    document.onPage = 4;
    content.innerHTML = `
    <div class="youtube-video-wrapper about-company">
    <div class="youtube-video-container">
        <iframe class="youtube-video about-company" width="560" src="https://www.youtube.com/embed/NG2b-Vm9dxI?si=iJtxSZmG-YEgA7l5&amp;end=52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
        </div>
        `;
    window.scrollTo(0, 0);
    // footer.style.position = 'absolute';
    // footer.style.top = body.offsetHeight - 150 + 'px'
}


function travelling() {
    if (document.onPage == 5)
        return undefined;
    document.onPage = 5;
    window.history.replaceState('', '', currentUrl + 'travels')
    content.innerHTML = `
    <div class="youtube-video-wrapper travelling">
    <div class="youtube-video-container">
        <iframe class="youtube-video" width="560" src="https://www.youtube.com/embed/-u_e2atX6UU?si=sS8JNHYRBAqgSOY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
        <div class="text-wrapper" style="margin-top: 40px;"><p>Хотите отправиться вместе с нами в круиз?<br/>Ставайте нашим партнером и покоряйте новые страны!</p></div>
            <div class="shop-about-btns" style="margin-top: 12px;">
                    <a href="https://backoffice.aplgo.com/register/?sp=772654"><button><div class="text-wrapper">СТАТЬ ПАРТНЕРОМ</div></button></a>
                </div>
    <div class="youtube-video-wrapper travelling">
    <div class="youtube-video-container">
        <iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/1QsRbA_hacI?si=mTFt1fjDS1GAgwp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    <div class="youtube-video-wrapper travelling">
    <div class="youtube-video-container">
        <iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/ap6R2YnsjMI?si=gKpX5n-6Nt2hRVZp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
        `;
    window.scrollTo(0,0)
    footer.style.position = 'static'
}

function aboutBeauty() {
    if (document.onPage == 6)
        return undefined;
    document.onPage = 6;
    content.innerHTML = `
        <div class="beauty-technologies">
    <h1>3 эксклюзивные технологии нашей косметики</h1>
    <p class="beauty-technology"><span>EARLY BOOST®</span> – уникальный источник растительного таурина, полученный из экстракта водоросли Jania Rubéns. Его косметические свойства просто невероятны! Он заряжает клетки кожи энергией, сохраняет заряд молодости, задерживает проявление первых признаков старения. Энергия — это и есть молодость. Поэтому она есть в составе BEAUTY®</p>
    <hr/>
    <p class="beauty-technology"><span>SYN®-AKE*</span> – это активный ингредиент, борющийся с морщинами, его свойства сходны со змеиным ядом. Но это не должно вас пугать. Индустрия красоты использует этот новый чудодейственный продукт для расслабления мышц лица и противодействия образованию морщин. Около 60 мышц лица заботятся о нашей мимике, и они работают на полной скорости каждый день. С 25 лет их работа начинает предательски отпечатываться на нашем лице. SYN®-AKE* предназначен для мгновенного и продолжительного расслабления мышц лица и сведения морщин к минимуму.</p>
    <hr/>
    <p class="beauty-technology"><span>Gatuline® Expression</span> – это своеобразный «природный ботокс», который мгновенно улучшает контур глаз и лица, борется с мимическими, гравитационными и возрастными морщинами. Gatuline® Expression сертифицирован как натуральный COSMOS/ECOCERT, NPA и NSF.</p>
  </div>
  <h2 class="heading-of-level-2">Какие есть средства в Beauty Natural Series?<h2>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/krem-dlya-lica_1681745301981.png"/></div>
    <div class="beauty-item-img-name">Крем для лица</div>
    <div class="beauty-item-dscr"><p>Крем мягко воздействует, успокаивает, увлажняет, питает, разглаживает, делает контур лица более четким. При регулярном применении дает отличный антивозрастной эффект, воздействуя на три фактора старения кожи, связанные с генетикой, воздействием окружающей среды и образом жизни.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        сохраняет и увеличивает капитал молодости кожи, предлагает ей оптимальную долгосрочную защиту;
      </li>
      <li>
        обеспечивает уплотнение кожи, восстановление и свежесть
      </li>
      <li>  
        защищает от оксидативного стресса (загрязнения воздуха)
      </li>
      <li>
        предотвращает появление первых морщин
      </li>
      <li>
        помогает поддерживать тургор, водный и энергетический баланс всех слоев кожи лица
      </li>
      <li>
        имеет anti-age-эффект с накопительным действием
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Крем следует наносить легкими движениями по массажным линиям утром и/или вечером на хорошо очищенные лицо и шею, дать впитаться. Через час обязательно промокнуть остатки крема сухой салфеткой.</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/krem-dlya-vek_16817452399446.png"/></div>
    <div class="beauty-item-img-name">Крем для век</div>
    <div class="beauty-item-dscr"><p>Крем разработан с учетом чувствительной кожи вокруг глаз, который подходит всем типам кожи. Он бережно восстанавливает упругость, придает коже вокруг глаз сияние и долговременно борется с признаками старения.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        разглаживает и успокаивает кожу вокруг глаз
      </li>
      <li>
        уменьшает «гусиные лапки» и другие мимические морщинки;
      </li>
      <li>  
        обеспечивает видимый лифтинг-эффект, питание, увлажнение, anti-age-эффект с накопительным действием;
      </li>
      <li>
        «стирает» круги и мешки под глазами, а также следы усталости;
      </li>
      <li>
        эффективно борется с мелкими морщинками, обезвоживанием кожи и отеками под глазами;
      </li>
      <li>
        противостоит иссушению кожи, дает ощущение комфорта и свежести.
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Рекомендуем наносить крем легкими похлопывающими движениями утром и/или вечером на хорошо очищенную кожу вокруг глаз. Двигайтесь по костному краю верхнего и нижнего века от переносицы к вискам. Вечером рекомендуется наносить крем для век не позднее, чем за час до сна, чтобы крем успел поработать, пока активны ваши мышцы</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/penka_16802539681.png"/></div>
    <div class="beauty-item-img-name">Пенка для умывания</div>
    <div class="beauty-item-dscr"><p>Мягкая очищающая пена идеально удаляет весь классический макияж, глубоко проникает в поры, расслабляет кожу и обеспечивает оптимальную основу для последующего ухода.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        имеет воздушную, приятную текстуру, превращает процесс очищения в сплошное удовольствие
      </li>
      <li>
        эффективно удаляет макияж и готовит кожу к последующему уходу
      </li>
      <li>  
        расслабляет кожу, борется с морщинками
      </li>
      <li>
        идеально подходит для ежедневного применения
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Нанесите на ладонь небольшое количество нежной очищающей пены (размером с грецкий орех) и равномерно распределите ее по ладоням. Затем нанесите на очищаемые участки, аккуратно помассируйте лицо. Смойте пену теплой водой. 
Рекомендуется для ежедневного очищения</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/molochko-dlya-lica_16802539899073.png"/></div>
    <div class="beauty-item-img-name">Молочко для лица</div>
    <div class="beauty-item-dscr"><p>Молочко бережно удаляет макияж, наполняет кожу комфортом. Нежная очищающая кремовая эмульсия приятной консистенции не содержит агрессивных ингредиентов и уже на этапе очищения питает и увлажняет кожу.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        роскошная легкая текстура молочка мягко очищает чувствительную кожу, снимает макияж, удаляет грязь и жир, накопившиеся за день
      </li>
      <li>
        средство оказывает дополнительное увлажняющее и успокаивающее действие на кожу лица и шеи
      </li>
      <li>  
       активные вещества дают коже необходимую основу для последующей программы ухода
      <li>
        при длительном использовании кожа выглядит свежей, молодой и здоровой
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Равномерно нанесите молочко кончиками пальцев на очищаемые участки кожи. Нежно вмассируйте и протрите остатки спонжем или мягкой косметической салфеткой. После очищения рекомендуем освежить кожу тоником для лица BEAUTY®.</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/tonik-dlya-lica_16802540336829.png"/></div>
    <div class="beauty-item-img-name">Тоник для лица</div>
    <div class="beauty-item-dscr"><p>Роскошный тоник для лица с нейтрализующим и успокаивающим действием придает вашему цвету лица сияющий и свежий вид. Лосьон удаляет остатки молочка, жесткой воды, извести. Кожа чувствует себя особенно свежей.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        прекрасное завершение этапа очищения кожи
      </li>
      <li>
        тоник имеет уникальную формулу и идеально подходит для чувствительной и сухой кожи (не содержит алкоголя)
      </li>
      <li>  
       кожа выглядит свежей уже после первого применения
      <li>
        значение pH стабилизируется быстрее после мягкого очищения
      </li>
      <li>
        тоник подходит для компрессов для глаз
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Наносите тоник ватным тампоном или кончиками пальцев на лицо и шею/декольте ежедневно после очищения. Этот этап увеличит эффективность всей серии косметики BEAUTY®</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/shelkovaya-maska_16817453454547.png"/></div>
    <div class="beauty-item-img-name">Шелковая маска для лица</div>
    <div class="beauty-item-dscr"><p>Незабываемая гладкость и свежесть лица после применения маски очаровывает. Этот этап защищает кожу от окислительного стресса, обеспечивает ее биологическое равновесие, оказывает заметный антивозрастной эффект. </p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        всего за 15 минут эта маска способна сделать кожу заметно моложе благодаря ее мгновенному эффекту лифтинга
      </li>
      <li>
        высокоэффективные вещества, содержащиеся в основе маски, обеспечивают коже необходимое увлажнение, помогают повысить естественное содержание коллагена и возвращают коже прежнюю эластичность
      </li>
      <li>  
        специальный комплекс бережно отшелушивает кожу, что гарантирует глубокое проникновение активных ингредиентов
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Наносите маску после тщательного очищения или после пилинга. Распределите средство равномерно, избегая области вокруг глаз. Наслаждайтесь её шелковым прикосновением 15 минут, затем смойте теплой водой или удалите маску мягкой косметической салфеткой.<br/>
Для равномерного нанесения воспользуйтесь косметической кисточкой.
После маски мы рекомендуем нанести крем BEAUTY® для достижения максимального омолаживающего эффекта.</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/dekol-te-krem_16817452702758.png"/></div>
    <div class="beauty-item-img-name">Крем для зоны декольте</div>
    <div class="beauty-item-dscr"><p>Свежая и чувственная текстура крема тает на коже и быстро впитывается, оставляя после себя ощущение гладкости и упругости зоны декольте. </p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        крем обладает push-up-эффектом
      </li>
      <li>
        был разработан специально для шеи и декольте
      </li>
      <li>  
        подтягивает кожу шеи и груди изнутри, разглаживает морщины и сохраняет молодость и упругость бюста
      </li>
      <li>
        отлично увлажняет
      </li>
      <li>
        предотвращает появление морщин
      </li>
      <li>
        усиливает защитный барьер кожи
      </li>
      <li>
        подтягивает контуры
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Равномерно нанесите достаточное количество питательного крема на тщательно очищенную зону декольте, шею и бюст мягкими массирующими движениями.</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/molochko_16802541661589.png"/></div>
    <div class="beauty-item-img-name">Молочко для тела</div>
    <div class="beauty-item-dscr"><p>Молочко быстро впитывается в кожные покровы, не забивая поры и не оставляя на теле жирную пленку. Восстанавливает упругость кожи тела, делает кожу шелковистой, защищает от клеточного старения и увядания.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        способствует выработке собственного эластина и коллагена
      </li>
      <li>
        обладает эффектом регенерации, благодаря которому тело чувствует себя обновленным
      </li>
      <li>  
        обеспечивает:
        <ul>
          <li>
            питание
          </li>
          <li>
            увлажнение
          </li>
          <li>
            уплотнение
          </li>
          <li>
            упругость и мягкость
          </li>
          <li>
            заживление ранок и царапин
          </li>
          <li>
            защиту от оксидативного стресса (UV-лучи, загрязнение воздуха)
          </li>
        </ul>
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Наносить утром и/или вечером легкими круговыми движениями на хорошо очищенную кожу, дать впитаться.</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/2-v-1-eliksir-bol-shoy_16802542256417.png"/></div>
    <div class="beauty-item-img-name">2 в 1 спрей-эликсир для лица</div>
    <div class="beauty-item-dscr"><p>Освежающий спрей для лица богат высокоэффективными компонентами и питательными веществами. Он способен заметно изменить внешний вид кожи, увлажнить её, придать сияние и усилить выработку коллагена.</p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        один «пшик» защитит кожу от вредного воздействия окружающей среды
      </li>
      <li>
        спрей очень эффективен, он  обволакивает кожу невидимой защитной пленкой и таким образом предотвращает проникновение свободных радикалов, смога и вредных веществ
      </li>
      <li>  
        нежно воздействует на кожу
      </li>
      <li>
        снабжает кожу гиалуроном
      </li>
      <li>
        приятный “удар” свежести в сухих помещениях и в жаркие летние дни
      </li>
      <li>
        укрепляет и фиксирует макияж
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Распылите эликсир на кожу лица, шеи и декольте перед выходом из дома или просто когда вам захочется свежести и сияния.</p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/222222_____2-v-1-eliksir-malen-kiy-1_16802684931644.png"/></div>
    <div class="beauty-item-img-name">2 в 1 спрей-эликсир для лица (30 мл)</div>
    <div class="beauty-item-dscr"><p>Travel-формат освежающего спрея для лица богат высокоэффективными компонентами и питательными веществами. Он способен заметно изменить внешний вид кожи, увлажнить её, придать сияние и усилить выработку коллагена. </p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        удобный формат, который удобно взять с собой
      <li>
        один «пшик» защитит кожу от вредного воздействия окружающей среды
      </li>
      <li>  
        спрей очень эффективен, он  обволакивает кожу невидимой защитной пленкой и таким образом предотвращает проникновение свободных радикалов, смога и вредных веществ
      </li>
      <li>
        нежно воздействует на кожу
      </li>
      <li>
        снабжает кожу гиалуроном
      </li>
      <li>
        приятный “удар” свежести в сухих помещениях и в жаркие летние дни
      </li>
      <li>
        укрепляет и фиксирует макияж
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Распылите эликсир на кожу лица, шеи и декольте перед выходом из дома или просто когда вам захочется свежести и сияния. </p></div>
    </div>
  </article>
  <article class="beauty-item">
    <div class="beauty-item-img"><img src="media/main-page/images/main-page/main-page-categories/beauty/beauty-products/222222______serum-eleksir-1_16802684420221.png"/></div>
    <div class="beauty-item-img-name">Магический сывороточный эликсир</div>
    <div class="beauty-item-dscr"><p>Магический сывороточный эликсир BEAUTY® – это гибрид сыворотки и эмульсии для быстрых и интенсивных процедур ухода. Он эффективен, как сыворотка, легкий, как эмульсия, комфортный, как крем. Связывает влагу во всех слоях кожи, восстанавливает межклеточный цемент. <br/> <br/> Сыворотка «выталкивает морщины» и создает внутренний каркас кожи, обеспечивает мощный антивозрастной эффект, укрепляя внеклеточный матрикс и воздействуя на все структуры кожи. </p></div>
    <div class="beauty-item-list-name">Преимущества:</div>
    <ol class="beauty-item-advantages">
      <li>
        рекомендуется для всех типов кожи, идеально подходит для ухода за чувствительной, склонной к покраснению кожей
      <li>
        запатентованные  активные ингредиенты  быстро разглаживают существующие мимические морщины, подтягивают обвисшие контуры лица
      </li>
      <li>  
        эффективно влияет на уставшую, дряблую кожу
      </li>
      <li>
        сывороточный эликсир обладает успокаивающим и противовоспалительным эффектом, который может быть особенно полезен для раздраженной и уставшей кожи
      </li>
      <li>
        обеспечивает видимый лифтинг-эффект
      </li>
    </ol>
    <div class="beauty-item-usage">
      <button class="usage-button">Применение</button>
      <div class="usage"><p>Тщательно очистите кожу пенкой и очищающим молочком BEAUTY®. Обработайте кожу тоником, чтобы стабилизировать pH-уровень кожи. И пока кожа еще влажная, нанесите небольшое количество сывороточного эликсира на лицо строго по массажным линиям. Подождите немного, пока средство впитается. После этого можно наносить крем или макияж.</p></div>
    </div>
  </article>
  <div class="shop-about-btns">
                    <a href="https://ru.aplgo.com/j/772654/acumullitsa/"><button><div class="text-wrapper">Перейти в магазин</div></button></a>
    </div>

    `;
    window.history.replaceState('', '', currentUrl + 'beauty')
    if (window.innerWidth > 574) document.querySelector('.dropdown').style.display = 'none';
    window.scrollTo(0, 0)
    document.querySelectorAll('.usage-button').forEach((el) => el.addEventListener('click', (event) => {
        event.target.nextElementSibling.classList.toggle('show')
    }))
    
    footer.style.position = 'static'
}

