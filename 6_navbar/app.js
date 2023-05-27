const btn = document.querySelector(".btn");
const listWrap = document.querySelector(".list-wrap");

function navbar() {
  if (listWrap) {
    listWrap.classList.toggle("active");
    //햄버거 버튼을 눌렀을때 클래스 액티브를 추가함 ( 토글버튼 생성 )
  }
}

btn.addEventListener("click", navbar);
