$(function () {


    $(".areas__item").slice(0, 9).show();
    $("#loadMore").click(function (e) {
        e.preventDefault();
        $(".areas__item:hidden").slice(0, 3).fadeIn("slow");
        $(".areas__item").removeClass("areas__item--hide");

        if ($(".areas__item:hidden").length == 0) {
            $("#loadMore").fadeOut("slow");
        }
    });


});