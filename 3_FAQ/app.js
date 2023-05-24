// document.addEventListener('DOMContentLoaded', function() {
//   const h4Elements = document.querySelectorAll('h4');

//   h4Elements.forEach(function(h4Element) {
//     // 여기에 클릭 이벤트 리스너를 추가하는 코드를 작성합니다.
//     h4Element.addEventListener('click', function() {
//       // 클릭된 h4 요소의 다음 형제 요소인 p 요소를 찾습니다.
//       const pElement = this.nextElementSibling;

//       // p 요소가 숨겨져 있는 경우 보이도록 스타일을 변경합니다.
//       if (pElement.style.display === 'none' || pElement.style.display === '') {
//         pElement.style.display = 'block';
//       } else {
//         // p 요소가 보이고 있는 경우 숨기도록 스타일을 변경합니다.
//         pElement.style.display = 'none';
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const h4Els = document.querySelectorAll("h4");

  h4Els.forEach(function (h4El) {
    h4El.addEventListener("click", function () {
      const pEl = this.nextElementSibling;
      if (pEl.style.display === 'none' || pEl.style.display === ''){
        pEl.style.display = "block"
      } else{
        pEl.style.display = "none"
      }
    });
  });
});
