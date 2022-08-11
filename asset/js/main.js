$(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop()>0) {
            $('.header').addClass('active');
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

        gsap.to('.header .nav-item',{
            // transition: 0.2
            // opacity: 0
            // transform: translateX(0)
            // animation-delay: 0.5
        })
        // alert(3);

        $('body').addClass('hidden');
      })
    
    $('.close, .dimmed').click(function(e){
        e.preventDefault();
        $('.search-area, .dimmed, .header .nav-list').removeClass('active');

        gsap.to('.header .nav-item',{
            // transition: 0.2
            // opacity: 1
            // transform: translateX(100%)
        })


        $('body').removeClass('hidden');
    })

    //   칩 하나에 담은 거대한 도약.ㅂ분
    gsap.to('.sc-m1 .m1-video-box',{

        scrollTrigger:{
            trigger:".m1-video-box", //총구,기준태그
            start:"top 80%", //(트리거기준, 윈도우기준)
            end: "bottom top", //(트리거기준, 윈도우기준)
            // markers:true, //좌표
            scrub:1,
        },

        // video: autoplay
    })


    // 7코어 GPU
    gsap.to('.sc-part .part-video-box',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".part-video-box",
            start:"top 80%",
            end: "bottom top",
            // markers:true,
            scrub:1,
        },

        // video: autoplay
    })


    // 글자 채워지기
    $(window).scroll(function(){
        // if ( $('.sc-part .part-battery').offset().top.scrollTop()) {
        //     $('.part-battery .part-headline').addClass('animation');
        // }
        // a = $('.sc-part .part-battery').offset().top;
        // $('.part-battery .part-headline').addClass('animation')
    
        gsap.to('.sc-part .part-txt',{
            // y:-180 픽셀
            scrollTrigger:{
                trigger:".part-txt",
                start:"top 70%",
                end: "bottom top",
                // markers:true,
                // scrub:1,
            },
        })
    })


    // speed
    gsap.to('.content.speed .speedOn',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".speed",
            start:"top 70%",
            end: "50% top",
            // markers:true,
            // scrub:1,
        },

        opacity: 1
    })


    // .sc-display 노트북 채워지기
    gsap.to('.sc-display .product-img-box',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".product-img-box",
            start:"top 90%",
            end: "20% top",
            markers:true,
            // scrub:1,
        },

        opacity: 1
    })




      
});