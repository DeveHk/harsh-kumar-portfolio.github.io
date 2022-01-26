
alert(
    "Hello Visiter, Please read the functionalities\n 1.    Navigation bar changes on scrolling \n 2.   In SKILL section, Level Indicators appear on hovering a skill icon "
);

let headD = document.querySelector(".head")
let [homeBtn, hobiBtn, skillBtn, b1, b2] = [document.querySelector("#__1"), document.querySelector("#__2"), document.querySelector("#__3"), document.querySelector("#b1"), document.querySelector("#b2")]

document.addEventListener("scroll", (e) => {
    let srw = window.scrollY
    if (srw > 23)
        headD.id = "head2";
    else
        headD.id = "head1";
    if (srw < 760) {
        homeBtn.classList.add("onHo");
        hobiBtn.classList.remove("onHo");
        skillBtn.classList.remove("onHo");
    }
    else if (srw < 1464) {
        homeBtn.classList.remove("onHo");
        hobiBtn.classList.add("onHo");
        skillBtn.classList.remove("onHo");
    }
    else {
        homeBtn.classList.remove("onHo");
        hobiBtn.classList.remove("onHo");
        skillBtn.classList.add("onHo");
    }

})

homeBtn.addEventListener("click", (e) => {
    window.scroll(0, 0);
})
hobiBtn.addEventListener("click", (e) => {
    window.scroll(0, 800);
})
b1.addEventListener("click", (e) => {
    window.scroll(0, 800);
})

skillBtn.addEventListener("click", (e) => {
    window.scroll(0, 1584);
})
b2.addEventListener("click", (e) => {
    window.scroll(0, 1584);
})

let skillDiv = document.querySelectorAll(".s_img_box")
let sBar = document.querySelectorAll(".bar")
for (let i = 0; i < 5; i++) {
    skillDiv[i].addEventListener("mouseover", (e) => {
        sBar[i].classList.add("bar_onHo")
    })
    skillDiv[i].addEventListener("mouseout", (e) => {
        sBar[i].classList.remove("bar_onHo")
        e.stopPropagation()
    })
}

