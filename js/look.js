// lookbook 페이지 스크립트

$(function () {

    $(window).on('mousewheel DOMMouseScroll', function (e) {

        for (let bgnum = 0; bgnum < 4; bgnum++) {
            // 각 섹션 시작위치
            let bg = $(".bgt" + bgnum).offset().top;
            // 각 섹션 도달시 배경이미지 변경 클래스
            if (bg <= 0) {
                $(".bgi").eq(bgnum).addClass("on").siblings().removeClass("on");
            }
        }

        let facebx2 = $(".facebx2").offset().top;

        let first = $(".cont1>a");
        let second = $(".cont2>a");
        let last = $(".cont3>a");

        // 상단 사진 3개
        if (facebx2 < 1000) {
            first.css({
                top: "0",
                opacity: "1",
                transition: "top 1s ease-Out, opacity 1s ease-Out"
            })
            second.css({
                top: "0",
                opacity: "1",
                transition: "top 1s ease-Out .5s, opacity 1s ease-Out .5s"
            })
            last.css({
                top: "0",
                opacity: "1",
                transition: "top 1s ease-Out 1s, opacity 1s ease-Out 1s"
            })
        }

        // 상단 사진 아래 텍스트 및 이미지 박스
        for (let cbxnum = 1; cbxnum < 4; cbxnum++) {

            let cbx = $(".contbx" + cbxnum);

            if (facebx2 < 1000) {
                cbx.css({
                    opacity: "1",
                    transition: "opacity 1s ease-Out 1.2s"
                });
            }
        }

        let bx1 = $(".lookbx1").offset().top;
        let bx2 = $(".lookbx2").offset().top;
        let bx3 = $(".lookbx3").offset().top;

        if (bx1 < 800) {
            $(".wooheebx1>span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            });
            $(".ptbx1").css({
                opacity: "1",
                transition: "opacity 1s ease-Out .5s"
            })
            $(".ntory1").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1.5s"
            })
        }

        if (bx2 < 800) {
            $(".wooheebx2>span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
            $("#ptbx").css({
                opacity: "1",
                transition: "opacity 1s ease-Out .5s"
            })
            $(".ntory2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1.5s"
            })
        }

        if (bx3 < 800) {
            $(".wooheebx3>span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            });
            $(".ptbx3").css({
                opacity: "1",
                transition: "opacity 1s ease-Out .5s"
            })
            $(".makeup3").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1.5s"
            })
        }

        let hyTop = $(".hybx1").offset().top;

        if (hyTop < 800) {
            $(".hybx1,.makeup").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        if ($(".flowerbx1").offset().top < 400) {
            $(".ptbx1").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

            $(".recomand").first().find("span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1s"
            })
        }

        let hyTop2 = $(".hybx2").offset().top;

        if (hyTop2 < 800) {
            $(".hypt,.makeup2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        if ($(".flowerbx2").offset().top < 400) {
            $("#ptbx2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

            $(".recomand").eq(1).find("span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1s"
            })

        }

        let hyTop3 = $(".hybx3").offset().top;

        if (hyTop3 < 800) {
            $(".hybx3").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        if ($(".flowerbx3").offset().top < 400) {
            $(".ptbx2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

            $(".recomand").last().find("span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1s"
            })

        }

        //제품 스크롤액션
        for (let ani = 1; ani < 4; ani++) {

            let fcTop = $(".Ani" + ani + ">a").offset().top;

            // console.log(fcTop)

            let firstc = $(".Ani" + ani).first().find("a");
            let secondc = $(".Ani" + ani).eq(1).find("a");
            let lastc = $(".Ani" + ani).last().find("a");

            if (fcTop < 800) {

                firstc.css({
                    top: "0",
                    opacity: "1",
                    transition: "1s ease-Out"
                })
                secondc.css({
                    top: "0",
                    opacity: "1",
                    transition: "1s ease-Out .5s"
                })
                lastc.css({
                    top: "0",
                    opacity: "1",
                    transition: "1s ease-Out 1s"
                })

            }

        }

    }); ///////////////

    $(document).on('touchstart touchend', function (e) {

        for (let bgnum = 0; bgnum < 4; bgnum++) {

            let bg = $(".bgt" + bgnum).offset().top;
            // 모바일 배경이미지 변경 클래스
            if ($(window).width() <= 760 && bg <= 0) {
                $(".bgim").eq(bgnum).addClass("on").siblings().removeClass("on");
            }
        }

        //배경 변경
        let topbx = $("#topbx").offset().top;

        let chic = $(".lookbx").offset().top;
        // console.log("첫번째" + chic);

        let dream = $(".lookbx2").offset().top;
        // console.log("두번째" + dream);

        let pure = $(".lookbx3").offset().top;
        // console.log("세번째" + pure);

        if (topbx <= 0) {
            $("body").removeClass()
        }

        if (chic <= 200) {
            $("body").removeClass().addClass("chic")
        }

        if (dream <= 200) {
            $("body").removeClass().addClass("dream")
        }

        if (pure <= 200) {
            $("body").removeClass().addClass("pure")
        }



        let facebx2 = $(".facebx2").offset().top;

        let first = $(".cont1>a");
        let second = $(".cont2>a");
        let last = $(".cont3>a");

        // 상단 사진 3개
        if (facebx2 <= 400) {
            first.css({
                top: "0",
                opacity: "1",
                transition: "top 1s ease-Out, opacity 1s ease-Out"
            })
            second.css({
                top: "0",
                opacity: "1",
                transition: "top 1s ease-Out .5s, opacity 1s ease-Out .5s"
            })
            last.css({
                top: "0",
                opacity: "1",
                transition: "top 1s ease-Out 1s, opacity 1s ease-Out 1s"
            })
        }

        // 상단 사진 아래 텍스트 및 이미지 박스
        for (let cbxnum = 1; cbxnum < 4; cbxnum++) {

            let mbx = $(".mptxt" + cbxnum);

            if (facebx2 <= 400) {
                mbx.css({
                    opacity: "1",
                    transition: "opacity 1s ease-Out .5s"
                });
            }
        }

        let bx1 = $(".lookbx1").offset().top;
        let bx2 = $(".lookbx2").offset().top;
        let bx3 = $(".lookbx3").offset().top;

        if (bx1 < 800) {
            $(".wooheebx1>span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            });
            $(".ptbx1").css({
                opacity: "1",
                transition: "opacity 1s ease-Out .5s"
            })
            $(".ntory1").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1.5s"
            })
        }

        if (bx2 < 800) {
            $(".wooheebx2>span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
            $("#ptbx").css({
                opacity: "1",
                transition: "opacity 1s ease-Out .5s"
            })
            $(".ntory2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1.5s"
            })
        }

        if (bx3 < 800) {
            $(".wooheebx3>span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            });
            $(".ptbx3").css({
                opacity: "1",
                transition: "opacity 1s ease-Out .5s"
            })
            $(".makeup3").css({
                opacity: "1",
                transition: "opacity 1s ease-Out 1.5s"
            })
        }

        let hyTop = $(".hybx1").offset().top;

        if (hyTop < 800) {
            $(".hybx1,.makeup").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        if ($(".flowerbx1").offset().top < 400) {
            $(".ptbx1").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

            $(".recomand").first().find("span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        let hyTop2 = $(".hybx2").offset().top;

        if (hyTop2 < 800) {
            $(".hypt,.makeup2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        if ($(".flowerbx2").offset().top < 400) {
            $("#ptbx2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

            $(".recomand").eq(1).find("span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

        }

        let hyTop3 = $(".hybx3").offset().top;

        if (hyTop3 < 800) {
            $(".hybx3").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })
        }

        if ($(".flowerbx3").offset().top < 400) {
            $(".ptbx2").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

            $(".recomand").last().find("span").css({
                opacity: "1",
                transition: "opacity 1s ease-Out"
            })

        }

        //제품 스크롤액션
        for (let ani = 1; ani < 4; ani++) {

            let fcTop = $(".Ani" + ani + ">a").offset().top;

            // console.log(fcTop)

            let firstc = $(".Ani" + ani).first().find("a");
            let secondc = $(".Ani" + ani).eq(1).find("a");
            let lastc = $(".Ani" + ani).last().find("a");

            if (fcTop < 400) {

                firstc.css({
                    top: "0",
                    opacity: "1",
                    transition: "1s ease-Out"
                })
                secondc.css({
                    top: "0",
                    opacity: "1",
                    transition: "1s ease-Out .5s"
                })
                lastc.css({
                    top: "0",
                    opacity: "1",
                    transition: "1s ease-Out 1s"
                })

            }

        }



    });

}); /////////////////////////