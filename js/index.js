const overlayOn = () => {
  $(".overlay").addClass("active");
}
const overlayOff = () => {
  $(".overlay").removeClass("active");
}

//다이렉트보험 클릭시 팝업창 (S)
let directBtn = $(".direct_box").children().eq(0);

const directOff = () => {
  directBtn.removeClass("active").children().attr("src","./assets/img/btn_cal_off_blue.png");
  directBtn.next().removeClass("active")
  overlayOff();
}

directBtn.click(() => {
  if(directBtn.hasClass("active")){
    directOff();
  }else{
    directBtn.addClass("active").children().attr("src","./assets/img/btn_cal_on_blue.png");
    directBtn.next().addClass("active")
    overlayOn();
  }
});

directBtn.on("blur" , () => {
  directOff();
});
//다이렉트보험 클릭시 팝업창 (E)

// 검색창 클릭시 팝업창 (S)
$(".search_btn").click(() => {
  $(".search_btn > img").addClass("active")
  $(".detail_search_box").addClass("active")
  overlayOn();
})

$(".search_close_btn").click(() => {
  $(".search_btn > img").removeClass("active")
  $(".detail_search_box").removeClass("active")
  overlayOff();
})
// 검색창 클릭시 팝업창 (E)

// all_nav_menu 팝업창 (S)
$(".all_nav_btn").click(() => {
  $(".popup_menu").addClass("active"); 
  overlayOn();
})

$(".close_btn").click(() => {
  $(".popup_menu").removeClass("active"); 
  overlayOff();
})

$(".all_menu_list > li > a").click(function() {
  let listNum = $(this).parent().index();
  if($(".all_menu_list > li").siblings().children().hasClass("active")){
    $(".all_menu_list > li").siblings().children().removeClass("active");
  }
  $(".all_menu_list > li").eq(listNum).children().addClass("active");

  if($(".menu_depth div").siblings().hasClass("active")){
    $(".menu_depth div").siblings().removeClass("active");
  }
  $(".menu_depth div").eq(listNum).addClass("active");
})
// all_nav_menu 팝업창 (E)
// 메인배너 슬라이더 포깈ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
let mainSlideCount = 0;

const mainSlideMove = () => {
  $(".main_banner .gallery_item").eq(mainSlideCount).fadeOut(1000).next().fadeIn(1000).end().appendTo(".main_banner .gallery_box");

  $(".main_banner .dot_list li").removeClass("blue").eq(mainSlideCount).addClass("blue")
}

mainSlideMove();

$(".main_banner > .gallery_box > .gallery_item:gt(0)").hide();

setInterval(function() {
  mainSlideMove();
}, 6000)

$(".main_banner .dot_list li button").on("click", function(){
  mainSlideCount = $(this).parent().index();
  mainSlideMove();
});
// 메인배너 슬라이더 포깈ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 스크롤박스 (S)
let scrollNum = 0;
let noticeItemClone = $(".notice .scroll_list > li").eq(0).clone();
let recruitItemClone = $(".recruit .scroll_list > li").eq(0).clone();
$(".notice .scroll_list").append(noticeItemClone);
$(".recruit .scroll_list").append(recruitItemClone);

setInterval(() => {
  scrollNum++;
    $(".scroll_list").css({
        transition : "all ease 0.5s",
        "margin-top" : scrollNum * -27 + "px",
    });
    if(scrollNum === 7){
        setTimeout(() => {
            $(".scroll_list").css({
                transition : "none",
                "margin-top" : "0px",
            });
            scrollNum = 0;
        },500)
    }
},5000);
// 스크롤박스 (E)
// 이벤트 배너 슬라이드(S)
let eventSlideCount = 1;
let eventItemClone1 = $(".event_box .gallery_list li").eq(0).clone();
let eventItemClone2 = $(".event_box .gallery_list li").eq(2).clone();

$(".event_box .gallery_list").append(eventItemClone1);
$(".event_box .gallery_list").prepend(eventItemClone2);

const eventSlideMove = () => {
  $(".event_box .gallery_list").css({
    transition : "all ease 0.5s",
    "margin-left" : eventSlideCount * -1250 + "px",
  });
  $(".event_box .dot_list button").removeClass("active").eq(eventSlideCount - 1).addClass("active");
  if(eventSlideCount === 4){
    $(".event_box .dot_list button").eq(0).addClass("active");
  }else if(eventSlideCount === 0){
    $(".event_box .dot_list button").eq(2).addClass("active");
  }
}

const eventPrevBtn = () => {
    setTimeout(() => {
        $(".event_box .gallery_list").css({
            transition : "none",
            "margin-left" : 3 * -1250 + "px",
        });
        eventSlideCount = 3;
    },100)
}

const eventNextBtn = () => {
    setTimeout(() => {
        $(".event_box .gallery_list").css({
            transition : "none",
            "margin-left" :"0px",
        });
        eventSlideCount = 0;
    },100)
}

eventSlideMove();

setInterval((e) => {
  eventSlideCount++;
  eventSlideMove();
  if(eventSlideCount === 4){
      setTimeout(() => {
          $(".event_box .gallery_list").css({
              transition : "none",
              "margin-left" : -1250 + "px",
          });
          eventSlideCount = 1;
      },500)
  }
  // $(".event_box .gallery_box").mouseover((e) => {
  //   e.preventdefault();
  // })
},3000);
// 문제
$(".event_box .control_box button").on("click",function () { 
  if($(this).hasClass("prev_btn")){
    eventSlideCount <= 0 ? eventPrevBtn() : eventSlideCount--;
  }else{
    eventSlideCount >= 4 ? eventNextBtn() : eventSlideCount++;
  }
});
// 문제 끝
$(".event_box .dot_list button").on("click", function(){
  if($(this).parent().index() === 0){
    eventSlideCount = 1
  }else if($(this).parent().index() === 1){
    eventSlideCount = 2
  }else if($(this).parent().index() === 2){
    eventSlideCount = 3
  }
  eventSlideMove();
});
// 이벤트 배너 슬라이드 (E)
// 라스트 배너 슬라이드 (S)
let lastSlideCount = 0;
let lastSlideClone = $(".last_banner .gallery_list > li").eq(0).clone();


$(".last_banner .gallery_list").append(lastSlideClone);

const lastSlideMove = () => {
    $(".last_banner .gallery_list").css({
        transition : "all ease 0.3s",
        "margin-left" : lastSlideCount * -410 + "px",
    })
    if(lastSlideCount <= 0){
        $(".last_banner .gallery_list").css({
            transition : "none",
        })
    }else if(lastSlideCount >= 3){
        $(".last_banner .gallery_list").css({
            transition : "none",
        })
    }
    if(lastSlideCount === 4){
        $(".last_banner .count").text(1);
    }else{
        $(".last_banner .count").text(lastSlideCount + 1);
    }
}

setInterval(() => {
    lastSlideCount++;
    lastSlideMove();
    if(lastSlideCount === 4){
        setTimeout(() => {
            $(".last_banner .gallery_list").css({
                transition : "none",
                "margin-left" : "0px",
            })
            lastSlideCount = 0;
        },500); 
    }
},5000);


$(".last_banner .control_box button").on("click",function (e) {  
  if($(this).hasClass("prev_btn")){
    if(lastSlideCount <= 0){
        lastSlideCount = 3 
    }else{lastSlideCount--;}
  }else{
    if(lastSlideCount >= 3){
        lastSlideCount = 0
    }else{lastSlideCount++;}
  }
  lastSlideMove();
});
// 라스트 배너 슬라이드 (E)
// 푸터 addlist (S)
const firstListOff = () => {
  $(".first_list > ul").removeClass("active");
  $(".first_list > button > img").removeClass("active")
}

const twoListOff = () => {
  $(".two_list > ul").removeClass("active");
  $(".two_list > button > img").removeClass("active")
}

$(".first_list > button").click(() => {
  if($(".first_list > ul").hasClass("active")){
    firstListOff();
  }else{
    $(".first_list > ul").addClass("active");
    $(".first_list > button > img").addClass("active")
  }
})

$(".first_list").mouseleave(() => {
  firstListOff(); 
})

$(".two_list > button").click(() => {
  if($(".two_list > ul").hasClass("active")){
    $(".two_list > ul").removeClass("active");
    $(".two_list > button > img").removeClass("active")
  }else{
    $(".two_list > ul").addClass("active");
    $(".two_list > button > img").addClass("active")
  }
})

$(".two_list").mouseleave(() => {
  twoListOff(); 
})
// 푸터 addlist (E)
// 푸터 슬라이드 (S)
let footerSlideCount = 0;
let footerItemClone = $(".footer_slider li").eq(0).clone();

$(".footer_slider ul").append(footerItemClone);

setInterval(() => {
  footerSlideCount++;
    $(".footer_slider ul").css({
        transition : "all ease 0.5s",
        "margin-left" : footerSlideCount * -206 + "px",
    });
    if(footerSlideCount === 7){
        setTimeout(() => {
            $(".footer_slider ul").css({
                transition : "none",
                "margin-left" : "0px",
            });
            footerSlideCount = 0;
        },500)
    }
},5000);
// 푸터 슬라이드 (E)