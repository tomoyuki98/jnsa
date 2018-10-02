jQuery(function($) {
  var $form = $('form.wpcf7-form');
  $form.find('select[name^="menu"]').on('select', function(){
    var $that = $(this);
    var size = $that.val();
    var suffix = name.substring('menu'.length);
    if (size == "L"){
      var snaprice = 100;
    } else {
      snaprice = 200;
    }
    var sprice=parseInt(snaprice.val(), 10);
    $form.find('input[name="sprice' + suffix + '"]').val(sprice);



    $form.find('input[name^="number"]').on('input', function() {
      var $that = $(this);
      var name = $that.attr('name');
      var suffix = name.substring('number'.length);
      var price = parseInt($form.find('input[name="price' + suffix + '"]').val(), 10);//price81の値を取得、数値に型変換
      var number = parseInt($that.val(), 10);//number81の値を取得、数値に型変換
      var sum = price * number;//小計
      var snapsum = sprice * number;//スナップ小計

      $form.find('input[name="sum' + suffix + '"]').val(sum);//sum81に変数sumの値をセット
      $form.find('input[name="snapsum' + suffix + '"]').val(snapsum);//snapsumに変数snapsumの値をセット

      var totala = 0;
      $form.find('input[name^="sum"]').each(function() {
        totala += parseInt($(this).val(), 10);
      });

      var totalb = 0;
      $form.find('input[name^="snapsum"]').each(function() {
        totalb += parseInt($(this).val(), 10);
      });
      
      var total = totala + totalb;

      $form.find('input[name="total"]').val(total);
    });

  });

});
