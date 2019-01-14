$(function(){
    // モーダル画面の位置を変更する
    moveCenter();
    
    /**
     *  モーダル画面を中央に表示する処理
     */
    function moveCenter(){
        var w = $(window).width();  // 今開いている画面の横幅
        var h = $(window).height(); // 今開いている画面の縦幅

        var cw = $('.modal').outerWidth(); // モーダル画面の横幅
        var ch = $('.modal').outerHeight(); // モーダル画面の縦幅

        // 取得した値をcssに追加する
        $('.modal').css({
          'left': ((w - cw)/2) + 'px',
          'top': ((h - ch)/2) + 'px'
        });
    }
});