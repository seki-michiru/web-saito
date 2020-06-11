$(function(){
    var $setElm = $('.viewer'),
    fadeSpeed = 1500,
    switchDelay = 5000;
    
    $setElm.each(function(){
        var targetObj = $(this);
        var findUl = targetObj.find('ul');
        var findLi = targetObj.find('li');
        var findLiFirst = targetObj.find('li:first');
        
        findLi.css({display:'block',opacity:'0',zIndex:'99'});
        findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);
        
        setInterval(function(){
            findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
        },switchDelay);
    });
    
    const obj = $(".scroll-animation-obj");
    const leftIn = $(".scroll-animation-left");
    $(window).on('scroll',function(){
        obj.each(function(){
            const objPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowH = $(window).height();
            if(scroll > objPos - windowH){
                $(this).css({
                    'opacity': '1'
                });
            } else {
                $(this).css({
                    'opacity': '0'
                });
            }
        });
        leftIn.each(function(){
            const objPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowH = $(window).height();
            if(scroll > objPos - windowH){
                $(this).css({
                    'transform': 'translate(0,0)'
                });
            } else {
                $(this).css({
                    'transform': 'translate(-120px,0)'
                });
            }
        });
        
        
        
        
        $(document).ready(function() {
            var pagetop = $('.pagetop');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) {
                    pagetop.fadeIn();
                } else {
                    pagetop.fadeOut();
                }
            });
            pagetop.click(function () {
                $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
            });
        });
        
    });
    
});
