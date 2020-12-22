$(function () {


    $(".skill p").hide();
    $("#section4").hide();

    $(".skill li").click(function () {
        $(this).find("p").slideToggle();



    })






    $('.more ').click(function () {

        $("#section4").slideToggle();
    });

    $('.boxBtn1').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    });
    $('.boxBtn2').click(function () {
        $('html').animate({
            scrollTop: 1150
        }, 1000);
    });
    $('.boxBtn3').click(function () {
        $('html').animate({
            scrollTop:  2400
        }, 1000);
    });
    $('.boxBtn4').click(function () {
        $('html').animate({
            scrollTop:5500
        }, 1000);
    });






    //스크롤시 나타나기
    $(window).scroll(function () {









        const scrollTop = $(window).scrollTop() + $(window).height();

        $(".scrollTop").text(parseInt(scrollTop));









        if (scrollTop > $("#main_wrap").offset().top) {
            $(".main_txt").addClass("show"),
                $(".main_img1").addClass("show"),
                $(".main_img2").addClass("show"),
                $(".car").addClass("show");
            $('#btn_box li > a').removeClass('on');
            $('#btn_box li').eq(0).find('a').addClass('on');
        }

        if (scrollTop > $("#section1").offset().top) {
            $("#section1").addClass("show");
            $('#btn_box li>a').removeClass('on');
            $('#btn_box li').eq(1).find('a').addClass('on');
        }
        if (scrollTop > $("#section2").offset().top) {
            $("#section2").addClass("show");
            $(".skill").addClass("show");
        
        }


        if (scrollTop > $(".sec_scroll1").offset().top) {
            $(".sec_scroll1").addClass("show");
            $('#btn_box li>a').removeClass('on');
            $('#btn_box li').eq(2).find('a').addClass('on');

        };
         if (scrollTop > $("footer").offset().top) {
            $('#btn_box li>a').removeClass('on');
            $('#btn_box li').eq(3).find('a').addClass('on');

        };







        if (scrollTop > $(".section3_a_wrap1").offset().top) {

            $(".section3_a_wrap1").addClass("show"),
                $(".section3_a_wrap1 .section3_a_txt").addClass("show"),
                $(".section3_a_wrap1 .section3_a_img").addClass("show");

        }
        if (scrollTop > $(".section3_a_wrap2").offset().top) {

            $(".section3_a_wrap2").addClass("show"),
                $(".section3_a_wrap2 .section3_a_txt").addClass("show"),
                $(".section3_a_wrap2 .section3_a_img").addClass("show");

        }
        if (scrollTop > $(".section3_a_wrap3").offset().top) {

            $(".section3_a_wrap3").addClass("show"),
                $(".section3_a_wrap3 .section3_a_txt").addClass("show"),
                $(".section3_a_wrap3 .section3_a_img").addClass("show");
        }
        if (scrollTop > $(".section3_a_wrap4").offset().top) {

            $(".section3_a_wrap4").addClass("show"),
                $(".section3_a_wrap4 .section3_a_txt").addClass("show"),
                $(".section3_a_wrap4 .section3_a_img").addClass("show");
        }
        if (scrollTop > $(".section3_a_wrap5").offset().top) {

            $(".section3_a_wrap5").addClass("show"),
                $(".section3_a_wrap5 .section3_a_txt").addClass("show"),
                $(".section3_a_wrap5 .section3_a_img").addClass("show");

        }
        if (scrollTop > $(".sec_scroll1").offset().top) {

            $(".sec_scroll1").addClass("show");
        }



    })

 $('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
