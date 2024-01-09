document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-menu").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
  if (window.innerWidth < 992) {
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            everysubmenu.style.display = "none";
          });
        });
      });

    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          e.preventDefault();
          console.log(nextEl);
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
});

$(window).one("scroll touchmove", function () {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let symbol = valueDisplay.getAttribute("data-symbol");
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue + symbol;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
      nextEl: ".right-arrow",
      prevEl: ".left-arrow",
    },
  });

  var mySwiper = new Swiper(".imgsSlider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".work-right-arrow",
      prevEl: ".work-left-arrow",
    },
  });
});

$(document).ready(function () {
  $(".slider-image").click(function () {
    var src = $(this).first().find("img").attr("src");
    $("#modalImage").attr("src", src);
    $("#imageModal").modal("show");
  });
});
