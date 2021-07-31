// 메인페이지 스크롤 애니메이션 스크립트
$(function () {

    $("html,body").on('mousewheel DOMMouseScroll', function () {

        //////////////////////////섹션1////////////////////////////////
        var woo = $(".wooheebx").offset().top;
        // console.log(woo)

        if (woo < 500) {
            $(".woohee").css({
                transform: "scale(1)",
                transition: "transform .8s ease-Out"
            })
        }

        if (woo <= 0) {
            $(".muse").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".nstory").css({
                opacity: "1",
                transition: "opacity .8s ease-Out .5s"
            })
        }


        var hye = $(".hybx").offset().top;
        if (hye < 500) {
            $(".hyejun").css({
                transform: "scale(1)",
                transition: "transform .8s ease-Out"
            })
        }

        if (hye <= 0) {
            $(".lookbook").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".makeup").css({
                opacity: "1",
                transition: "opacity .8s ease-Out .5s"
            })
        }

        var flower = $(".flowerbx").offset().top;
        if (flower < 500) {
            $(".fgImg").css({
                transform: "scale(1)",
                transition: "transform .8s ease-Out"
            })
        }

        if (flower <= 0) {
            $(".flowerGarden").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".fgtest").css({
                opacity: "1",
                transition: "opacity .8s ease-Out .5s"
            })
        }

        //////////////////////////////나머지 섹션//////////////////////////////////////

        var face = $(".facebx").offset().top;
        if (face < 800) {
            $(".facetxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".face").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }
        var lip = $(".lipbx").offset().top;
        if (lip < 800) {
            $(".liptxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".lip").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }
        var eye = $(".eyebx").offset().top;
        if (eye < 800) {
            $(".eyetxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".eye").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }
        var skin = $(".skinbx").offset().top;
        if (skin < 800) {
            $(".skintxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".skincare").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }

        // 배열변수
        let cont = [
            "fc",
            "lip",
            "eye",
            "skin"
        ]

        // 배열변수 객체 수 만큼 돌려서 변수 x에 담기 
        for (let x of cont) {
            // 각 섹션 4번째 컨텐츠는 absolute이므로 따로 설정, 즉 한계값 4
            for (let c = 1; c < 4; c++) {

                let cTop = $("." + x + c + ">a").offset().top;

                if (cTop < 1000) {
                    $("." + x + c + ">a").css({
                        top: "0",
                        opacity: 1,
                        transition: "top 1s ease-Out, opacity 1s ease-Out"
                    })
                }

            }

            let lastTop = $("." + x + "4>a").offset().top;

            if (lastTop < 1000) {
                $("." + x + "4>a").css({
                    top: "100%",
                    opacity: 1,
                    transition: "top 1s ease-Out, opacity 1s ease-Out"
                })
            }
        }

    }); /////////////////////////////////////////////////////////////////////////////



    //모바일 버전
    $("html, body").on("touchstart", function () {
        //////////////////////////섹션1////////////////////////////////
        var woo = $(".wooheebx").offset().top;
        // console.log(woo)

        if (woo < 800) {
            $(".woohee").css({
                transform: "scale(1)",
                transition: "transform .8s ease-Out"
            })
        }

        if (woo <= 500) {
            $(".muse").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".nstory").css({
                opacity: "1",
                transition: "opacity .8s ease-Out .5s"
            })
        }


        var hye = $(".hybx").offset().top;
        if (hye < 800) {
            $(".hyejun").css({
                transform: "scale(1)",
                transition: "transform .8s ease-Out"
            })
        }

        if (hye <= 500) {
            $(".lookbook").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".makeup").css({
                opacity: "1",
                transition: "opacity .8s ease-Out .5s"
            })
        }

        var flower = $(".flowerbx").offset().top;
        if (flower < 800) {
            $(".fgImg").css({
                transform: "scale(1)",
                transition: "transform .8s ease-Out"
            })
        }

        if (flower <= 500) {
            $(".flowerGarden").css({
                opacity: "1",
                transition: "opacity .8s ease-Out"
            })
            $(".fgtest").css({
                opacity: "1",
                transition: "opacity .8s ease-Out .5s"
            })
        }

        //////////////////////////////나머지 섹션//////////////////////////////////////

        var face = $(".facebx").offset().top;
        if (face < 800) {
            $(".facetxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".face").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }
        var lip = $(".lipbx").offset().top;
        if (lip < 800) {
            $(".liptxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".lip").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }
        var eye = $(".eyebx").offset().top;
        if (eye < 800) {
            $(".eyetxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".eye").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }
        var skin = $(".skinbx").offset().top;
        if (skin < 800) {
            $(".skintxt").css({
                opacity: "1",
                transition: ".8s ease-Out"
            })
            $(".skincare").css({
                opacity: "1",
                transition: ".8s ease-Out .5s"
            })
        }

        // 배열변수
        let cont = [
            "fc",
            "lip",
            "eye",
            "skin"
        ]

        // 배열변수 객체 수 만큼 돌려서 변수 x에 담기 
        for (let x of cont) {
            // 각 섹션 4번째 컨텐츠는 absolute이므로 따로 설정, 즉 한계값 4
            for (let c = 1; c < 4; c++) {

                let cTop = $("." + x + c + ">a").offset().top;

                if (cTop < 1000) {
                    $("." + x + c + ">a").css({
                        top: "0",
                        opacity: 1,
                        transition: "top 1s ease-Out, opacity 1s ease-Out"
                    })
                }

            }

            let lastTop = $("." + x + "4>a").offset().top;

            if (lastTop < 500) {
                $("." + x + "4>a").css({
                    top: "100%",
                    opacity: 1,
                    transition: "top 1s ease-Out, opacity 1s ease-Out"
                })
            }
        }

    });


}); //////////////////////////////////////////////////////////////////////////////////////