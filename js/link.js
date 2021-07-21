// 각 서브 페이지 연결 스크립트

$(function(){



    $(".gnb a, #top2 a").click(function(){

        let txt = $(this).text();
        console.log(txt)

        let url;
        
        switch(txt){///////////////
            case "Face" : url="face.html"; break;
        }////////////////////////


        location.href = url;

    });//////////////////////////



});///////////////////////////////////////