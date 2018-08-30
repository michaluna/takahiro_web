$(function(){

    $(window).on('scroll', function(){
        //上からのスクロール値
        var dy = $(this).scrollTop(); //dy = document Y
        if(dy >= 10){
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0.5)');
        }else{
            $('.glonav').css('background-color', 'rgba(188, 188, 188, 0)');
        }

    });

});
