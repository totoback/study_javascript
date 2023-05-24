const homeBtns = document.querySelectorAll(".nav-link");
const homeContents = document.querySelectorAll(".tab-pane");

document.addEventListener("DOMContentLoaded", function () {
  // DOMContentLoaded 이벤트가 발생했을 때, 각 homeBtns 요소에 대해 click 이벤트 리스너를 등록합니다.
  homeBtns.forEach(function (homeBtn) {
    homeBtn.addEventListener("click", function () {
      const target = homeBtn.getAttribute("data-target");
      // 클릭 이벤트가 발생했을 때, 클릭한 탭 버튼(homeBtn)의 data-target 속성 값을 가져옵니다.
      // 이 속성 값은 해당 탭 버튼에 대응하는 컨텐츠의 id를 나타냅니다.
      homeContents.forEach(function (homeContent) {
        if (homeContent.id === target) {
          // homeContents 요소를 순회하면서, 각 요소의 id와 target을 비교합니다.
          homeContent.classList.add("active");
          // id와 target이 일치하는 경우, 해당 컨텐츠 요소에 active 클래스를 추가하여 화면에 표시합니다.
        } else {
          homeContent.classList.remove("active");
          // id와 target이 일치하지 않는 경우, 해당 컨텐츠 요소에서 active 클래스를 제거하여 숨깁니다.
        }
      });
    });
  });
});
