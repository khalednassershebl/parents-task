$(document).ready(function () {

    $(".like-option").on("click", function () {
        $(this).toggleClass("post-option-active");

        if ($(this).hasClass("post-option-active")) {
            $(this).parent().prev().find(".num-likes").text(parseInt($(this).parent().prev().find(".num-likes").text()) + 1);
        } else {
            $(this).parent().prev().find(".num-likes").text(parseInt($(this).parent().prev().find(".num-likes").text()) - 1);
        }

    });

    $(".comment-option").on("click", function () {
        $(this).parent().next().find(".tab-box-item-content").toggleClass("hide");
        $(this).parent().next().find(".type-comment .form-group").addClass("active-input");
        $(this).parent().next().find(".type-comment .form-group .form-control").focus();
        $(this).parent().next().find(".type-comment").scrollTop(50);
    });

    $(".commnet-actions .comment-replay").on("click", function () {
        $(this).parent().next().toggleClass("comment-replays-hide");
        $(this).parent().next().find(".form-group").addClass("active-input");
        $(this).parent().next().find(".form-group .form-control").focus();
        $(this).parent().next().find(".type-replay").scrollTop(50);
    });

    $(".replay-actions .comment-replay").on("click", function () {
        $(this).parent().parent().parent().find(".replayer-name").text("@ " + $(this).parent().prev().find(".media-body p a").text());
        $(this).parent().parent().next().find(".form-group").addClass("active-input");
        $(this).parent().parent().next().find(".form-group .form-control").focus();
        $(this).parent().parent().next().scrollTop(50);
    });

    $(".comment-react").on("click", function () {

        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {
            $(this).prev().text(parseInt($(this).prev().text()) + 1);
        } else {
            $(this).prev().text(parseInt($(this).prev().text()) - 1);
        }

    });


});