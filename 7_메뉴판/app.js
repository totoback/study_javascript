const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./1.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./2.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./3.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드되었을 때 실행되는 이벤트 리스너
  // displayMenuItems 함수를 호출하여 초기 메뉴 항목들을 표시합니다.
  displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function (btn) {
  // 필터 버튼들에 대해 반복하면서 클릭 이벤트 리스너를 등록합니다.
  btn.addEventListener("click", function (e) {
    const category = e.target.dataset.id;
    // 클릭된 버튼의 데이터 속성인 "data-id"를 가져와서 해당 카테고리를 설정합니다.
    // "all"인 경우 모든 항목을 반환하고, 그 외의 경우 해당 카테고리에 속하는 항목들을 필터링합니다.
    const menuCategory = menu.filter(function (menuItem) {
      if (category === "all") {
        return true; // 모든 항목을 반환
      } else if (menuItem.category === category) {
        return menuItem;
      }
    });

    displayMenuItems(menuCategory);
    // 필터링된 항목들을 displayMenuItems 함수를 호출하여 화면에 표시합니다.
  });
});


function displayMenuItems(menuItems) {
  // 메뉴 항목들을 화면에 표시하는 함수
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });

  displayMenu = displayMenu.join("");
  // displayMenu 배열을 문자열로 변환하고, 각 항목들을 하나의 문자열로 결합합니다.
  // 그리고 sectionCenter 요소의 innerHTML에 할당하여 화면에 표시합니다.
  sectionCenter.innerHTML = displayMenu;
}
