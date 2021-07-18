///////////////JQB

// 제이쿼리 animate로 배경색 및 트랜스폼 변경을 하기 위해선 라이브러리가 필요하다.
// jqueryUI (배경 애니메이트 가능), jquery.transform.js(트랜스폼 애니메이트 가능)
// 그라데이션 트랜지션 기능은 현재 구현 불가능

$(function () {

    // 햄버거 버튼 클릭시 토글
    $(".ham").click(function () {
        $(this).toggleClass("on");

        $("#top").toggleClass("on");

        $("#top2").toggleClass("on");

        $(".store").toggleClass("on");

        $(".mlogo").toggleClass("on");
    }); /////////////////////////////////


    // 상위메뉴 마우스 휠 이벤트
    $("html, body").on('mousewheel DOMMouseScroll', function (e) {
        let E = e.originalEvent.deltaY;
        // deltaY - 마우스휠 Y축 방향값

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

            // 토글메뉴 햄버거버튼 고정
            $(".ham.on").css({
                top: "65px"
            })

            $(".mlogo").css({
                top: "-80px"
            })

            // 토글메뉴 로고 고정
            $(".mlogo.on").css({
                top: "30px"
            })

        } else { //마우스 휠 올라갈때 상단 메뉴 보이기
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
        }
    });

    $("html, body").on('mousewheel DOMMousescroll', function (e) {
        let E = e.originalEvent.deltaY;

        // #top2에 클래스가 들어간 상태에서 마우스 스크롤이 내려갈때 
        // 클래스 on이 있는 햄버거 버튼 클릭시 상단메뉴 고정
        // 스크롤 올릴시 햄버거 버튼과 로고만 남아있는 이질감 방지
        $(".ham.on").click(function () {

            if (E > 0) {
                $("#top").css({
                    padding: "30px",
                    height: "114px"
                })

                $(".store").css({
                    top: "68px",
                })
            }
        })
    })

}); ///////////////////////////jQB////////////////////////////////////