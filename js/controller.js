"use strict";

import { timeModel } from "./model.time.js";
import { digitalView } from "./view.digital.js";
import { analogueView } from "./view.analagoue.js";

let clockController = {
    updateClock: function () {
        let time = timeModel.getTime();
        digitalView.update(time);
        analogueView.update(time);
    },

    init: function () {
        this.updateClock();

        let self = this;
        setInterval(function () {
            self.updateClock();
        }, 1000);
    }
};

window.addEventListener("load", function () {
    clockController.init();
});