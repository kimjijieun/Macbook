$(function(){

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        hBottomHeight = $('.header-bottom').outerHeight();
        if(curr > hBottomHeight){
            $('.header-bottom').addClass('index')
        }else {
            $('.header-bottom').removeClass('index')
        }
        if (curr > 0) {
            $('.header-bottom .menu1').slideUp();
            $('.menu-btn.mobile-visible').removeClass('active');
            $('.header-bottom .m-dimmed').removeClass('active');

        }
    // alert(1);

    });


    

// 검색 버튼을 누르면 나타나라
    $('.link-search').click(function(e){
        e.preventDefault();
        $('.dimmed, .header .nav-list').addClass('active');

        $('.search-wrap').slideDown();

        $('.header .nav-area .m-btn').toggleClass('active');

        $('.search-area').toggleClass('active');

        
        gsap.from('.search-area .sup-area .sup-item',{
            opacity: 0,
            YPercent:20,
            stagger:0.04,
        })

      })

    $( window ).resize( function() {
        if (matchMedia("screen and (max-width: 1023px)").matches) {
            $('.m-search').click(function(){
                $('body').toggleClass('hidden')
            })
        }
    });


    
    $('.close, .dimmed').click(function(e){
        e.preventDefault();
        $('.search-area, .dimmed, .header .nav-list').removeClass('active');
    })

    // dimmed클릭시 닫히기
    $('.dimmed').click(function(e){
        if( !$('.m-btn').has(e.target).length )
          $('.m-btn').removeClass('active');
          $('.search-wrap').slideUp();
    });




    // //////////////////....NAV영역.../////////////////

    $('.header-nav .nav-item').hover(function(){
        navHeight = $(this).find('.nav-wrap').outerHeight()
        $('.nav-wrap').removeClass('on');
        $(this).find('.nav-wrap').addClass('on');
        $('.header .nav-bg').css('height',navHeight);
    })
    $('.header-nav .nav-list').mouseleave(function(){
        $('.header .nav-bg').css('height',0);
        $('.nav-wrap').removeClass('on');
    })







    $('.dimmed').hover(function() {
        $('.search-wrap').slideUp();
        $('.dimmed').removeClass('active')
      });
    






    // battery 온종일 가는 배터리
    gsap.to('.content.battery .headline-super',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".content.battery .headline-super",
            start:"top 70%",
            end: "50% top",
            toggleClass:"add",
            // markers:true,
            // scrub:1,
            once: true, //한번만
        },

        
    })


    // speed 속도 및 반응성
    gsap.to('.content.speed .speedOn',{
        scrollTrigger:{
            trigger:".speed",
            start:"50% 60%",
            end: "50% top",
            // markers:true,
            // scrub:1,
        },

        opacity: 1
    })


    // 자물쇠

    const lock = gsap.timeline({
        scrollTrigger:{
            trigger:".content.security",
            start:"top 50%",
            end: "70% 70%",
            // markers:true,//좌표
            scrub:1,
            // pin:true
        },
        ease:'none'
    });

    lock
    .addLabel('a')
    .to('.content.security .img-area',{
        'animation-delay': -72
    },'a')

    const dot = gsap.timeline({
        scrollTrigger:{
            trigger:".content.security",
            start:"20% 50%",
            end: "80% 50%",
            // markers:true,
            scrub:1,
        },
    });

    dot
    .addLabel('b')
    .to('.content.security .part-desc .dot',{
        opacity: 0,
        stagger:1,
    },'b')
    .to('.content.security .part-desc .word',{
        opacity: 1,
        stagger:1,
    },'b')



    







    // .sc-display 노트북 채워지기
    gsap.to('.sc-display .img-area',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".sc-display .img-area",
            start:"top 75%",
            end: "20% top",
            // markers:true,
            // scrub:1,
        },

        opacity: 1
    })


    // .sc-display 노트북 채워지기
    gsap.to('.sc-camera .camera-cam',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".camera-cam",
            start:"top 75%",
            end: "20% top",
            // markers:true,
            // scrub:1,
        },

        opacity: 1
    })


    // .content.Tone .bg-area 색바뀌기
    gsap.to('.content.Tone .bg-area',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".content.Tone",
            start:"50% 75%",
            end: "50% top",
            // markers:true,
            // scrub:1,
            // ease: 'ease-in',
            duration: 3,
        },

        opacity: 1
})

      
    // .sc-recommend .chk-btn 색,이미지 바꾸기
    $('.notebook .chk-btn').click(function(e){
        e.preventDefault();

        $(this).addClass('check').siblings().removeClass('check');


        a = $(this).data('target');
        $(this).addClass('check').siblings().removeClass('check');

        $(a).addClass('check').siblings().removeClass('check');
        
    })



    // 모바일영역
    $('.menu-btn.mobile-visible').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        // $('.menu-btn.mobile-visible').toggleClass('active');
        gsap.from('.header-bottom .m-menu .menu-item',{
            opacity: 0,
            yPercent:50,
            stagger:0.3,
            // reversed:true
        })
        $('.header-bottom .m-box').slideToggle();


        if ($('.menu-btn.mobile-visible').hasClass('active')) {
            $('.header-bottom .m-box, .m-menu').slideUp();
            $('.menu-btn.mobile-visible').removeClass('active')
            $('.header-bottom .m-dimmed').removeClass('active');
            $('.container').removeClass('index')
            gsap.to('.header-bottom .m-menu .menu-item',{
                opacity: 0,
                yPercent:50,
                stagger:0.3,
                // duration:2
                // reversed:true
            })
        } else {
            $('.header-bottom .m-box, .m-menu').slideDown();
            $('.menu-btn.mobile-visible').addClass('active');
            $('.header-bottom .m-dimmed').addClass('active');
            $('.container').addClass('index')
            gsap.to('.header-bottom .m-menu .menu-item',{
                opacity: 1,
                yPercent:0,
                stagger:0.3,
            })
        }


    })

    menu = gsap.from('.header .nav-area .menu-wrap .menu-item',{
        // delay:1,
        opacity:0,
        yPercent:20,
        stagger:0.07,
        paused:true,
    })

    $('.m-btn').click(function(e){
        e.preventDefault();
        
        $('.m-btn').toggleClass('active');
        $('.header .nav-area .menu-wrap').toggleClass('active');

        if ($('.search-area').hasClass('active')) {
            $('.header .nav-area .menu-wrap').removeClass('active')
        }
        $('.search-area, .dimmed, .header .nav-list').removeClass('active')

        gsap.to('.header .nav-item',{
            opacity: 1,
            visibility: 'visible',
            xPercent:0,
            // transform: translateX(0),
            // stagger:0.05,
        })
        

        menu.restart()
        $('body').toggleClass('hidden')
    })



    // footer 쇼핑및 알아보기


   $('.store-area .btn-open').click(function(e){
        e.preventDefault();
        $('.footer .store-area').toggleClass('active');

        if ($(this).parent('.footer .store-area').hasClass('active')) {
        $('.footer .store-area').removeClass('active')
        $(this).parent('.footer .store-area').addClass('active')

        } else {
            $('.footer .store-area').removeClass('active')
        }

   })


});