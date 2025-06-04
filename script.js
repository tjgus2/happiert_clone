// 헤더 페이드인
const header = document.querySelector("header");

let posY = 0;
// 스크롤의 위치값을 담는 변수

window.addEventListener("scroll", (e) => {
    if (posY < window.scrollY) {
        headerHide();
    }
    else {
        headerShow();
    }
    posY = window.scrollY;
})

function headerHide() {
    header.classList.add("hide");
}

function headerShow() {
    header.classList.remove("hide");
}

// 스크롤페이드인
const content = document.querySelectorAll(".to_bottom");
window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    for (let i = 0; i < content.length; i++) {
        const contentTop = content[i].getBoundingClientRect().top;
        if (contentTop - windowHeight < 0) {
            content[i].classList.add("in");
        }
        else {
            content[i].classList.remove("in");
        }
    }
});
