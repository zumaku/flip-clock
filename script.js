let myhour, myminute, mysecond;

function flipNumber(el, newnumber) {
    const thistop = el.querySelector(".top").cloneNode(true);
    const thisbottom = el.querySelector(".bottom").cloneNode(true);
    thistop.classList.add("new");
    thisbottom.classList.add("new");
    thisbottom.querySelector(".text").textContent = newnumber;
    el.querySelector(".top").after(thistop);
    el.querySelector(".top.new").appendChild(thisbottom);
    el.classList.add("flipping");
    el.querySelector(".top:not(.new)").querySelector(".text").textContent =
        newnumber;
    setTimeout(function () {
        el
            .querySelector(".bottom:not(.new)")
            .querySelector(".text").textContent = newnumber;
    }, 500);
}

function setTime() {
    document.querySelectorAll(".flipper").forEach(function (flipper) {
        flipper.classList.remove("flipping");
        flipper.querySelectorAll(".new").forEach(function (newEl) {
            newEl.remove();
        });
    });

    const date = new Date();
    let seconds = date.getSeconds().toString();
    if (seconds.length == 1) {
        seconds = "0" + seconds;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    let hour = date.getHours();
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour == 0) {
        hour = 12;
    }
    hour = hour.toString();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    if (myhour[0].textContent !== hour) {
        flipNumber(myhour[0].closest(".flipper"), hour);
    }
    if (myminute[0].textContent !== minutes) {
        flipNumber(myminute[0].closest(".flipper"), minutes);
    }
    if (mysecond[0].textContent !== seconds) {
        flipNumber(mysecond[0].closest(".flipper"), seconds);
    }
    setTimeout(setTime, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    myhour = document.querySelectorAll(
        ".clock .flipper:nth-child(1) div:not(.new) .text"
    );
    myminute = document.querySelectorAll(
        ".clock .flipper:nth-child(2) div:not(.new) .text"
    );
    mysecond = document.querySelectorAll(
        ".clock .flipper:nth-child(3) div:not(.new) .text"
    );
    setTime();
});
