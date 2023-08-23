console.log('loaded')
$('.tela').slideUp()
$('.menu a').click(Paginator)
$('footer a').click(Paginator)
$('.mobile-start').click(function(){
    $('.tela').show()
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".tela-1").offset().top
    }, 1000);
})
function Paginator(e) {
    e.preventDefault()
    
    switch ($(this).attr('class')) {
        case 'link-1':
            $('.tela').slideUp(0)
            $('.tela-1').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-1").offset().top
            }, 1000);
            break;
        case 'link-2':
            $('.tela').slideUp(0)
            $('.tela-2').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-2").offset().top
            }, 1000);
            break;
        case 'link-3':
            $('.tela').slideUp(0)
            $('.tela-3').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-3").offset().top
            }, 1000);
            break;
        case 'link-4':
            $('.tela').slideUp(0)
            $('.tela-4').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-4").offset().top
            }, 1000);
            break;
        case 'link-5':
            $('.tela').slideUp(0)
            $('.tela-5').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-5").offset().top
            }, 1000);
            break;
        case 'link-6':
            $('.tela').slideUp(0)
            $('.tela-6').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-6").offset().top
            }, 1000);
            break;
        case 'link-7':
            $('.tela').slideUp(0)
            $('.tela-7').slideDown()
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tela-7").offset().top
            }, 1000);
            break;
        default:
            break;
    }
}