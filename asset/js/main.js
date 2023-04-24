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
            $('.header .header-bottom .menu1').slideUp();
            $('.menu-btn.mobile-visible').removeClass('active');
            $('.header-bottom .m-dimmed').removeClass('active');

        } else {

        }
    // alert(1);

    });


// 검색 버튼을 누르면 나타나라
    $('.link-search').click(function(e){
        e.preventDefault();
        $('.dimmed, .header .nav-list').addClass('active');

        $('.search-wrap').slideDown();

        $('.header .nav-area .m-btn').toggleClass('active');

      })
    
    $('.close, .dimmed').click(function(e){
        e.preventDefault();
        $('.search-area, .dimmed, .header .nav-list').removeClass('active');
        // gsap.to('.header .nav-item',{
        //     opacity: 1,
        //     visibility: 'visible',
        //     xPercent:0,
        //     // transform: translateX(0),
        //     stagger: {
        //         from: "end",
        //         amount: 0.3
        //       }
        // })
    })

    // dimmed클릭시 닫히기
    $('.dimmed').click(function(e){
        if( !$('.m-btn').has(e.target).length )
          $('.m-btn').removeClass('active');
          $('.search-area').slideUp();
    });


    const nav = gsap.from('.nav-wrap .sub-list',{
        opacity:0,
        yPercent:-20,
        stagger:0.01,
        paused:true,
    })

    // nav영역에서 내려갔다하지않게하지
    $('.nav-list').mouseover(function(){
        $(this).children('.nav-wrap').stop().slideDown();
            gsap.to('.nav-wrap',{
                opacity: 1,
            })
        })

    //nav호버시 내려오기
    $('.nav-list .nav-item').hover(function(){
        $(this).children('.nav-wrap').stop().slideDown();
        nav.restart()
        $('.dimmed').addClass('active')

        // 영역 왔다갔다 안하게 시도...
        if ('.nav-wrap'.hasClass('display', 'none')) {
            nav.pause()
            gsap.to('.nav-wrap',{
                opacity:1,
                stagger:0.01,
            })
        }

    },function(){
        $('.nav-item .nav-wrap').stop().slideUp();
        $('.dimmed').removeClass('active')
        $('.search-area').slideUp();
    })
    // search영역 벗어났을때 올라가기
    // $('.search-wrap').mouseleave(function(){
    //     $('.search-area, search-wrap').slideUp();
    //     $('.dimmed').removeClass('active')
    // })
    $('.dimmed').hover(function() {
        $('.search-wrap').slideUp();
        $('.dimmed').removeClass('active')
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
        ease:'none'
    });

    lock
    .addLabel('a')
    .to('.content.security .img-area',{
        'animation-delay': -72
    },'a')

    const dot = gsap.timeline({
        scrollTrigger:{
            trigger:".content.security",//총구,기준태그
            start:"top 50%",//(트리거기준, 윈도우기준)
            end: "bottom top",//(트리거기준, 윈도우기준)
            // markers:true,//좌표
            scrub:1,
            // pin:true
        },
    });

    dot
    // .addLabel('a')
    // .to('.content.security .part-desc .dot',{
    //     opacity: 0,
    //     stagger:1,
    // },'a')
    // .to('.content.security .part-desc .word',{
    //     opacity: 1,
    //     stagger:1,
    // },'a')
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
        gsap.from('.header .header-bottom .m-menu .menu-item',{
            opacity: 0,
            yPercent:50,
            stagger:0.3,
            // reversed:true
        })
        $('.header .header-bottom .m-menu').slideToggle();

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
            $('.header .header-bottom .m-menu').slideUp();
            // $('.header .header-bottom .menu-list').css('display', 'flex');
            $('.menu-btn.mobile-visible').removeClass('active')
            $('.header-bottom .m-dimmed').removeClass('active');
            // $('body').removeClass('hidden');
            gsap.to('.header .header-bottom .m-menu .menu-item',{
                opacity: 0,
                yPercent:50,
                stagger:0.3,
                // duration:2
                // reversed:true
            })
        } else {
            $('.header .header-bottom .m-menu').slideDown();
            $('.menu-btn.mobile-visible').addClass('active');
            $('.header-bottom .m-dimmed').addClass('active');
            // $('body').addClass('hidden');
            gsap.to('.header .header-bottom .m-menu .menu-item',{
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



    // footer 쇼핑및 알아보기
    n = $('.footer .store-wrapper .store-list');
    slide = gsap.fromTo('.footer .store-wrapper .store-list',{
       yPercent:-100,
       opacity:0,
       paused:true,
       delay: (n.length*2000)},{
        yPercent:0,
        opacity:1,
   })


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

    // $(window).resize(function(){ 
    //     if (window.innerWidth < 735) { 
        
    //         n = $('.footer .store-wrapper .store-list');
    //          slide = gsap.from('.footer .store-wrapper .store-list',{
    //             yPercent:-100,
    //             opacity:0,
    //             paused:true,
    //             delay: (n.length*2000),
    //         })
    //         console.log(n.length);

    //         $('.store-area .btn-open').click(function(e){
    //             e.preventDefault();
        
    //             $(this).children('.btn-open .open').toggleClass('active')
        
    //             if ($(this).siblings('.store-list').css('display') == 'none') {
    //                 $('.store-list').stop().slideUp(200);
    //                 $(this).siblings('.store-list').slideDown();
        
    //                 slide.restart()
                    
    //             } else {
    //                 $('.store-list').stop().slideUp(200);
    //             }
    //         })

    //     }else {
    //         slide = gsap.from('.footer .store-wrapper .store-list',{
    //             yPercent:0,
    //             opacity:1,
    //         })

    //         $('.store-area .btn-open').click(function(){
    //             $(this).children('.btn-open .open').removeClass('active')

    //             // if ($(this).siblings('.store-list').css('display') == 'none') {
    //             //     $('.store-list').css('display', 'block');
    //             //     $(this).siblings('.store-list').stop().slideDown();
    //             // }
    //         })
    //     }
        
        
    // }).resize(); 

    // n = $('.footer .store-wrapper .store-list')
    // slide = gsap.from('.footer .store-wrapper .store-list',{
    //     yPercent:-100,
    //     opacity:0,
    //     paused:true,
    //     delay: (n.length*2000),
    // })
    // console.log(n.length);




    


});