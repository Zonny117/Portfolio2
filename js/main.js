// 제이쿼리 animate로 배경색 및 트랜스폼 변경을 하기 위해선 라이브러리가 필요하다.
// jqueryUI (배경 애니메이트 가능), jquery.transform.js(트랜스폼 애니메이트 가능)
// 그라데이션 트랜지션 기능은 현재 구현 불가능
///////////////JQB
$(function () {

    $(window).on('load', function () {

        let test = (/Naver/i.test(navigator.userAgent));
        console.log(test);

        let winW = window.innerWidth;
        console.log(winW);

        if (winW <= 760 && test) {

            $("html").css({
                height:"auto",
                overflowX:"hidden"
            })

            $("body").css({
                height: "100%",
                overflowX: "hidden"
            })

            $(".wrap").css({
                display: "none"
            })

            $(".biglogo").css({
                height: "100vh"
            })
        };

    });///////////////////////////////////////////////////


    // a  기본 이동 막기
    $("a").click(function (e) {
        e.preventDefault();
    }); ///////////////////


    // 햄버거 버튼 클릭시 토글
    $(".ham").click(function () {
        $(this).toggleClass("on");

        $("#top").toggleClass("on");

        $("#top2").toggleClass("on");

        $(".store").toggleClass("on");

        $(".mlogo").toggleClass("on");
    }); /////////////////////////////////




    /////////////////// //////////모바일 터치 상위 메뉴 이벤트////////////////////////////////////

    $(document).on('touchstart touchend', function (e) {
        e.stopPropagation();
    });

    let tS, tE;

    $(document).on('touchstart', function (e) {

        tS = e.originalEvent.touches[0].screenY;

        // console.log("터치시작:" + tS);

    }); ///////////////////////////

    $(document).on('touchend', function (e) {

        tE = e.originalEvent.changedTouches[0].screenY;

        // console.log("터치끝" + tE);

        let deltaY = tS - tE;
        // console.log("터치 위치값: " + deltaY);
        // console.log(deltaY)

        // 상단메뉴 터치시 기준값이 0이면 미세한 터치차이로 인해 상단메뉴가 사라질수 있기 때문에
        // 기준값을 살짝 늘려줌, 터치 윗방향 스와이프만 설정.
        // 반대쪽은 무조건 내려와서 기준값이 0이어도 됨.
        if (deltaY > 30) {

            // 모바일 가로 모드일때 터치시 상단 메뉴 높이 조정
            $("#top").css({
                padding: "-50px",
                height: "-50px"
            })

            $(".store").css({
                top: "-50px",
            })

            $(".ham").css({
                top: "-50px"
            })


            $(".mlogo").css({
                top: "-80px"
            })

            // 토글메뉴 햄버거버튼 고정
            $(".ham.on").css({
                top: "46px"
            })

            // 토글메뉴 로고 고정
            $(".mlogo.on").css({
                top: "13px"
            })

            // 모바일에서 .store 메뉴가 열린 상태에서 스크롤 내려가면 숨기기
            $(".store ol").css({
                opacity: 0
            });

        } ///////////////////////
        ///////////////////////
        else {
            // 모바일 가로 모드일때 터치시 상단 메뉴 높이 조정
            $("#top").css({
                padding: "30px",
                height: "94px"
            })

            $(".store").css({
                top: "48px",
            })

            $(".ham").css({
                top: "46px"
            })

            $(".mlogo").css({
                top: "13px"
            })

            // 모바일에서 .store 메뉴가 열린 상태에서 스크롤 올라가면 보이기
            $(".store ol").css({
                opacity: 1
            });
        } ////////////////////////


        // 햄버거 버튼에 클래스 on이 들어간 상태에서 윗방향 스와이프시 .store 메뉴 내려옴
        // #top2 메뉴가 다시 사라지면 햄버거와 로고만 남아있는 이질감 방지
        $(".ham.on").click(function () {

            if (deltaY > 0) {
                $(".store").css({
                    top: "48px",
                })
            } ///////////////////////////
        }); /////////////////////
    }); //////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////// // 상위메뉴 마우스 휠 이벤트////////////////////////////////
    $("html, body").on('mousewheel DOMMouseScroll', function (e) {

        let E = e.originalEvent.deltaY;
        // deltaY - 마우스휠 Y축 방향값

        //// 크로스 브라우징 (파이어 폭스 마우스 휠)
        if (/Firefox/i.test(navigator.userAgent)) {
            E = e.originalEvent.detail;

            // console.log("파이어폭스휠 " + E);
        }

        // deltaY가 양수이면 마우스휠이 내려가는 값, 음수이면 휠이 올라가는 값
        if (E > 0) { //마우스 휠 내릴떄 상단 메뉴 숨기기
            $("#top").css({
                padding: "0px",
                height: "0px"
            })

            $(".store").css({
                top: "-50px",
            })

            $(".ham").css({
                top: "-50px"
            })


            $(".mlogo").css({
                top: "-80px"
            })

            // 토글메뉴 햄버거버튼 고정
            $(".ham.on").css({
                top: "65px"
            })

            // 토글메뉴 로고 고정
            $(".mlogo.on").css({
                top: "30px"
            })

        } ///////////////////////////////
        ////////////////////////////////
        else { //마우스 휠 올라갈때 상단 메뉴 보이기
            $("#top").css({
                padding: "30px",
                height: "114px"
            })

            $(".store").css({
                top: "68px",
            })

            $(".ham").css({
                top: "65px"
            })

            $(".mlogo").css({
                top: "30px"
            })
        } /////////////////////
    }); ///////////////////////////////

    $("html, body").on('mousewheel DOMMouseScroll', function (e) {

        // DOMMouseScroll 대소문자 주의!!!!!!!!!!!! 스크롤도 대문자로 시작함

        let E = e.originalEvent.deltaY;
        // deltaY - 마우스휠 Y축 방향값

        //// 크로스 브라우징 (파이어 폭스 마우스 휠)
        if (/Firefox/i.test(navigator.userAgent)) {
            E = e.originalEvent.detail;

            console.log("파이어폭스휠 " + E);
        } ///////// 파이어폭스여부 if문 /////////////

        // #top2에 클래스가 들어간 상태에서 마우스 스크롤이 내려갈때 
        // 클래스 on이 있는 햄버거 버튼 클릭시 상단메뉴 고정
        // 스크롤 올릴시 햄버거 버튼과 로고만 남아있는 이질감 방지

        $(".ham.on").click(function () { // 스크롤시 양수이기 때문에 아래방향

            if (E > 0) {
                $("#top").css({
                    padding: "30px",
                    height: "114px"
                })

                $(".store").css({
                    top: "68px",
                })
            } ///////////////////////
        }) /////////////////////////
    }) ///////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////





}); ///////////////////////////jQB////////////////////////////////////