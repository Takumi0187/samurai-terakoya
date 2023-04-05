$(function(){
  $('#fadeOut').on('click', function(){
    // 不透明度を０にする（フェードアウトする）
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function(){
    // 不透明度を1にする（フェードインする）
    $('.box').css('opacity', 1);
  });
  $('#slideUp').on('click', function(){
    // 高さを0にする（スライドアップする）
    $('.box').css('height', 0);
  });
  $('#slideDown').on('click', function(){
    // 高さを200にする（スライドダウンする）
    $('.box').css('height', 200);
  });
});