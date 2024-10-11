$(".dropdown")
  .mouseover(function () {
    $(this).find(".dropdown-content").addClass("show");
  })
  .mouseout(function () {
    $(this).find(".dropdown-content").removeClass("show");
  });

// 검색창 보여주고 닫기
$(".search_button").on("click", function () {
  $(".search-container").fadeIn();
});
$(".search-overlay").on("click", function () {
  $(".search-container").fadeOut();
});
