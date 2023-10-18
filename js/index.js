const overlayOn = () => {
  $(".overlay").on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation(); 
    return false;
    })
  $(".overlay").addClass("active");
}
const overlayOff = () => {
  $(".overlay").off('scroll touchmove mousewheel'); 
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
  $(".search_btn > img, .detail_search_box").addClass("active")
  $(".search_inner_box").slideDown("normal")
  overlayOn();
})

$(".search_close_btn").click(() => {
  $(".search_btn > img, .detail_search_box").removeClass("active")
  $(".search_inner_box").slideUp("fast")
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

// $(".main_banner .dot_list li button").on("click", function(){
//   mainSlideCount = $(this).parent().index();
//   mainSlideMove();
// });
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
let bullet = ["01","02","03"];
const swiper = new Swiper('.event_box > .swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides : 1,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass:"custom_bullet",
    bulletActiveClass: "swiper-pagination-custom-bullet-active",
    renderBullet: function (index, className) {
        return  '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
// 이벤트 배너 슬라이드 (E)
// 라스트 배너 슬라이드 (S)

const lastSwiper = new Swiper('.last_banner > .swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides : 1,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
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