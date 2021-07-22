// 서브 페이지 데이터 연결 스크립트

// 주소값 불러오기
let pm = location.href;

// 주소값에서 문자 잘라오기
pm = pm.split("?")[1].split("=")[1];


let info = {
    "Face": {
        "배경": "2",
        "로고": "face",
        "컨텐츠": [
            "<span>Cushion</span>",
            "<h2>FX Cushion <br> Foundation</h2>",
            "<span>No 23. Natural Beige</span>",
            "<span>&#8361;38,000</span>"
        ],
        "컨텐츠2": [
            "<span>Cheek</span>",
            "<h2>Veilayer <br> Cheek</h2>",
            "<span>No 01. Irishka Nude</span>",
            "<span>&#8361;17,000</span>"
        ],
        "컨텐츠3": [
            "<span>BB</span>",
            "<h2>FX Beauty <br> Balm</h2>",
            "<span>　</span>",
            "<span>&#8361;21,000</span>"
        ]
    },
    "Lip": {
        "배경": "3",
        "로고": "lip",
        "컨텐츠": [
            "<span>Lip</span>",
            "<h2>Veilayer <br> Matte Lip</h2>",
            "<span>No 07. Mellow Red</span>",
            "<span>&#8361;19,000</span>"
        ],
        "컨텐츠2": [
            "<span>Lacquer</span>",
            "<h2>Color Suede <br> Lip Lacquer</h2>",
            "<span>No 05. Crop Orange</span>",
            "<span>&#8361;18,000</span>"
        ],
        "컨텐츠3": [
            "<span>Lacquer</span>",
            "<h2>Color Suede <br> Lip Lacquer</h2>",
            "<span>No 06. Fresco Chili</span>",
            "<span>&#8361;18,000</span>"
        ]
    },
    "Eye": {
        "배경": "4",
        "로고": "eye",
        "컨텐츠": [
            "<span>Eye Liner</span>",
            "<h2>Drawing Editor <br> EyeLiner Pencil</h2>",
            "<span>No 01. Black</span>",
            "<span>&#8361;13,000</span>"
        ],
        "컨텐츠2": [
            "<span>Mascara</span>",
            "<h2>Lash Tintcara <br> #Set-Clear</h2>",
            "<span>No 02. Brown</span>",
            "<span>&#8361;22,000</span>"
        ],
        "컨텐츠3": [
            "<span>Eyebrow</span>",
            "<h2>Drawing Editor <br> Eyebrow Pencil</h2>",
            "<span>No 05. Walnut Brown</span>",
            "<span>&#8361;12,000</span>"
        ]
    },
    "Skincare": {
        "배경": "5",
        "로고": "skincare",
        "컨텐츠": [
            "<span>Toner</span>",
            "<h2>Moistouch <br> Toner</h2>",
            "<span>　</span>",
            "<span>&#8361;22,000</span>"
        ],
        "컨텐츠2": [
            "<span>Mist</span>",
            "<h2>FX Serum <br> Mist</h2>",
            "<span>　</span>",
            "<span>&#8361;22,000</span>"
        ],
        "컨텐츠3": [
            "<span>Cream</span>",
            "<h2>FX <br> Cream</h2>",
            "<span>　</span>",
            "<span>&#8361;49,000</span>"
        ]
    }
}

$(function () {

    $("body").css({
        // 배경화면 데이터
        background: 'url(images/bg' + info[pm]["배경"] + '.jpg) no-repeat fixed top/cover'
    })

    // 메인로고 데이터 변수
    let img = '<img src="images/menu-' + info[pm]["로고"] + '.png" alt="메인로고" id="resize">'


    $(".blogobx").html(img);


    // 컨텐츠 배열 변수에 넣기
    let cont = info[pm]["컨텐츠"];
    let cont2 = info[pm]["컨텐츠2"];
    let cont3 = info[pm]["컨텐츠3"];

    let ct1 = "";

    let ct2 = "";

    let ct3 = "";

    let imgCount;


    // for of로 배열 내 컨텐츠 불러와서 변수에 넣기
    for (let x of cont) {
        ct1 += x
        // console.log("배열" + cont1);
    }
    for (let x of cont2) {
        ct2 += x
    }
    for (let x of cont3) {
        ct3 += x
    }
    ////////////////////////////////////////////////


    // for문으로 이미지 경로 세팅
    for (imgCount = 1; imgCount < 4; imgCount++) {

        let count1;
        let count2;
        let count3;

        if (imgCount = 1) count1 = 1;
        if (imgCount = 2) count2 = 2;
        if (imgCount = 3) count3 = 3;

        ct1 += '<img src="images/' + info[pm]["로고"] + '/cont_' + count1 + '.png" alt="컨텐츠"></img>'
        ct2 += '<img src="images/' + info[pm]["로고"] + '/cont_' + count2 + '.png" alt="컨텐츠"></img>'
        ct3 += '<img src="images/' + info[pm]["로고"] + '/cont_' + count3 + '.png" alt="컨텐츠"></img>'
    }

    $(".contbx1").html(ct1);
    $(".contbx2").html(ct2);
    $(".contbx3").html(ct3);

}); //////////////////////////////////////////////////////////////////////////