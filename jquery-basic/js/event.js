$(function() {
  $('#div1').on({
    'click': () => {
      // 背景を赤
      $('#div1').css('background-color', 'red');
      // テキストを「click」
      $('#div1').text('click');
    },
    'dblclick': () => {
      // 背景を緑
      $('#div1').css('background-color', 'green');
      // テキストを「dblclick」
      $('#div1').text('dblclick');
    },
    'mouseenter': () => {
      // 背景を青
      $('#div1').css('background-color', 'blue');
      // テキストを「mouseenter」
      $('#div1').text('mouseenter');
    },
    'mouseout': () => {
      // 背景をグレー
      $('#div1').css('background-color', 'gray');
      // テキストを「mouseout」
      $('#div1').text('mouseout');
    },
  });

  $(document).on('click keydown', (e) => {
    // クリックされた場合
    if(e.type === 'click'){
      $('#div2').text('クリックされました！');
    }
    // キーが押された場合
    if(e.type === 'keydown'){
      $('#div2').text('キーが押されました！');
    }
  });
});