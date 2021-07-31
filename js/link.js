// 각 서브 페이지 연결 스크립트

$(function(){


    // 네비게이션, 토클 네비게이션의 메뉴명 불러오기
    $(".gnb a, #top2 a").click(function(){

        let txt = $(this).text();
        console.log(txt)

        let url;
        
        // 해당 메뉴명과 일치한 속성명의 값에 url 주소 변수 넣기
        switch(txt){///////////////
            case "Brand Story" : url="brand.html"; break;
            case "Lookbook" : url="look.html"; break;
            case "Login" : url="login.html"; break;
            default : url="sub.html?won=" + txt;
        }////////////////////////

        // url 변수로 이동
        location.href = url

    });//////////////////////////



});///////////////////////////////////////