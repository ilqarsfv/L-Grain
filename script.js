$(".trigram").click(function () {
    $('#menu').animate({
        left: '0px'
    }, 300)
    $('.trigram').css("display", "none");
    $('.x').css("display", "block");
})
$(".x").click(function () {
    $('#menu').animate({
        left: '-250px'
    }, 300)
    $('.x').css("display", "none");
    $('.trigram').css("display", "block");
})