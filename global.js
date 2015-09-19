Processing = {
    start: function () {
        document.body.insertAdjacentHTML("beforeend",
            "<div class='processing'><div class='spinner-container'><i class='fa fa-spinner fa-pulse'></i></div></div>");
    },
    stop: function () {
        var list = document.getElementsByClassName("processing");
        for (var i = 0; i < list.length; i++) {
            document.body.removeChild(list[i]);
        }
    }
};