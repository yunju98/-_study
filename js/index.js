let OverlayOn = () => {
  $(".overlay").addClass("active");
}
let OverlayOff = () => {
  $(".overlay").removeClass("active");
}

//다이렉트보험 클릭시 팝업창 (S)
let DirectBtn = $(".direct_box").children().eq(0);

let DirectOff = () => {
  DirectBtn.removeClass("active").children().attr("src","./assets/img/btn_cal_off_blue.png");
  DirectBtn.next().removeClass("active")
  OverlayOff();
}

DirectBtn.click(() => {
  if(DirectBtn.hasClass("active")){
    DirectOff();
  }else{
    DirectBtn.addClass("active").children().attr("src","./assets/img/btn_cal_on_blue.png");
    DirectBtn.next().addClass("active")
    OverlayOn();
  }
});

DirectBtn.on("blur" , () => {
  DirectOff();
});
//다이렉트보험 클릭시 팝업창 (E)