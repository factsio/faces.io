$(function(){
    $(window).scroll(function(){
        var dis = $(window).scrollTop();
        if(dis>0){
            $('.header').addClass('active');
        }else{
            $('.header').removeClass('active');
        }
    })
    $(window).scroll(function(){
        var dis=$(window).scrollTop();
        if(dis>=$('.contact_part').offset().top-150){
            $('.nav li').eq(2).addClass('current').siblings().removeClass();
        }else if(dis>=$('.team_box').offset().top-150){
            $('.nav li').eq(1).addClass('current').siblings().removeClass();
        }else if(dis>=$('.wrap').offset().top-150){
            $('.nav li').eq(0).addClass('current').siblings().removeClass();
        }else{
            $('.header_box').fadeIn(500);
        }
    })
    $('.nav li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $('html,body').animate({scrollTop:$('.screen').eq($(this).index()).offset().top-60},500);
    })
    $('.lang a').click(function(){
        $(this).parent().removeClass('current');
        $('.lan_list').slideToggle();
    })
    $('.font_desc p').click(function(){
        $(this).addClass('current').siblings().removeClass('current').parent().siblings().find('p').removeClass('current');
    })
    $('.font_desc1 p').click(function(){
        $(this).addClass('current').siblings().removeClass('current').parent().siblings().find('p').removeClass('current');
        $('.img_box2 img').removeClass('current');
        $('.img_box1 img').eq($(this).index()).addClass('current').siblings().removeClass('current');
    })
    $('.font_desc2 p').click(function(){
        $('.img_box1 img').removeClass('current');
        $('.img_box2 img').eq($(this).index()).addClass('current').siblings().removeClass('current');
    })

    var num = $('.contact_list a').length;
    $('.contact_list').css('width',num*60+'px');
    var dis = $(window).width()/2+num*30;
    $('.weichat_code').css('left',dis);
    $('.chat_link').click(function(){
        $('.weichat_code').toggleClass('current');
    })
    // $('body').not('.chat_link').click(function(){
    //     $('.weichat_code').fadeOut(500);
    // })
})