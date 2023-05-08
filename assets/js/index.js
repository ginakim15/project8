$(function(){

    AOS.init();

    ScrollTrigger.matchMedia({
        // large
        "(min-width: 1025px)": function() {

            /**side-nav nav-list 열기 */
            $('.side-nav .nav-item').hover(function(){
                if ($(this).find('.sub-list').length > 0) {
                    $(this).children().addClass('on');
                }
            },function(){
                $(this).children().removeClass('on');
            })

        },
        // mid
        "(min-width: 768px)": function() {

            /**(tablet)side-nav 메뉴 list열고닫기 */
            $('.side-nav .nav').click(function(e){
                e.preventDefault();
                $(this).siblings('.sub-list').toggleClass('on');
                $(this).parent('.nav-item').siblings().children().removeClass('on')
                $(this).toggleClass('on');
            })

            // gsap.to('.sc-business .group-business .business-wrap',{
            //     scrollTrigger:{
            //     trigger:".sc-business .group-business",
            //     start:"0% 0%",
            //     end:"100% 50%",
            //     //   markers:true,
            //     scrub:1,
            //     // pin:true
            //     },
            //     ease:'none',
            // })
        },
        // small
        "(max-width: 767px)": function() {
            
            /**(tablet)side-nav 메뉴 list열고닫기 */
            $('.side-nav .nav').click(function(e){
                e.preventDefault();
                $(this).siblings('.sub-list').toggleClass('on');
                $(this).parent('.nav-item').siblings().children().removeClass('on')
                $(this).toggleClass('on');
            })
        },
        // all
        "all": function() {

            /**header nav-list 열기 */
            $('.header .nav-list .nav-item').hover(function(){
                if ($(this).find('.sub-list').length > 0) {
                    $('.sub-box').addClass('on');
                    $('.header').addClass('on');
                    $(this).children().addClass('on');
                }
            },function(){
                $('.sub-box').removeClass('on');
                $('.header').removeClass('on');
                $(this).children().removeClass('on');
            })

            /**header btn-menu 클릭시 side-nav 열림 */
            $('.header .btn-menu').click(function(){
                $('.side-nav').addClass('on');
            })
            $('.side-nav .btn-close').click(function(){
                $('.side-nav').removeClass('on');
            })

            /**side-nav nav-list  navsub-list열기*/
            $('.side-nav .sub').click(function(e){
                e.preventDefault();
                $(this).siblings().toggleClass('on');
                if ($(this).siblings().hasClass('on')) {
                    $(this).addClass('on')
                } else {
                    $(this).removeClass('on')
                    
                }
            })

            /**sc-business 스크롤 bg video 크기 키우기 */
            let lastScroll = 0;

            $(window).scroll(function(){

                let curr = $(this).scrollTop();
                let target = $('.group-business').offset().top;
                
                if (curr >= target) {
                    // alert('1');
                $('.group-business .business-wrap').addClass('on');
                $('.group-business .text-box').addClass('on');
                } else {
                    $('.group-business .business-wrap').removeClass('on');
                    $('.group-business .text-box').removeClass('on');
                }
            });

           

            /**sc-business 스크롤 swiper */
            const businessSlide = new Swiper('.business-slide',{
                // mousewheel: true,
                speed:1000,
                parallax: true,
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                }
            })
            
            /**sc-business swiper 이미지 */
            const imgSlide = new Swiper('.img-slide',{
                loop:true,
                // loopAdditionalSlides: true,
                // loopedSlides: 1,
                effect: "fade",
                // speed:1000,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                // parallax: true,
            })

            // gsap.to('.sc-business .group-slide .slide2 .c1',10,{
            //     xPercent:10,
                
            //     repeat:-1
            // })

            // const cloud = gsap.timeline({

            // })
            // cloud
            // gsap.fromTo('.c1',{x:20},{x:-20})
            

            /**sc-inno 슬라이드 */
            const innoSlide = new Swiper('.inno-slide',{
                speed:1000,
                // spaceBetween:150,
                slidesPerView:1,
                spaceBetween:0,
                loop:true,
                loopAdditionalSlides: true,
                centeredSlides: true,
                navigation:{
                    prevEl:'.inno-slide .btn-prev',
                    nextEl:'.inno-slide .btn-next'
                },
                breakpoints:{
                    768:{
                        slidesPerView:2.2,
                        spaceBetween:30,
                    },
                    1280:{
                        slidesPerView:2.2,
                        spaceBetween:0,
                    }
                }
            })

            /**footer family-site 열고 닫기 */
            $('.footer .family').click(function(e){
                e.preventDefault();
                $(this).toggleClass('on');
                $(this).siblings().toggleClass('on');
            })


        }
            
    })














})

