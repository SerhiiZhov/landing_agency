let names = [['Ricky Aprilia','Founder of Varibo'],['John Smith','WTF'],['Samanta Brown','Owner LSP'],['Alice Couper','CEO NLO'],['Peter Grifin','standUp person']] 

let swiper1 = new Swiper(".review__swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return `<div tabindex="0"  class="${className}">
          <div   class="review__img_w">
            <img src="./img/review${index}.webp" alt="">
          </div>
          <p>${names[index][0]}</p>
          <p>${names[index][1]}</p>
        </div>`;
    },
  },
  loop: true,
  initialSlide: 2,
});

