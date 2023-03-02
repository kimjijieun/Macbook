$(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop()>0) {
            $('.header').addClass('active');
            // $('html, body').animate({
            //     scrollTop: 0
            // }, 400);
            // $('.header .header-bottom .menu1').slideUp();
            $('.menu-btn.mobile-visible').removeClass('active')
            $('.header .header-bottom .menu-list').slideUp();
            $('.header-bottom .m-dimmed').removeClass('active');
        } else {
            $('.header').removeClass('active');
            // $('.search-area, .dimmed').removeClass('active');
        }
    // alert(1);

    });


// 검색 버튼을 누를시 글자가 하나씩 나타났다가 사라진다
    $('.link-search').click(function(e){
        e.preventDefault();
        $('.search-area, .dimmed, .header .nav-list').addClass('active');

        $('.header .nav-area .m-btn').toggleClass('active');

        gsap.to('.header .nav-item',{
            opacity: 0,
            visibility: 'hidden',
            xPercent:20,
            // transform: translateX(0),
            stagger:0.05,
            // reversed:true
            // runBackwards:true
            // animation-delay: 0.5
        })
        // gsap.to('.search-area',{
        //     opacity: 1,
        //     visibility: 'visible',
        //     // YPercent:0,
        //     transform: 'translate(-50%, 0)'
        // })
        gsap.from('.search-area .search-box, .search-area .sup-area .sup-item',{
            opacity: 0,
            YPercent:20,
            stagger:0.04,
        })
        // alert(3);

        $('body').addClass('hidden');
      })
    
    $('.close, .dimmed').click(function(e){
        e.preventDefault();
        $('.search-area, .dimmed, .header .nav-list').removeClass('active');

        gsap.to('.header .nav-item',{
            opacity: 1,
            visibility: 'visible',
            xPercent:0,
            // transform: translateX(0),
            stagger:0.05,
            // reversed:true
            // runBackwards:true
            // animation-delay: 0.5
        })

        


        $('body').removeClass('hidden');
    })

    // dimmed클릭시 닫히기
    $('.dimmed').click(function(e){
        if( !$('.m-btn').has(e.target).length )
          $('.m-btn').removeClass('active');
    });







    // battery 온종일 가는 배터리
    gsap.to('.content.battery .headline-super',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".content.battery .headline-super",//총구,기준태그
            start:"top 70%",//(트리거기준, 윈도우기준)
            end: "50% top",//(트리거기준, 윈도우기준)
            toggleClass:"add",
            // markers:true,  //좌표
            // scrub:1,
            once: true, //한번만
        },

        
    })


    // speed 속도 및 반응성
    gsap.to('.content.speed .speedOn',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".speed",//총구,기준태그
            start:"50% 60%",//(트리거기준, 윈도우기준)
            end: "50% top",//(트리거기준, 윈도우기준)
            // markers:true,//좌표
            // scrub:1,
        },

        opacity: 1
    })


    // 자물쇠

    const lock = gsap.timeline({
        scrollTrigger:{
            trigger:".content.security",//총구,기준태그
            start:"top 50%",//(트리거기준, 윈도우기준)
            end: "bottom top",//(트리거기준, 윈도우기준)
            // markers:true,//좌표
            scrub:1,
            // pin:true
        },
    });

    lock
    // .to('.content.security .img-area',{
    //     backgroundPosition: (-b * a * 2) + "px 0px"
    // })
    // .to('.content.security .img-area',{
    //     backgroundPosition: "0px -128px"
    // })
    // .to('.content.security .img-area',{
    //     backgroundPosition: (-b * a * 2) + "px -128px"
    // })
    .to('.content.security .img-area',{
        backgroundPosition: "-100px 0px",
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-200px 0px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-300px 0px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-400px 0px"
    })

    .addLabel('a')
    .to('.content.security .part-desc .dot',{
        opacity: 0,
        stagger:1,
    },'a')
    .to('.content.security .part-desc .word',{
        opacity: 1,
        stagger:1,
    },'a')
    
    .to('.content.security .img-area',{
        backgroundPosition: "-500px 0px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-600px 0px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-700px 0px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "0px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "0px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-100px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-200px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-300px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-400px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-500px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-600px -128px"
    })
    .to('.content.security .img-area',{
        backgroundPosition: "-700px -128px"
    })






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
        
        // if (!$('.notebook .book-img').hasClass('check')) {
        //     $(this).addClass('check');
        // } else {
        //     $('.notebook .book-img').removeClass('check');
           
        // }

        // if ($(this).siblings('.check').css('display') == 'none') {
        //     $('.notebook .book-img').addClass('check');
        //     $(this).siblings().removeClass('check');
        // } else {
        //     // $('.notebook .book-img').addClass('check');
        // }
        // $('.notebook .book-img').addClass('check').siblings().removeClass('check');
    })



    // 모바일영역
    $('.menu-btn.mobile-visible').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        // $('.menu-btn.mobile-visible').toggleClass('active');
        gsap.from('.header .header-bottom .menu-item',{
            opacity: 0,
            yPercent:50,
            stagger:0.3,
            // reversed:true
        })
        $('.header .header-bottom .menu-list').slideToggle();

        // gsap.fromTo(".header .header-bottom .menu-item", {
        //         opacity: 0,
        //         yPercent:20,
        //         stagger:0.3, }
        //     ,{
        //         opacity: 1,
        //         yPercent:0,
        //         stagger:0.3,
        // });

        if ($('.menu-btn.mobile-visible').hasClass('active')) {
            $('.header .header-bottom .menu-list').slideUp();
            $('.header .header-bottom .menu-list').css('display', 'flex');
            $('.menu-btn.mobile-visible').removeClass('active')
            $('.header-bottom .m-dimmed').removeClass('active');
            // $('body').removeClass('hidden');
            gsap.to('.header .header-bottom .menu-item',{
                opacity: 0,
                yPercent:50,
                stagger:0.3,
                // duration:2
                // reversed:true
            })
        } else {
            $('.header .header-bottom .menu-list').slideDown();
            $('.menu-btn.mobile-visible').addClass('active');
            $('.header-bottom .m-dimmed').addClass('active');
            // $('body').addClass('hidden');
            gsap.to('.header .header-bottom .menu-item',{
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
        gsap.to('.search-area',{

        })
        

        menu.restart()
        $('body').toggleClass('hidden')
    })


    n = $('.footer .store-wrapper .store-list')
    slide = gsap.from('.footer .store-wrapper .store-list',{
        yPercent:-100,
        opacity:0,
        paused:true,
        delay: (n.length*2000),
    })
    console.log(n.length);

    $('.store-area .btn-open').click(function(e){
        e.preventDefault();

        $(this).children('.btn-open .open').toggleClass('active')

        if ($(this).siblings('.store-list').css('display') == 'none') {
            $('.store-list').stop().slideUp(200);
            $(this).siblings('.store-list').slideDown();

            slide.restart()
            
        } else {
            $('.store-list').stop().slideUp(200);
        }
    })


});