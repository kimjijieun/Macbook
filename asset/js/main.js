$(function(){

    // 스크롤시 메뉴고정,모바일 메뉴 이벤트
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
            $('.m-dimmed').removeClass('active');
        }
    });


    $('.link-search').click(function(e){
        e.preventDefault();
        // $('.dimmed, .header .nav-list').toggleClass('active');
        $('.dimmed').toggleClass('active');

        searchHeight = $('.search-area').outerHeight();

        if (!$('.search-area').hasClass('active')) {
            $('.search-area').addClass('active')
            $('.header .nav-bg').css('height',searchHeight);
        } else {
            $('.search-area').removeClass('active')
            $('.header .nav-bg').css('height',0);
        }
      })


    
    // $('.close').click(function(e){
    //     e.preventDefault();
    //     $('.search-area, .dimmed, .header .nav-list').removeClass('active');
    // })



    // hdrNav = gsap.from('.nav-wrap .sub-list .sub-item',{
    //     opacity:0,
    //     yPercent:20,
    //     stagger:0.01,
    //     duration: 0.6,
    //     paused:true,
    // })

    // 메뉴 높이값
    $('.header-nav .nav-item').hover(function(e){
        e.preventDefault();
        // hdrNav.restart();
        
        navHeight = $(this).find('.nav-wrap').outerHeight()
        $('.nav-wrap').removeClass('on');
        $(this).find('.nav-wrap').addClass('on');
        $('.dimmed').addClass('active')
        $('.header .nav-bg').css('height',navHeight);

    })
    $('.header-nav .nav-list').mouseleave(function(e){
        e.preventDefault();
        $('.header .nav-bg').css('height',0);
        $('.dimmed').removeClass('active');
        $('.nav-wrap').removeClass('on');
    })
    $('.nav-right').mouseleave(function(e){
        e.preventDefault();
        $('.header .nav-bg').css('height',0);
        $('.dimmed').removeClass('active');
        $('.search-area').removeClass('active');

        if ($('.m-btn').hasClass('active')) {
            $('.search-area').addClass('active');
        }
    })
    // $('.m-btn').mouseleave(function(e){
    //     e.preventDefault();

    //     if ($('.m-btn').css('display', 'none')) {
    //         $('.m-btn, .search-area').removeClass('active')
    //     }
    // })

    $('.dimmed').mouseover(function(e){
        e.preventDefault();
        $('.header .nav-bg').css('height',0);
        $('.dimmed').removeClass('active');
        $('.search-area').removeClass('active');
    })
    // $('.link-search, .dimmed').mouseover(function(e){
    //     e.preventDefault();
    //     $('.search-area').removeClass('active')
    //     $('.dimmed').removeClass('active');
    // })


    gsap.to('.content.battery .headline-super',{
        scrollTrigger:{
            trigger:".content.battery .headline-super",
            start:"top 70%",
            end: "50% top",
            toggleClass:"add",
            once: true,
        },

        
    })

    gsap.to('.content.speed .speedOn',{
        scrollTrigger:{
            trigger:".speed",
            start:"50% 60%",
            end: "50% top",
        },

        opacity: 1
    })



    const lock = gsap.timeline({
        scrollTrigger:{
            trigger:".content.security",
            start:"top 50%",
            end: "70% 70%",
            scrub:1,
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

    gsap.to('.sc-display .img-area',{
        scrollTrigger:{
            trigger:".sc-display .img-area",
            start:"top 75%",
            end: "20% top",
        },

        opacity: 1
    })


    gsap.to('.sc-camera .camera-cam',{
        scrollTrigger:{
            trigger:".camera-cam",
            start:"top 75%",
            end: "20% top",
        },

        opacity: 1
    })


    gsap.to('.content.Tone .bg-area',{
        scrollTrigger:{
            trigger:".content.Tone",
            start:"50% 75%",
            end: "50% top",
            duration: 3,
        },

        opacity: 1
    })

    $('.notebook .chk-btn').click(function(e){
        e.preventDefault();

        $(this).addClass('check').siblings().removeClass('check');


        a = $(this).data('target');
        $(this).addClass('check').siblings().removeClass('check');

        $(a).addClass('check').siblings().removeClass('check');
        
    })


// 모바일menu-btn 구입하기
    $('.menu-btn.mobile-visible').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        gsap.from('.header-bottom .m-menu .menu-item',{
            opacity: 0,
            yPercent:50,
            stagger:0.2,
        })
        $('.header-bottom .m-box').slideToggle();


        if ($('.menu-btn.mobile-visible').hasClass('active')) {
            $('.header-bottom .m-box, .m-menu').slideUp();
            $('.menu-btn.mobile-visible').removeClass('active')
            $('.m-dimmed').removeClass('active');
            $('.container').removeClass('index')
            gsap.to('.header-bottom .m-menu .menu-item',{
                opacity: 0,
                yPercent:50,
                stagger:0.2,
            })
        }else {
            $('.header-bottom .m-box, .m-menu').slideDown();
            $('.menu-btn.mobile-visible').addClass('active');
            $('.m-dimmed').addClass('active');
            $('.container').addClass('index')
            gsap.to('.header-bottom .m-menu .menu-item',{
                opacity: 1,
                yPercent:0,
                stagger:0.2,
            })
        }


    })

    menu = gsap.from('.header .nav-area .menu-wrap .menu-item',{
        opacity:0,
        yPercent:20,
        stagger:0.07,
        paused:true,
    })

    $('.m-search').click(function(){
        $('.search-area').toggleClass('active')
        $('.m-btn').toggleClass('active');
        $('body').toggleClass('hidden')
    })

    $('.m-btn').click(function(){
        $('.m-btn').toggleClass('active');
        $('body').toggleClass('hidden')
        $('.search-area').removeClass('active')

        if ($(this).hasClass('active')) {
            $('.header .nav-area .menu-wrap').addClass('active')
        } else {
            $('.header .nav-area .menu-wrap').removeClass('active')
        }

        // gsap.to('.header .nav-item',{
        //     opacity: 1,
        //     visibility: 'visible',
        //     xPercent:0,
        // })

        menu.restart()
    })

    // $(window).resize(function() {
    //     if($(window).width() > 1023) {
    //     // window 크기가 768보다 작을때
    //     ('.m-btn, .search-area').removeClass('active');
    //     }
    // });



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


   function searchRemove() {
        if ($(window).width() > 1023) {
            $('.search-area').removeClass('active'); 
            // $('.dimmed').removeClass('active');
        
        }
    }


    $(window).on('resize', function() {
        searchRemove(); 
    });

    searchRemove();

});