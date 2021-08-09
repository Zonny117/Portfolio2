//로그인 페이지 스크립트


$(function () {

    $(".signIn").click(function (e) {
        e.preventDefault();

        // 정규표현식 = [\s : 공백문자 대응, /g 전역 검색]
        let remove = function (val) {
            let space = val.replace(/\s/g, "");
            return space;
        };

        let id = remove($(".id").val());
        let pw = remove($(".pw").val());

        $(".id").val(id);
        $(".pw").val(pw);

        if (id === "" || pw === "") {
            alert("아이디 혹은 비밀번호가 입력되지 않았습니다.");
        }

    }); ///////////////////


    // 마우스 블러시 이메일 뒷주소를 제외한 나머지 입력값 검사
    $("input[type=text][id!=email2],input[type=password]")
        .blur(function () {

            // 속성이 아이디인 것 담기
            let cid = $(this).attr("id");

            let cv;

            // 아이디의 값 공백제거
            if (cid === "mnm") cv = $(this).val().trim();

            else cv = groSpace($(this).val());

            $(this).val(cv);

            //각 입력창이 빈값일 경우 문구 출력
            if (cv === "") {
                $(this).siblings(".msg")
                    .text("필수입력 사항입니다.")
                    .removeClass("on");

                pass = false;

            } //////////// if문 : 빈값일때 ///////////////
            else if (cid === "mid") {

                let res = vReg(cv, cid);

                if (!res) {

                    $(this).siblings(".msg")
                        .text("유효하지 않은 형식입니다.")
                        .removeClass("on");

                    pass = false;

                } /////////// if문 : 결과 false ////////
                else {
                    $(this).siblings(".msg")
                        .text("사용가능한 아이디입니다.")
                        .addClass("on"); //글자색 변경 클래스
                } ////////// else문 : 결과 true ////////

            } /////////// else if문 : 아이디일때 //////////

            // 5. 비밀번호일때 검사하기 /////////////////////
            else if (cid === "mpw") {

                let res = vReg(cv, cid);

                if (!res) { // !(NOT연산자)로 결과 반대

                    $(this).siblings(".msg")
                        .text("유효하지 않은 형식입니다.");

                    // 통과여부 false
                    pass = false;

                } /////////// if문 : 결과 false ////////
                else {

                    $(this).siblings(".msg").empty();

                } ////////// else문 : 결과 true ////////

            } //////////// else if문 : 비밀번호일때 /////////
            else if (cid === "mpw2") {

                if (cv !== $("#mpw").val()) {

                    $(this).siblings(".msg")
                        .text("비밀번호가 일치하지 않습니다!");

                    pass = false;

                } /////////// if문 : 결과 false ////////
                else {

                    $(this).siblings(".msg").empty();

                } ////////// else문 : 결과 true ////////

            } //////////// else if문 : 비밀번호확인일때 /////////
            else if (cid === "email1") {

                let comp =
                    eml1.val() + "@" +
                    (seleml.val() === "free" ? eml2.val() : seleml.val());

                resEml(comp);

            } //////////// else if문 : 이메일항목일때 ///////////
            else {
                $(this).siblings(".msg").empty();
            } ///////////// else문 : 빈값이 아닐때 ///////////////


        }); ////////// 블러 이벤트 함수 /////////////////////////

    let resEml = comp => { // comp - 조합된 이메일주소

        let res = vReg(comp, "eml");

        if (res) {

            eml1.siblings(".msg")
                .text("사용가능한 이메일입니다.")
                .addClass("on");

        } ///////// if문 : 결과가 true일때 //////////
        else {

            eml1.siblings(".msg")
                .text("유효하지않은 이메일 형식입니다")
                .removeClass("on");

            pass = false;

        } ///////// else문 : 결과가 false일때 ////////

    }; ///////////////// resEml 함수 ////////////////////////


    let eml1 = $("#email1");

    let eml2 = $("#email2");

    let seleml = $("#seleml");

    $("#email1, #email2").on("keyup", function () {

        let cid = $(this).attr("id");

        // let cv = $(this).val();

        let backeml =
            cid === "email1" ?
            seleml.val() : eml2.val();

        if (seleml.val() === "free") backeml = eml2.val();

        let comp = eml1.val() + "@" + backeml;

        resEml(comp);

    }); ////////////// 키보드 이벤트 함수 ///////////////////

    seleml.change(function () {

        let cv = $(this).val();

        if (cv === "init") {

            eml1.siblings(".msg")
                .text("이메일을 선택하세요.")
                .removeClass("on");

            eml2.hide();

        } /////////////// if문 ///////////////////
        else if (cv === "free") {

            eml2.show();

            let comp = eml1.val() + "@" + eml2.val();

            resEml(comp);

        } /////////////// else if문 //////////////
        else {

            eml2.hide();

            let comp = eml1.val() + "@" + cv;

            resEml(comp);


        } ///////////////// else문 //////////////////

    }); ////////////////////

    let pass;

    $("#btnj").click(function (e) {

        e.preventDefault();

        pass = true;

        $("input[type=text][id!=email2],input[type=password]")
            .trigger("blur");


        if (pass) {

            //메인 페이지 이동
            location.replace("index.html");

        } /////////// if 문 //////////////////
        else { // 불통과시

            alert("입력 사항을 확인해주세요.");

        } //////////// else문 ///////////////


    });

}); //////////////////////

// 모든공백제거함수 //////////////////////
let groSpace = val => {
    let newval = val.replace(/\s/g, "");
    return newval;
};

function vReg(val, cid) {

    let reg;

    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            break;
    } //////////////////////////

    return reg.test(val);
}