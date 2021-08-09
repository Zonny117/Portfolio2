$(function () {

    //about 서브 메뉴 페이지 검은색 로고/하얀 로고 전환
    $(".ham").click(function () {

        // 자연스럽게 전환시키기위해 타임아웃 설정
        setTimeout(() => {

            if ($("#top").children().is(".mlogo.on")) {
                $(".mlogo.on").find("img").attr("src", "images/logo-white.svg");
            } //////////////
            else {
                $(".mlogo").find("img").attr("src", "images/black_icon/logo-black.png");
            }
        }, 200)
    }); /////////////////////////////////



    $("html,body").on('mousewheel DOMMouseScroll', function () {

        let whbxTop = $(".whbx").offset().top;

        if (whbxTop < 800) {
            $(".whtxt").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".whtxt2").css({
                opacity: "1",
                transition: "opacity.8s ease-Out .5s"
            })
            $(".wh").css({
                opacity: "1",
                transition: "opacity .8s ease-Out 1s"
            })
        }

        for (let wh = 1; wh < 4; wh++) {

            let whTop = $(".wh" + wh).offset().top;

            if (whTop < 500) {
                $(".wh" + wh + ">a").css({
                    opacity: "1",
                    transition: "opacity .8s ease-Out"
                })
                $(".wh" + wh + ">a>span").css({
                    opacity: "1",
                    transition: "opacity .8s ease-Out"
                })
            }

        }


    });

    $("html,body").on('touchstart', function () {

        let whbxTop = $(".whbx").offset().top;

        if (whbxTop < 800) {
            $(".whtxt").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".whtxt2").css({
                opacity: "1",
                transition: "opacity.8s ease-Out .5s"
            })
            $(".wh").css({
                opacity: "1",
                transition: "opacity .8s ease-Out 1s"
            })
        }

        for (let wh = 1; wh < 4; wh++) {

            let whTop = $(".wh" + wh).offset().top;

            if (whTop < 500) {
                $(".wh" + wh + ">a").css({
                    opacity: "1",
                    transition: "opacity .8s ease-Out"
                })
                $(".wh" + wh + ">a>span").css({
                    opacity: "1",
                    transition: "opacity .8s ease-Out"
                })
            }

        }
    });

}); ///////////////////////////////////////