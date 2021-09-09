$(document).ready(function () {
  $(function () {
    $(
      "#flower01, #flower02, #flower03, #flower04, #flower05, #flower06, #deer01, #deer02, #deer03, #deer04, #tardigrade, #mri, #laptop01, #laptop02, #glitch01, #neuron"
    ).draggable();
  });

  $("#p1").click(function () {
    $(".pop-up").toggle();
  });
});

$("#p2").hover(
  function () {
    $("#p3").fadeIn();
  },
  function () {
    $("#p3").fadeOut();
  }
);

// var bgImg = [
//   "url(asset/sunset.gif)",
//   "url(asset/portal.gif)",
//   "url(asset/plants01.gif)",
// ];

// var counter = 0;

// $("#garden-option").click(function () {
//   if (counter == bgImg.length) {
//     counter = 0;
//   }
//   var currentBg = bgImg[counter];
//   $("body").css("background-image", currentBg);
//   counter++;
// });
