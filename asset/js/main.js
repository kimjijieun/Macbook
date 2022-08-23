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





    // battery 온종일 가는 배터리
    gsap.to('.content.battery .headline',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".battery",//총구,기준태그
            start:"top 70%",//(트리거기준, 윈도우기준)
            end: "50% bottom",//(트리거기준, 윈도우기준)
            // markers:true,//좌표
            // scrub:1,
        },

        // Animation: running;
        
    })


    // speed 속도 및 반응성
    gsap.to('.content.speed .speedOn',{
        // y:-180 픽셀
        scrollTrigger:{
            trigger:".speed",//총구,기준태그
            start:"top 40%",//(트리거기준, 윈도우기준)
            end: "50% top",//(트리거기준, 윈도우기준)
            // markers:true,//좌표
            // scrub:1,
        },

        opacity: 1
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
            markers:true,
            // scrub:1,
        },

        opacity: 1
    })




      
});