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


}); ///////////////////////////////////////