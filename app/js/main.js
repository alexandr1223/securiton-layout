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

    $('.product-list__block').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: true
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
    });


    function openDocument() {
        $(document).ready(function() {
            document.querySelectorAll('.product-slider__zoom').forEach(item => {
                item.addEventListener('click', function() {
                    console.log('1')
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
    openDocument();

    $('.product-slider__block').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        prevArrow: "<div class='prev'><img src='../img/svg/right-arrow.svg' alt='1'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' alt='2'></div>",
    });

    $('.partner__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        prevArrow: "<div class='prev'><img src='../img/svg/right-arrow.svg' alt='1'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' alt='2'></div>",
    });
});