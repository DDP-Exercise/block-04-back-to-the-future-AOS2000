"use strict";

export let timeModel = {
    getTime: function () {
        let now = new Date();

        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        };
    }
};