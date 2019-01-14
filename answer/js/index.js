
// jQueryを書く場合は、
// $(function(){ // この中に処理を書いていく });
$(function(){
  // btn_openクラスのボタンクリックイベント
  $('.btn_open').on('click', function() {
    // btn_openクラスのボタンをクリックした後の処理をここに書く

    // 記入した文言を取得して、モーダル画面にセットする。
    var input_title; // 文言を入れておく変数を用意する。
    input_title = $('.title1').val(); // 用意した変数に記入した文言をセットする。
    $('.display_title1').text(input_title); // モーダル画面のdisplay_titleクラスに文言をセットする。
    input_title = $('.title2').val(); // 用意した変数に記入した文言をセットする。
    $('.display_title2').text(input_title); // モーダル画面のdisplay_titleクラスに文言をセットする。

    // 選択した写真の種類を取得して、モーダル画面にセットする。
    var input_photo; // 選択した写真名を入れておく変数を用意する。
    input_photo = $("input[name='photo']:checked").val(); // チェックした写真の名前を取得する。
    var src_photo;
    src_photo = 'img/' + input_photo + '.jpg'; // 写真のファイルパスを生成する。
    $('.display_photo').attr('src', src_photo);

    // モーダル画面を表示する
    $('.modal, .modal_overlay').fadeIn('slow');
  });

  // modal_overlayクラスをクリックした時の処理
  $('.modal_overlay').on('click', function() {
    // モーダル画面を閉じる
    $('.modal, .modal_overlay').fadeOut('slow');
  });

  
});


