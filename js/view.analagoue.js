"use strict";

export let analogueView = {
    init: function () {
        this.hh = document.getElementById("hh");
        this.mh = document.getElementById("mh");
        this.sh = document.getElementById("sh");
        this.meridiem = document.getElementById("meridiem");
    },

    update: function (time) {
        let h = time.hours % 12;
        let m = time.minutes;
        let s = time.seconds;

        let hdeg = h * 30 + m / 2;
        let mdeg = m * 6;
        let sdeg = s * 6;

        this.hh.style.transform = "rotate(" + hdeg + "deg)";
        this.mh.style.transform = "rotate(" + mdeg + "deg)";
        this.sh.style.transform = "rotate(" + sdeg + "deg)";

        this.meridiem.textContent = time.hours >= 12 ? "PM" : "AM";
    }
};

analogueView.init();