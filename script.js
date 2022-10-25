let btn = document.querySelectorAll(`.btn`);
let desc = document.querySelectorAll(`.desc`);
let btn1 = document.querySelector(".b-1");

desc = [...desc];
btn = [...btn];

btn.forEach((elmBtn, indBtn) => {
  desc.forEach((elmDesc, indDesc) => {
    if (indBtn === indDesc) {
      elmBtn.addEventListener(`click`, function () {
        elmDesc.classList.toggle(`show`);
        elmBtn.classList.toggle(`hidden`);
      });
    }
  });
});
