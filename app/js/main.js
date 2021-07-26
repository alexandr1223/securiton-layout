document.addEventListener("DOMContentLoaded", function(event) {

    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
        }, 'xml');
    }); 

    function menu(menuBtn, block, close) {
        if (document.querySelector(menuBtn)) {
            document.querySelector(menuBtn).addEventListener('click', () => {
                document.querySelector(block).style.cssText = 'left: 0';
                document.body.style.overflow = "hidden"
            })
            document.querySelector(close).addEventListener('click', () => {
                document.body.style.overflow = "auto"
                document.querySelector(block).style.cssText = 'left: -100%';
            })
        }
    } 
    // menu('', '', '');

    // Открытие меню на ПК версии
    function desktopMenu() {
        
        document.querySelector('.header__close').addEventListener('click', (item) => {
            console.log(item.target)
            document.querySelector('.menu').classList.remove('menu__open')
            document.querySelector('.header__close').style.cssText = 'display: none'
        })
        document.querySelector('.header__open').addEventListener('click', (item) => {
            console.log(item.target)
            document.querySelector('.menu').classList.add('menu__open')
            document.querySelector('.header__close').style.cssText = 'display: block'
        })
        document.querySelector('.menu__more').addEventListener('click', function () {
            if (document.querySelector('.sub-menu').classList.contains('sub-menu__open')) {
                document.querySelector('.menu__more svg').style.cssText = "transform: rotate(0deg)"
                document.querySelector('.sub-menu').classList.remove('sub-menu__open')
            } else {
                document.querySelector('.menu__more svg').style.cssText = "transform: rotate(90deg)"
                document.querySelector('.sub-menu').classList.add('sub-menu__open')
            }
        })
    }
    desktopMenu();

    $('.product-list__block').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        prevArrow: "<div class='prev'><img src='../img/svg/right-arrow.svg' alt='1'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' alt='2'></div>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    });

    $('.completed__boxImage').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.completed__nav'
    });
    $('.completed__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.completed__boxImage',
        focusOnSelect: true,
        prevArrow: "<img src='../img/svg/right-arrow.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../img/svg/right-arrow.svg' class='next' alt='2'>",
    });

    function openProject() {
        document.querySelectorAll('.completed__open').forEach(openBtn => {
            openBtn.addEventListener('click', function() {
                console.log(this.parentElement.querySelector('.completed__nav'))
                if (this.classList.contains('active')) {
                    this.classList.remove('active')
                    this.parentElement.querySelector('.completed__nav').classList.remove('openCompletedProject')
                    this.parentElement.querySelector('.completed__boxImage img').style.cssText = 'height: 250px'
                } else {
                    this.classList.add('active')
                    this.parentElement.querySelector('.completed__nav').classList.add('openCompletedProject')
                    this.parentElement.querySelector('.completed__boxImage img').style.cssText = 'height: 534px'
                }
               
            })
        })
    }
    openProject();

    $('.sertificate__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sertificate__nav'
    });
    $('.sertificate__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.sertificate__for',
        focusOnSelect: true,
        prevArrow: "<div class='prev'><img src='../img/svg/right-arrow.svg' alt='1'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' alt='2'></div>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }

          ]
    });


    function openDocument() {
        $(document).ready(function() {
            document.querySelectorAll('.product-slider__zoom').forEach(item => {
                item.addEventListener('click', function() {
                    document.querySelector('.modal__block img').src = this.parentElement.querySelector('img').src
                    document.querySelector('.modal').classList.add('modal__show')
                })
                document.querySelector('.modal').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal__block')) {
                        document.querySelector('.modal').classList.remove('modal__show')
                    }
                })
                document.querySelector('.modal__close').addEventListener('click', (item) => {
                    document.querySelector('.modal').classList.remove('modal__show')
                })
            })
        });
        
    }
    openDocument();

    $('.product-slider__block').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        prevArrow: "<div class='prev'><img src='../img/svg/right-arrow.svg' alt='1'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' alt='2'></div>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    
    });

    $('.partner__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        prevArrow: "<div class='prev'><img src='../img/svg/right-arrow.svg' alt='1'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' alt='2'></div>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }

          ]
    });

    function showOneNewsOnMobile() {
        if (document.documentElement.clientWidth < 768) {
            document.querySelectorAll('.news__item').forEach(item => {
                for (let i = 1; i < document.querySelectorAll('.news__item').length; i++) {
                    console.log(item)
                    document.querySelectorAll('.news__item')[i].style.cssText = "display: none"
                }
            })

            $('.equipment__block').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
            });

        }
    }
    showOneNewsOnMobile();

    function productSliderAvailable() {
        let postCount = document.querySelectorAll('.product-available__item').length;
        if (postCount > 3) {
            document.querySelector('.product-available__block').style.cssText = "overflow-x: scroll;"
        }
    }
    productSliderAvailable();

    // Увеличение картинки сертификата на главной странице
    function openSertificate() {
        $(document).ready(function() {
            document.querySelectorAll('.sertificate__zoom').forEach(item => {
                item.addEventListener('click', function() {
                    document.querySelector('.modal__block img').src = this.parentElement.parentElement.querySelector('img').src
                    document.querySelector('.modal').classList.add('modal__show')
                })
                document.querySelector('.modal').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal__block')) {
                        document.querySelector('.modal').classList.remove('modal__show')
                    }
                })
                document.querySelector('.modal__close').addEventListener('click', (item) => {
                    document.querySelector('.modal').classList.remove('modal__show')
                })
            })
        });
    }
    openSertificate();

    // Открытие второго и третьего уровня меню на странице "Документация"
    function openDocumentation() {
        document.querySelectorAll('.open-second-level').forEach(item => {
            item.addEventListener('click', function () {
                $(this).siblings('ul').slideToggle();
            })
        })
        document.querySelectorAll('.open-third-level').forEach(item => {
            item.addEventListener('click', function () {
                $(this.parentElement).siblings('ul').slideToggle();
            })
        })
    }
    openDocumentation();

    // Открытие видео на странице "СПИСОК ПОСТАВЛЯЕМОГО ОБОРУДОВАНИЯ"
    function openVideoOnProductList() {
        $(document).ready(function() {
            document.querySelectorAll('.equipment__video').forEach(item => {
                item.addEventListener('click', function() {
                    
                    document.querySelector('.modal__block iframe').src = this.dataset.link
                    document.querySelector('.modal').classList.add('modal__show')
                })
                document.querySelector('.modal').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal__block')) {
                        document.querySelector('.modal').classList.remove('modal__show')
                    }
                })
                document.querySelector('.modal__close').addEventListener('click', (item) => {
                    document.querySelector('.modal').classList.remove('modal__show')
                })
            })
        });
    }
    openVideoOnProductList();

    // Открытие видео на странице "О нас"
    function openVideoOnProductList() {
        $(document).ready(function() {
            document.querySelectorAll('.equipment__video').forEach(item => {
                item.addEventListener('click', function() {
                    
                    document.querySelector('.modal__block iframe').src = this.dataset.link
                    document.querySelector('.modal').classList.add('modal__show')
                })
                document.querySelector('.modal').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal__block')) {
                        document.querySelector('.modal').classList.remove('modal__show')
                    }
                })
                document.querySelector('.modal__close').addEventListener('click', (item) => {
                    document.querySelector('.modal').classList.remove('modal__show')
                })
            })
        });
    }
    openVideoOnProductList();
});