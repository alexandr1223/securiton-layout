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

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var docHeight = $( document ).height()
        if (height > 90 && docHeight > 1200) {
            document.querySelector('.header').classList.add('header__scroll')
        } else {
            document.querySelector('.header').classList.remove('header__scroll')
        }
    
    });

    // Открытие меню на ПК версии
    function desktopMenu() {
        document.querySelector('.header__close').addEventListener('click', (item) => {
            document.querySelector('.menu').classList.remove('menu__open')
            document.querySelector('.header__close').style.cssText = 'display: none'
        })
        document.querySelector('.header__open').addEventListener('click', (item) => {
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
        window.addEventListener('scroll', function() {
            if (document.querySelector('.menu').classList.contains('menu__open')) {
                document.querySelector('.menu').classList.remove('menu__open')
                document.querySelector('.header__close').style.cssText = 'display: none'
            }
        });
    }
    desktopMenu();

    // Открытие окна с выполненными проектами
    function openProjectDesktop() {
        if (document.querySelector('.completed__open') && document.documentElement.clientWidth > 991) {
            let num = 1;
            document.querySelectorAll('.completed__open').forEach(openBtn => {
                openBtn.addEventListener('click', function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active')
                        this.parentElement.querySelector('.completed__nav').classList.remove('completed__nav--open')
                        this.querySelector('svg').style.cssText = "transform: translate(-50%, -50%) rotate(0deg)"
                        this.parentElement.querySelector('.completed__images').classList.remove('openCompletedProject')
                        this.parentElement.querySelector('.completed__boxImage').classList.remove('completed__boxImage--open')
                        this.parentElement.style.cssText = "padding-top: 45px"
                        
                    } else {
                        
                        document.querySelectorAll('.completed__open').forEach(function (item) {
                            item.parentElement.querySelector('.completed__nav').classList.remove('completed__nav--open')
                            item.querySelector('svg').style.cssText = "transform: translate(-50%, -50%) rotate(0deg)"
                            item.parentElement.querySelector('.completed__images').classList.remove('openCompletedProject')
                            item.parentElement.querySelector('.completed__boxImage').classList.remove('completed__boxImage--open')
                            item.parentElement.style.cssText = "padding-top: 45px"
                            item.classList.remove('active')
                            // num = 1
                        })
                        this.classList.add('active')
                        this.parentElement.querySelector('.completed__nav').classList.add('completed__nav--open');
                        // Добавление нумерации картинок
                        document.querySelector('.completed__lengthNum').textContent = '0' + $('.completed__images img').length;
                        // Поворот стрелки
                        this.querySelector('svg').style.cssText = "transform: translate(-50%, -50%) rotate(90deg)"
                        this.parentElement.querySelector('.completed__boxImage').classList.add('completed__boxImage--open')
                        this.parentElement.querySelector('.completed__images').classList.add('openCompletedProject')
                        this.parentElement.style.cssText = "padding-top: 115px"
                        
                    }

                    let box = this.parentElement;
                    let prev = box.querySelector('.completed__prev')
                    let next = box.querySelector('.completed__next')
                    box.querySelector('.completed__lengthNum').textContent = '0' + $(box.querySelectorAll('.completed__images img')).length

                    num = box.querySelector('.completed__currentNum').textContent
                    
                    $(next).off().on('click', function(item) {
                        
                        let currentItem = box.querySelector('.completed__boxImage');
                        currentItem.classList.remove('completed__boxImage', 'completed__boxImage--open')
                        box.querySelectorAll('.completed__images img')[0].before(currentItem)
                        
                        let lastImage = $(box.querySelectorAll('.completed__images img')).length - 1
                        let images = box.querySelectorAll('.completed__images img')[lastImage]
                        images.classList.add('completed__boxImage', 'completed__boxImage--open');
                        box.querySelectorAll('.completed__images img')[0].before(images)

                        // Изменение нумерации изображения
                        
                        num--;
                        if (num < 1) {
                            num = box.querySelectorAll('.completed__images img').length;
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                            
                        } else {
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                        }
                    })
                    $(prev).off().on('click', function(item) {
                        let currentItem = box.querySelector('.completed__boxImage');
                        
                        box.querySelector('.completed__boxImage').nextElementSibling.classList.add('completed__boxImage', 'completed__boxImage--open')
                        currentItem.classList.remove('completed__boxImage', 'completed__boxImage--open');
                        box.querySelector('.completed__images').append(currentItem)
                        // Изменение нумерации изображения
                        num++;
                        if (box.querySelectorAll('.completed__images img').length >= num) {
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                        } else {
                            num = 1;
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                        }
                    })
                })
            })
            
        }
    }
    openProjectDesktop();

    function openProjectMobile() {
        if (document.querySelector('.completed__open') && document.documentElement.clientWidth < 991) {
            let num = 1;
            document.querySelectorAll('.completed__open').forEach(openBtn => {
                openBtn.addEventListener('click', function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active')
                        this.parentElement.querySelector('.completed__nav').classList.remove('completed__nav--open')
                        this.style.cssText = "display: block"
                        this.parentElement.querySelector('.completed__images').classList.remove('openCompletedProject')
                        this.parentElement.querySelector('.completed__boxImage').classList.remove('completed__boxImage--open')
                        this.parentElement.parentElement.style.cssText = "padding-top: 100px"
                        
                    } else {
                        this.classList.add('active')
                        this.parentElement.querySelector('.completed__nav').classList.add('completed__nav--open');
                        // Добавление нумерации картинок
                        document.querySelector('.completed__lengthNum').textContent = '0' + $('.completed__images img').length;
                        // Поворот стрелки
                        this.style.cssText = "display: none"
                        this.parentElement.querySelector('.completed__boxImage').classList.add('completed__boxImage--open')
                        // this.parentElement.querySelector('.completed__images').classList.add('openCompletedProject')
                        
                        this.parentElement.parentElement.style.cssText = "padding-top: 235px"
                        this.parentElement.querySelector('.completed__boxText').style.cssText = "height: auto; visibility: visible"
                        this.parentElement.querySelector('.completed__boxTitle').style.cssText = "height: auto; visibility: visible; margin-bottom: 20px"
                        
                    }

                    let box = this.parentElement;
                    let prev = box.querySelector('.completed__prev')
                    let next = box.querySelector('.completed__next')
                    box.querySelector('.completed__lengthNum').textContent = '0' + $(box.querySelectorAll('.completed__images img')).length
                    
                    num = box.querySelector('.completed__currentNum').textContent

                    $(next).off().on('click', function(item) {
                        let currentItem = box.querySelector('.completed__boxImage');
                        currentItem.classList.remove('completed__boxImage', 'completed__boxImage--open')
                        box.querySelectorAll('.completed__images img')[0].before(currentItem)
                        
                        let lastImage = $(box.querySelectorAll('.completed__images img')).length - 1
                        let images = box.querySelectorAll('.completed__images img')[lastImage]
                        images.classList.add('completed__boxImage', 'completed__boxImage--open');
                        box.querySelectorAll('.completed__images img')[0].before(images)

                        // Изменение нумерации изображения
                        num++;
                        if (box.querySelectorAll('.completed__images img').length >= num) {
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                        } else {
                            num = 1;
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                        }
                        
                    })
                    $(prev).off().on('click', function(item) {
                        
                        box.querySelector('.completed__boxImage').nextElementSibling.classList.add('completed__boxImage', 'completed__boxImage--open')
                        let currentItem = box.querySelector('.completed__boxImage');
                        currentItem.classList.remove('completed__boxImage', 'completed__boxImage--open');
                        box.querySelector('.completed__images').append(currentItem)
                        // Изменение нумерации изображения
                        num--;
                        if (num < 1) {
                            num = box.querySelectorAll('.completed__images img').length;
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                            
                        } else {
                            box.querySelector('.completed__currentNum').textContent = '0' + num;
                        }
                    })
                })
            })
            
        }
    }
    openProjectMobile();


    function realiseSlider() {
        if (document.querySelector('.realised')) {
            let num = 1;
            document.querySelector('.realised__lengthNum').textContent = '0' + $('.realised__images img').length
            document.querySelector('.realised__next').addEventListener('click', function(item) {
                let currentItem = document.querySelector('.realised__boxImage');
                currentItem.classList.remove('realised__boxImage', 'completed__boxImage--open')
                document.querySelectorAll('.realised__images img')[0].before(currentItem)
                
                let lastImage = $(document.querySelectorAll('.realised__images img')).length - 1
                let images = document.querySelectorAll('.realised__images img')[lastImage]
                images.classList.add('realised__boxImage', 'completed__boxImage--open');
                document.querySelectorAll('.realised__images img')[0].before(images)

                // Изменение нумерации изображения
                num++;
                if (document.querySelectorAll('.realised__images img').length >= num) {
                    document.querySelector('.realised__currentNum').textContent = '0' + num;
                } else {
                    num = 1;
                    document.querySelector('.realised__currentNum').textContent = '0' + num;
                }
                
            })
            document.querySelector('.realised__prev').addEventListener('click', function(item) {
                
                document.querySelector('.realised__boxImage').nextElementSibling.classList.add('realised__boxImage', 'realised__boxImage--open')
                let currentItem = document.querySelector('.realised__boxImage');
                currentItem.classList.remove('realised__boxImage', 'realised__boxImage--open');
                document.querySelector('.realised__images').append(currentItem)
                // Изменение нумерации изображения
                num--;
                if (num < 1) {
                    num = document.querySelectorAll('.realised__images img').length;
                    document.querySelector('.realised__currentNum').textContent = '0' + num;
                    
                } else {
                    document.querySelector('.realised__currentNum').textContent = '0' + num;
                }
            })
        }
    }
    realiseSlider();

    // Зум изображений
    function openImage() {
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
    openImage();

    // Зум изображений
    function openPartnerImage() {
        $(document).ready(function() {
            document.querySelectorAll('.partner__zoom').forEach(item => {
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
    openPartnerImage();

    // Показ недостающих элементов на смартфонах
    function showSomethingOnMobile() {
        if (document.documentElement.clientWidth < 991) {
            document.querySelectorAll('.news__item').forEach(item => {
                if (document.querySelector('.news--index')) {
                    for (let i = 1; i < document.querySelectorAll('.news__item').length; i++) {
                        document.querySelectorAll('.news__item')[i].style.cssText = "display: none"
                    }
                }
            })

            $('.equipment__block--about').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: "<img src='../img/svg/right-arrow.svg' class='prev' alt='1'>",
                nextArrow: "<img src='../img/svg/right-arrow.svg' class='next' alt='2'>",
            });

            if (document.querySelector('.direction__box')) {
                document.querySelector('.direction__box').parentNode.removeChild(document.querySelector('.direction__box'))
            }
            $('.direction__block').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                prevArrow: "<img src='../img/svg/right-arrow.svg' class='prev' alt='1'>",
                nextArrow: "<img src='../img/svg/right-arrow.svg' class='next' alt='2'>",
            });

        }
    }
    showSomethingOnMobile();

    // Скролл при больше чем 3 элементах в рекомендациях
    function productSliderAvailable() {
        let postCount = document.querySelectorAll('.product-available__item').length;
        if (postCount > 3) {
            $('.product-available__block').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                arrows: true,
                variableWidth: true,
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
                        slidesToShow: 1,
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
        } else if (postCount > 2 && document.documentElement.clientWidth < 991) {
            $('.product-available__block').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                arrows: true,
                variableWidth: true,
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
                        slidesToShow: 1,
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
                let svg = this.querySelector('svg')
                if (svg.classList.contains('documentation-page__open')) {
                    svg.classList.remove('documentation-page__open')
                } else {
                    svg.classList.add('documentation-page__open')
                }
            })
        })
        document.querySelectorAll('.open-third-level').forEach(item => {
            item.addEventListener('click', function () {
                $(this.parentElement).siblings('ul').slideToggle();
                let svg = this.querySelector('svg')
                if (svg.classList.contains('documentation-page__open')) {
                    svg.classList.remove('documentation-page__open')
                } else {
                    svg.classList.add('documentation-page__open')
                }
            })
        })
    }
    openDocumentation();

    // Открытие видео на страницах оборудования
    function openVideoOnEquipmentPage() {
        $(document).ready(function() {
            document.querySelectorAll('.product__mediaRectangle').forEach(item => {
                
                item.addEventListener('click', function() {
                    document.querySelector('.modal-video__block iframe').src = this.dataset.link
                    document.querySelector('.modal-video').classList.add('modal-video__show')
                })
                document.querySelector('.product__mediaText').addEventListener('click', function() {
                    
                    document.querySelector('.modal-video__block iframe').src = this.dataset.link
                    document.querySelector('.modal-video').classList.add('modal-video__show')
                })
                document.querySelector('.modal-video').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal-video__block')) {
                        document.querySelector('.modal-video').classList.remove('modal__show')
                    }
                })
                document.querySelector('.modal-video__close').addEventListener('click', (item) => {
                    document.querySelector('.modal-video').classList.remove('modal-video__show')
                    document.querySelector('.modal-video__block iframe').src = ''
                })
            })
        });
    }
    openVideoOnEquipmentPage();

    // Открытие видео на странице "СПИСОК ПОСТАВЛЯЕМОГО ОБОРУДОВАНИЯ"
    function openVideoOnProductList() {
        $(document).ready(function() {
            document.querySelectorAll('.equipment__video--link').forEach(item => {
                item.addEventListener('click', function() {
                    
                    document.querySelector('.modal-video__block iframe').src = this.dataset.link
                    document.querySelector('.modal-video').classList.add('modal-video__show')
                })
                document.querySelector('.modal-video').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal-video__block')) {
                        document.querySelector('.modal-video').classList.remove('modal-video__show')
                    }
                })
                document.querySelector('.modal-video__close').addEventListener('click', (item) => {
                    document.querySelector('.modal-video').classList.remove('modal-video__show')
                    document.querySelector('.modal-video__block iframe').src = ''
                })
            })
        });
    }
    openVideoOnProductList();

    // Открытие видео на странице "О нас"
    function openVideoOnProductList() {
        $(document).ready(function() {
            document.querySelectorAll('.equipment__video--link').forEach(item => {
                item.addEventListener('click', function() {
                    
                    document.querySelector('.modal-video__block iframe').src = this.dataset.link
                    document.querySelector('.modal-video').classList.add('modal-video__show')
                })
                document.querySelector('.modal-video').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal-video__block')) {
                        document.querySelector('.modal-video').classList.remove('modal-video__show')
                    }
                })
                document.querySelector('.modal-video__close').addEventListener('click', (item) => {
                    document.querySelector('.modal-video').classList.remove('modal-video__show')
                })
            })
        });
    }
    openVideoOnProductList();

    // Открытие видео на странице "Главная"
    function openProductListVideo() {
        $(document).ready(function() {
            document.querySelectorAll('.product-list__video--link').forEach(item => {
                item.addEventListener('click', function() {
                    
                    document.querySelector('.modal-video__block iframe').src = this.dataset.link
                    document.querySelector('.modal-video').classList.add('modal-video__show')
                })
                document.querySelector('.modal-video').addEventListener('click', (item) => {
                    if (item.target.classList.contains('modal-video__block')) {
                        document.querySelector('.modal-video').classList.remove('modal-video__show')
                    }
                })
                document.querySelector('.modal-video__close').addEventListener('click', (item) => {
                    document.querySelector('.modal-video').classList.remove('modal-video__show')
                    document.querySelector('.modal-video__block iframe').src = ''
                })
            })
        });
    }
    openProductListVideo();

    // Открытие блока документации при клике
    function showDocumentation() {
        let documentLink = document.querySelector('.documentation__link--doc'),
        serifireLink = document.querySelector('.documentation__link--securfire')
        if (documentLink) {
            documentLink.addEventListener('click', () => {
                localStorage.setItem('link', 'documentation')
            })
        }
        if (serifireLink) {
            serifireLink.addEventListener('click', () => {
                localStorage.setItem('link', 'securfire')
            })
        }
        if (document.querySelector('.documentation-page')) {
            if (localStorage.getItem('link') == 'documentation') {
                $('.documentation-doc').slideToggle();
                $('.documentation-doc-next').slideToggle();
            }
            if (localStorage.getItem('link') == 'securfire') {
                $('.documentation-securfire').slideToggle();
            }
            localStorage.setItem('link', '')
        }
    }
    showDocumentation();

    if (document.documentElement.clientWidth < 992) {
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
                    slidesToShow: 1,
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
    }

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
                slidesToShow: 3,
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
                slidesToShow: 1,
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

    

    
});