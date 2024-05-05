(function ($) {

    $(window).on("load", function() {
        setTimeout(() => {
            $("#js-preloader").addClass("loaded");
        }, 1000);
    })

})(window.jQuery);