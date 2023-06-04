const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// 버튼 클릭 이벤트 리스너 추가
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    // 버튼에 "slide" 클래스가 없는 경우
    btn.classList.add("slide"); // "slide" 클래스 추가
    video.pause(); // 비디오 일시 정지
  } else {
    // 버튼에 "slide" 클래스가 있는 경우
    btn.classList.remove("slide"); // "slide" 클래스 제거
    video.play(); // 비디오 재생
  }
});

// preloader 요소 선택
const preloader = document.querySelector(".preloader");

// 윈도우 로드 이벤트 리스너 추가
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader"); // "hide-preloader" 클래스 추가하여 프리로더 숨김
});
