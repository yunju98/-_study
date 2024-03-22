const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const overlayOn = () => {
  overlay.classList.add("active");
  body.classList.add("scrollLock");
};
const overlayOff = () => {
  overlay.classList.remove("active");
  body.classList.remove("scrollLock");
};

//다이렉트보험 클릭시 팝업창 (S)
const directBox = document.querySelector(".direct_box");
const directBtn = directBox.firstElementChild;
const nextSibling = directBtn.nextElementSibling;

const directOff = () => {
  directBox.classList.remove("active");
  directBtn.classList.remove("on");
  if (nextSibling) {
    nextSibling.classList.remove("active");
  }
  overlayOff();
};

directBtn.onclick = () => {
  if (directBtn.classList.contains("on")) {
    directOff();
  } else {
    directBox.classList.add("active");
    directBtn.classList.add("on");
    if (nextSibling) {
      nextSibling.classList.add("active");
    }
    overlayOn();
  }
};

directBtn.onblur = () => {
  directOff();
};
//다이렉트보험 클릭시 팝업창 (E)

// 검색창 클릭시 팝업창 (S)
const searchBtn = document.querySelector(".search_btn");
const searchImg = searchBtn.firstElementChild;
const searchBox = document.querySelector(".detail_search_box");
const searchCloseBtn = document.querySelector(".search_close_btn");

searchBtn.onclick = () => {
  searchImg.classList.add("active");
  searchBox.classList.add("active");
  overlayOn();
};

searchCloseBtn.onclick = () => {
  searchImg.classList.remove("active");
  searchBox.classList.remove("active");
  overlayOff();
};
// 검색창 클릭시 팝업창 (E)

// all_nav_menu 팝업창 (S)
const allNavBtn = document.querySelector(".all_nav_btn");
const popupMenu = document.querySelector(".popup_menu");
const allNavCloseBtn = document.querySelector(".close_btn");

allNavBtn.onclick = () => {
  popupMenu.classList.add("active");
  overlayOn();
};

allNavCloseBtn.onclick = () => {
  popupMenu.classList.remove("active");
  overlayOff();
};

const menuListItems = document.querySelectorAll(".all_menu_list > li > a");
const menuDepths = document.querySelectorAll(".menu_depth div");
// foreach매서드에 두가지 매개변수를 전달할수있는데 두번째가 해당요소의 인덱스값을 나타낸다.(menuListItem, index)
menuListItems.forEach((menuListItem, index) => {
  menuListItem.addEventListener("click", function () {
    menuListItems.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");

    menuDepths.forEach((item) => {
      item.classList.remove("active");
    });
    menuDepths[index].classList.add("active");
  });
});

// // all_nav_menu 팝업창 (E)

// 메인배너 슬라이더
const swiper = new Swiper(".main_banner > .swiper", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 메인배너 슬라이더

// 스크롤박스 (S)
let scrollNum = 0;
const noticeList = document.querySelector(".notice .scroll_list");
const recruitList = document.querySelector(".recruit .scroll_list");
const noticeItemClone = noticeList.children[0].cloneNode(true);
const recruitItemClone = recruitList.children[0].cloneNode(true);
noticeList.appendChild(noticeItemClone);
recruitList.appendChild(recruitItemClone);

setInterval(() => {
  scrollNum++;
  const scrollLists = document.querySelectorAll(".scroll_list");
  scrollLists.forEach((list) => {
    list.style.transition = "all ease 0.5s";
    list.style.marginTop = `${scrollNum * -27}px`;
  });
  if (scrollNum === 7) {
    setTimeout(() => {
      scrollLists.forEach((list) => {
        list.style.transition = "none";
        list.style.marginTop = "0px";
      });
      scrollNum = 0;
    }, 500);
  }
}, 5000);

// 스크롤박스 (E)
// 이벤트 배너 슬라이드(S)
let bullet = ["01", "02", "03"];
const eventSwiper = new Swiper(".event_box > .swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "custom_bullet",
    bulletActiveClass: "swiper-pagination-custom-bullet-active",
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><span>' +
        bullet[index] +
        "</span></div>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 이벤트 배너 슬라이드 (E)
// 라스트 배너 슬라이드 (S)

const lastSwiper = new Swiper(".last_banner > .swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 라스트 배너 슬라이드 (E)
// 푸터 addlist (S)
const firstList = document.querySelector(".first_list > ul");
const firstListImg = document.querySelector(".first_list > button > img");
const firstListBtn = document.querySelector(".first_list > button");
const twoList = document.querySelector(".two_list > ul");
const twoListImg = document.querySelector(".two_list > button > img");
const twoListBtn = document.querySelector(".two_list > button");

const firstListOff = () => {
  firstList.classList.remove("active");
  firstListImg.classList.remove("active");
};

const twoListOff = () => {
  twoList.classList.remove("active");
  twoListImg.classList.remove("active");
};

firstListBtn.onclick = () => {
  if (firstList.classList.contains("active")) {
    firstListOff();
  } else {
    firstList.classList.add("active");
    firstListImg.classList.add("active");
  }
};

document.querySelector(".first_list").onmouseleave = () => {
  firstListOff();
};

twoListBtn.onclick = () => {
  if (twoList.classList.contains("active")) {
    twoListOff();
  } else {
    twoList.classList.add("active");
    twoListImg.classList.add("active");
  }
};

document.querySelector(".two_list").onmouseleave = () => {
  twoListOff();
};
// 푸터 addlist (E)
// 푸터 슬라이드 (S)
let footerSlideCount = 0;
const footerSlider = document.querySelector(".footer_slider ul");
const footerItems = document.querySelectorAll(".footer_slider li");
const footerItemClone = footerItems[0].cloneNode(true);
footerSlider.appendChild(footerItemClone);

setInterval(() => {
  footerSlideCount++;
  footerSlider.style.transition = "all ease 0.5s";
  footerSlider.style.marginLeft = `${footerSlideCount * -206}px`;
  if (footerSlideCount === 7) {
    setTimeout(() => {
      footerSlider.style.transition = "none";
      footerSlider.style.marginLeft = "0px";
      footerSlideCount = 0;
    }, 500);
  }
}, 5000);

// 푸터 슬라이드 (E)
