$(document).ready(function() {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    $("#btnReservation").click(function() {
        $('#reserveform').modal('show');
    });
    $('.cancel-modal').click(function() {
        $('#reserveform').modal('hide');
    });
    $("#btnLogin").click(function() {
        $('#loginModal').modal('show');
    });
    $(".cancel-modal").click(function() {
        $('#loginModal').modal('hide');
    });
});
/*-- we use id so  $("#btnReservation")
if we use class $('.cancel-modal').click(function() */