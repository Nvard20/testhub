
$('.sets-link ').on('click', function () {

  
    $('.sets-link ').removeClass('active-link ') ;
   $(this).addClass('active-link')

  
});
$('#pass').click(function(){
    $('.stream').css({'display':'none'});
    $('.pass-page').css({'display':'block'});
    $('.info-account').css({'display':'none'});

});
$('#rasp').click(function(){
    $('.stream').css({'display':'block'});
    $('.pass-page').css({'display':'none'});
    $('.info-account').css({'display':'none'});


});
$('#info').click(function(){
    $('.stream').css({'display':'none'});
    $('.pass-page').css({'display':'none'});
    $('.info-account').css({'display':'block'});


});
$(".op-invite").click(function(){
    $('.invite-container').toggle();
});
$('.aside-chat ').on('click', function () {

  
    $('.aside-chat ').removeClass('active-chat ') ;
   $(this).addClass('active-chat')

  
});
$('.chat').click(function(){
    $('.aside-bar').addClass('aside-bar-open');
})
$('.close').click(function(){
    $('.aside-bar').removeClass('aside-bar-open');
});
$('.link-2').click(function(){
$('.inner-1').hide();
$('.inner-2').show();

});
$('.link-1').click(function(){
    $('.inner-1').show();
    $('.inner-2').hide();
});
$('.account_img').click(function(){
    $('.auth-settings').toggle();
});
$('.lang-item').click(function(){
    $('.lang').toggle();
});
$('.akt').click(function(){
$('.all-st').hide();
$('.alltrans').show();
});
$('.allf').click(function(){
    $('.all-st').show();
    $('.alltrans').hide();
    });